"use client";

import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export function DonutChart({
  labels,
  values,
  colors,
  centerLabel,
  centerValue,
  centerLabelColor = "#94a3b8",
  centerValueColor = "#0f172a",
}: {
  labels: string[];
  values: number[];
  colors: string[];
  centerLabel?: string;
  centerValue?: string;
  centerLabelColor?: string;
  centerValueColor?: string;
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

    const centerTextPlugin = {
      id: "centerText",
      afterDraw: (chart: Chart) => {
        if (!centerLabel && !centerValue) {
          return;
        }

        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return;
        }

        const defaultFont = Chart.defaults.font?.family;
        const fontFamily = Array.isArray(defaultFont)
          ? defaultFont.join(", ")
          : (defaultFont ?? "sans-serif");
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;

        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (centerLabel && centerValue) {
          ctx.fillStyle = centerLabelColor;
          ctx.font = `600 11px ${fontFamily}`;
          ctx.fillText(centerLabel, centerX, centerY - 8);

          ctx.fillStyle = centerValueColor;
          ctx.font = `700 14px ${fontFamily}`;
          ctx.fillText(centerValue, centerX, centerY + 10);
        } else {
          const singleText = centerValue ?? centerLabel ?? "";
          ctx.fillStyle = centerValue ? centerValueColor : centerLabelColor;
          ctx.font = `600 12px ${fontFamily}`;
          ctx.fillText(singleText, centerX, centerY);
        }

        ctx.restore();
      },
    };

    chartRef.current = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: colors,
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      },
      plugins: [centerTextPlugin],
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        maintainAspectRatio: false,
      } as any,
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [
    labels,
    values,
    colors,
    centerLabel,
    centerValue,
    centerLabelColor,
    centerValueColor,
  ]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
