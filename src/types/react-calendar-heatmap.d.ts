declare module 'react-calendar-heatmap' {
  import * as React from 'react';
  export interface CalendarHeatmapProps {
    values: { date: string; count: number }[];
    showWeekdayLabels?: boolean;
    showMonthLabels?: boolean;
    gutterSize?: number;
    horizontal?: boolean;
    transformDayElement?: (rect: React.ReactElement, value: { date: string; count: number }) => React.ReactElement;
  }
  const CalendarHeatmap: React.FC<CalendarHeatmapProps>;
  export default CalendarHeatmap;
} 