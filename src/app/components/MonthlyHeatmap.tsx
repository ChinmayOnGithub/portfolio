'use client';
import * as d3 from 'd3';
import React, { useEffect, useRef, useMemo } from 'react';

type HeatmapData = {
  date: string; // e.g., "2025-01-01"
  value: number; // e.g., submission count
};

type Props = {
  data: HeatmapData[];
};

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getColorScale(max: number, dark: boolean) {
  // 5 shades, from light to dark green
  return d3.scaleQuantize<number>()
    .domain([0, max || 1])
    .range(
      dark
        ? ['#23272f', '#276749', '#38a169', '#68d391', '#c6f6d5']
        : ['#ebfbee', '#b7f7d8', '#6ee7b7', '#34d399', '#047857']
    );
}

function getWeeks(data: { date: string; value: number }[]): { date: string; value: number; day: number; week: number; month: number }[] {
  // Fill missing days, only last 52 weeks
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days: { date: string; value: number; day: number; week: number; month: number }[] = [];
  const dataMap = new Map(data.map(d => [d.date, d.value]));
  for (let i = 0; i < 364; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - (363 - i));
    const dateStr = d.toISOString().slice(0, 10);
    days.push({
      date: dateStr,
      value: dataMap.get(dateStr) || 0,
      day: d.getDay(),
      week: Math.floor(i / 7),
      month: d.getMonth(),
    });
  }
  return days;
}

const MonthlyHeatmap: React.FC<Props> = ({ data }) => {
  const ref = useRef<SVGSVGElement | null>(null);
  // Detect dark mode
  const dark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const days = useMemo(() => getWeeks(data), [data]);
  // Only consider nonzero values for color scale
  const nonZeroValues = days.filter(d => d.value > 0).map(d => d.value);
  const min = nonZeroValues.length > 0 ? Math.min(...nonZeroValues) : 0;
  const max = nonZeroValues.length > 0 ? Math.max(...nonZeroValues) : 1;
  // Color scale: 0 is gray, min is lightest green, max is darkest green
  const colorScale = useMemo(() => {
    return (value: number) => {
      if (value === 0) return dark ? '#23272f' : '#ebfbee';
      // 5 shades
      const shades = dark
        ? ['#276749', '#38a169', '#68d391', '#c6f6d5', '#e6fff2']
        : ['#b7f7d8', '#6ee7b7', '#34d399', '#047857', '#004d2c'];
      if (max === min) return shades[shades.length - 1];
      const idx = Math.floor(((value - min) / (max - min)) * (shades.length - 1));
      return shades[idx];
    };
  }, [min, max, dark]);

  // Month label positions
  const monthLabels: { month: string; x: number }[] = [];
  let lastMonth = -1;
  for (let i = 0; i < days.length; i += 7) {
    const m = days[i].month;
    if (m !== lastMonth) {
      monthLabels.push({ month: MONTHS[m], x: Math.floor(i / 7) });
      lastMonth = m;
    }
  }

  const box = 14;
  const gap = 3;
  const width = 53 * (box + gap) + 40;
  const height = 7 * (box + gap) + 40;

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();
    svg.attr('width', width).attr('height', height);

    // Month labels
    svg.append('g')
      .selectAll('text')
      .data(monthLabels)
      .enter()
      .append('text')
      .attr('x', d => 40 + d.x * (box + gap))
      .attr('y', 20)
      .attr('fill', dark ? '#a3a3a3' : '#444')
      .attr('font-size', 12)
      .attr('font-weight', 600)
      .text(d => d.month);

    // Day labels
    svg.append('g')
      .selectAll('text')
      .data([0, 2, 4, 6]) // Sun, Tue, Thu, Sat
      .enter()
      .append('text')
      .attr('x', 10)
      .attr('y', d => 40 + d * (box + gap) + 10)
      .attr('fill', dark ? '#a3a3a3' : '#444')
      .attr('font-size', 11)
      .attr('font-weight', 500)
      .text(d => WEEK_DAYS[d]);

    // Squares
    const cellGroup = svg.append('g');
    cellGroup.selectAll('rect')
      .data(days)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 40 + d.week * (box + gap))
      .attr('y', d => 40 + d.day * (box + gap))
      .attr('width', box)
      .attr('height', box)
      .attr('rx', 3)
      .attr('fill', d => colorScale(d.value))
      .attr('data-tip', d => `${d.date}: ${d.value} submission${d.value !== 1 ? 's' : ''}`)
      .on('mouseover', function (event, d) {
        const tooltip = d3.select('#heatmap-tooltip');
        tooltip.style('display', 'block')
          .html(`<div style='font-size:13px;font-weight:600;'>${d.date}</div><div style='font-size:12px;'>${d.value} submission${d.value !== 1 ? 's' : ''}</div>`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function () {
        d3.select('#heatmap-tooltip').style('display', 'none');
      });
  }, [days, colorScale, dark]);

  return (
    <div className="relative">
      <svg ref={ref} className="w-full h-auto" />
      <div id="heatmap-tooltip" style={{
        display: 'none',
        position: 'fixed',
        pointerEvents: 'none',
        background: dark ? '#23272f' : '#fff',
        color: dark ? '#fff' : '#23272f',
        border: '1px solid #444',
        borderRadius: 6,
        padding: '6px 10px',
        fontSize: 13,
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }} />
      {/* Legend */}
      <div className="flex items-center gap-1 mt-2 ml-10">
        <span className="text-xs text-gray-400">Less</span>
        {[0, 1, 2, 3, 4].map(i => (
          <span key={i} style={{
            display: 'inline-block',
            width: 16,
            height: 16,
            borderRadius: 3,
            background: colorScale(min + ((max - min) / 4) * i),
            marginLeft: 2,
            marginRight: 2,
          }} />
        ))}
        <span className="text-xs text-gray-400">More</span>
      </div>
    </div>
  );
};

export default MonthlyHeatmap; 