'use client';
import * as d3 from 'd3';
import React, { useEffect, useRef, useMemo } from 'react';

type HeatmapData = {
  date: string;
  value: number;
};

type Props = {
  data: HeatmapData[];
  animate?: boolean;
};

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getLastDayOfMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getWeeks(data: { date: string; value: number }[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dataMap = new Map(data.map(d => [d.date, d.value]));

  // Find the first day of the month 11 months ago
  const firstMonth = new Date(today.getFullYear(), today.getMonth() - 11, 1);
  // Find the Sunday on or before that day
  const start = new Date(firstMonth);
  start.setDate(firstMonth.getDate() - firstMonth.getDay());

  const days: any[] = [];
  let weekIdx = 0;
  let currentWeek: any[] = [];

  for (
    let d = new Date(start);
    d <= today;
    d.setDate(d.getDate() + 1)
  ) {
    const day = d.getDay();
    const month = d.getMonth();
    const year = d.getFullYear();
    const dateStr = d.toISOString().slice(0, 10);
    const isFuture = d > today;

    // If this is the 1st of a month and not Sunday, pad the rest of the previous week with nulls and start a new week BEFORE adding the 1st
    if (d.getDate() === 1 && day !== 0 && currentWeek.length > 0) {
      for (let pad = currentWeek.length; pad < 7; pad++) {
        currentWeek.push({
          date: null,
          value: 0,
          day: pad,
          week: weekIdx,
          month: month - 1 < 0 ? 11 : month - 1,
          isFuture: false,
        });
      }
      days.push(...currentWeek);
      weekIdx++;
      currentWeek = [];
    }

    currentWeek.push({
      date: dateStr,
      value: isFuture ? 0 : (dataMap.get(dateStr) || 0),
      day,
      week: weekIdx,
      month,
      isFuture,
    });

    // If this was Saturday, push the week and start a new one
    if (day === 6) {
      days.push(...currentWeek);
      weekIdx++;
      currentWeek = [];
    }
  }

  // Push the last week (possibly partial)
  if (currentWeek.length > 0) {
    days.push(...currentWeek);
  }

  // Pad the last week to 7 days if needed
  const remainder = days.length % 7;
  if (remainder !== 0) {
    const lastWeekIdx = weekIdx;
    for (let pad = remainder; pad < 7; pad++) {
      days.push({
        date: null,
        value: 0,
        day: pad,
        week: lastWeekIdx,
        month: today.getMonth(),
        isFuture: false,
      });
    }
  }

  // Group into weeks
  const numWeeks = Math.ceil(days.length / 7);
  const flat: any[] = [];
  for (let w = 0; w < numWeeks; w++) {
    for (let d = 0; d < 7; d++) {
      const idx = w * 7 + d;
      flat.push(days[idx] || {
        date: null,
        value: 0,
        day: d,
        week: w,
        month: today.getMonth(),
        isFuture: false,
      });
    }
  }
  return flat;
}

const MonthlyHeatmap: React.FC<Props> = ({ data, animate }) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const dark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const days = useMemo(() => getWeeks(data), [data]);
  const nonZeroValues = days.filter(d => d.value > 0).map(d => d.value);
  const min = nonZeroValues.length > 0 ? Math.min(...nonZeroValues) : 0;
  const max = nonZeroValues.length > 0 ? Math.max(...nonZeroValues) : 1;
  // Expanded LeetCode-style palette for more granularity
  const shades = [
    '#2d333b', // 0: background (no submissions)
    '#0e4429', // 1: 1 submission
    '#14532d', // 2: 2 submissions
    '#166534', // 3: 3 submissions
    '#15803d', // 4: 4 submissions
    '#16a34a', // 5: 5 submissions
    '#22c55e', // 6: 6 submissions
    '#4ade80', // 7: 7-9 submissions
    '#6ee07f', // 8: 10-14 submissions
    '#00ff4a', // 9: 15+ submissions (saturated green)
  ];

  function makeColorScale(data: { value: number }[]) {
    // Map submission counts to shade indices for finer granularity
    return (n: number) => {
      if (n < 1) return shades[0];
      if (n === 1) return shades[1];
      if (n === 2) return shades[2];
      if (n === 3) return shades[3];
      if (n === 4) return shades[4];
      if (n === 5) return shades[5];
      if (n === 6) return shades[6];
      if (n >= 7 && n <= 9) return shades[7];
      if (n >= 10 && n <= 14) return shades[8];
      return shades[9]; // 15+
    };
  }
  const getFill = makeColorScale(days);

  const monthLabels = useMemo(() => {
    const labels: { month: string; x: number }[] = [];
    let lastMonth = -1;
    for (let i = 0; i < days.length; i++) {
      const d = days[i];
      if (d.date !== null && d.month !== lastMonth) {
        labels.push({ month: MONTHS[d.month], x: d.week });
        lastMonth = d.month;
      }
    }
    return labels;
  }, [days]);

  // Dynamically calculate number of weeks based on data
  const weeksSet = new Set(days.map(d => d.week));
  const numWeeks = weeksSet.size;
  const box = 14;
  const gap = 3;
  const width = numWeeks * (box + gap) + 40;
  const height = 7 * (box + gap) + 40;

  useEffect(() => {
    // Responsive recalc on resize
    function handleResize() {
      if (ref.current) {
        const svg = d3.select(ref.current);
        svg.attr('viewBox', `0 0 ${width} ${height}`)
          .attr('width', '100%')
          .attr('height', 'auto')
          .attr('preserveAspectRatio', 'xMinYMin meet');
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();
    svg.attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', '100%')
      .attr('height', 'auto')
      .attr('preserveAspectRatio', 'xMinYMin meet');

    svg.append('g')
      .selectAll('text')
      .data(monthLabels)
      .enter()
      .append('text')
      .attr('x', d => 40 + d.x * (box + gap))
      .attr('y', 10)
      .attr('fill', dark ? '#a3a3a3' : '#444')
      .attr('font-size', 12)
      .attr('font-weight', 600)
      .text(d => d.month);

    svg.append('g')
      .selectAll('text')
      .data([0, 2, 4, 6])
      .enter()
      .append('text')
      .attr('x', 10)
      .attr('y', d => 40 + d * (box + gap) + 10)
      .attr('fill', dark ? '#a3a3a3' : '#444')
      .attr('font-size', 11)
      .attr('font-weight', 500)
      .text(d => WEEK_DAYS[d]);

    const cellGroup = svg.append('g');
    cellGroup.selectAll('rect')
      .data(days)
      .enter()
      .filter(d => d.date !== null && !d.isFuture)
      .append('rect')
      .attr('x', (d) => 40 + d.week * (box + gap))
      .attr('y', d => 40 + d.day * (box + gap))
      .attr('width', box)
      .attr('height', box)
      .attr('rx', 3)
      .attr('fill', d => getFill(d.value))
      .attr('data-tip', d => `${d.date}: ${d.value} submission${d.value !== 1 ? 's' : ''}`)
      .on('mouseover', function (event, d) {
        const tooltip = d3.select('#heatmap-tooltip');
        // Format date as '25 Jul 2025'
        const dateObj = new Date(d.date);
        const formattedDate = `${dateObj.getDate()} ${MONTHS[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
        tooltip.style('display', 'block')
          .html(`<div style='font-size:13px;font-weight:600;'>${formattedDate}</div><div style='font-size:12px;'>${d.value} submission${d.value !== 1 ? 's' : ''}</div>`)
          .style('left', (event.pageX + 12) + 'px')
          .style('top', (event.pageY - 12) + 'px');
      })
      .on('mouseout', function () {
        d3.select('#heatmap-tooltip').style('display', 'none');
      });
  }, [days, getFill, dark, height, monthLabels, width]);

  return (
    <div className={(animate ? 'fade-in-heatmap ' : '') + 'relative w-full max-w-full flex flex-col items-start'}>
      <div
        className="w-full flex items-center justify-center"
        style={{
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
          // Reduce margin for small screens, keep normal for desktop
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          // Use media query for desktop
          ...(typeof window !== 'undefined' && window.innerWidth >= 640 ? {
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
          } : {})
        }}
      >
        <svg ref={ref} className="w-full h-auto block" style={{marginTop: 0, marginBottom: 0}} />
      </div>
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
      {/*
      <div className="flex items-center gap-1 mt-2 ml-2 sm:ml-10">
        <span className="text-xs text-gray-400">Less</span>
        {shades.map((shade, i) => (
          <span key={shade} style={{
            display: 'inline-block',
            width: 16,
            height: 16,
            borderRadius: 3,
            background: shade,
            marginLeft: 2,
            marginRight: 2,
            border: i === 0 ? '1px solid #444' : 'none',
          }} />
        ))}
        <span className="text-xs text-gray-400">More</span>
      </div>
      */}
    </div>
  );
};

export default MonthlyHeatmap; 