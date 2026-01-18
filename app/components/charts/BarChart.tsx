"use client";

import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export function BarChart({
  labels,
  values,
  color = "#fb7185",
  lineValues,
  lineColor = "#f43f5e",
  barRadius = 10,
  showAllTicks = false,
  compact = false,
  series,
}: {
  labels: string[];
  values: number[];
  color?: string;
  lineValues?: number[];
  lineColor?: string;
  barRadius?: number;
  showAllTicks?: boolean;
  compact?: boolean;
  series?: { label: string; values: number[]; color: string }[];
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const xTicks = {
      color: "#94a3b8",
      font: { size: 10 },
      ...(showAllTicks
        ? {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
          }
        : {}),
      ...(compact ? { padding: 0 } : {}),
    };

    const hasLine = Boolean(lineValues?.length);
    const isMulti = Boolean(series?.length);
    const barDatasets = isMulti
      ? series!.map((item) => ({
          label: item.label,
          data: item.values,
          backgroundColor: item.color,
          borderRadius: 10,
          maxBarThickness: 22,
        }))
      : [
          {
            data: values,
            backgroundColor: color,
            borderRadius: barRadius,
            maxBarThickness: 32,
          },
        ];

    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels,
        datasets: [
          ...barDatasets,
          ...(hasLine
            ? [
                {
                  type: "line" as const,
                  data: lineValues || [],
                  borderColor: lineColor,
                  backgroundColor: "transparent",
                  borderWidth: 2, 
                  pointHoverRadius: 5,
                  pointBackgroundColor: lineColor,
                  tension: 0,
                },
              ]
            : []),
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        layout: compact ? { padding: { bottom: 0, top: 4 } } : undefined,
        scales: {
          x: {
            grid: { display: false },
            ticks: xTicks,
          },
          y: {
            grid: { color: "rgba(148,163,184,0.2)" },
            ticks: { color: "#94a3b8", font: { size: 10 } },
          },
        },
        maintainAspectRatio: false,
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [
    labels,
    values,
    color,
    showAllTicks,
    compact,
    series,
    lineValues,
    lineColor,
  ]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
