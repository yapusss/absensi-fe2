"use client";

import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export function LineChart({
  labels,
  values,
  stroke = "#f97316",
  fill = "rgba(249,115,22,0.15)",
  tension = 0.35,
  showAllTicks = false,
  valueFormat = "number",
}: {
  labels: string[];
  values: number[];
  stroke?: string;
  fill?: string;
  tension?: number;
  showAllTicks?: boolean;
  valueFormat?: "number" | "rupiah-juta";
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

    const xTicks = showAllTicks
      ? {
          color: "#94a3b8",
          font: { size: 10 },
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        }
      : {
          color: "#94a3b8",
          font: { size: 10 },
        };

    const formatValue = (value: number) => {
      if (valueFormat === "rupiah-juta") {
        return `Rp ${Math.round(value)} jt`;
      }

      return `${value}`;
    };

    const yTicks = {
      color: "#94a3b8",
      font: { size: 10 },
      callback: (value: string | number) => formatValue(Number(value)),
    };

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            data: values,
            borderColor: stroke,
            backgroundColor: fill,
            tension,
            fill: false,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointHitRadius: 12,
            pointBackgroundColor: stroke,
            pointBorderColor: "#ffffff",
            pointBorderWidth: 2,
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (context) => formatValue(context.parsed.y),
            },
          },
        },
        interaction: { mode: "index", intersect: false },
        scales: {
          x: {
            grid: { display: false },
            ticks: xTicks,
          },
          y: {
            grid: { color: "rgba(148,163,184,0.2)" },
            ticks: yTicks,
          },
        },
        maintainAspectRatio: false,
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [labels, values, stroke, fill, tension, showAllTicks, valueFormat]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
