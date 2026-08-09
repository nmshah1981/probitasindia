"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Pure SVG technical motifs used sparingly across the site.
 * No external assets, fully responsive, themeable via currentColor.
 */

/* Structural grid with subtle nodes */
export function StructuralGrid({
  className,
  cellSize = 48,
}: {
  className?: string;
  cellSize?: number;
}) {
  const w = 600;
  const h = 360;
  const cols = Math.floor(w / cellSize);
  const rows = Math.floor(h / cellSize);
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${w} ${h}`}
      className={cn("h-full w-full", className)}
      fill="none"
    >
      <defs>
        <pattern
          id="struct-grid"
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.18"
          />
        </pattern>
      </defs>
      <rect width={w} height={h} fill="url(#struct-grid)" />
      {Array.from({ length: cols + 1 }).map((_, i) =>
        Array.from({ length: rows + 1 }).map((_, j) => (
          <circle
            key={`${i}-${j}`}
            cx={i * cellSize}
            cy={j * cellSize}
            r="1.5"
            fill="currentColor"
            opacity="0.45"
          />
        )),
      )}
    </svg>
  );
}

/* A schematic portal frame / structural bay */
export function PortalFrame({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 480 280"
      className={cn("h-full w-full", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {/* ground */}
      <line x1="20" y1="250" x2="460" y2="250" strokeWidth="1.5" />
      {/* columns */}
      <line x1="60" y1="60" x2="60" y2="250" />
      <line x1="240" y1="60" x2="240" y2="250" />
      <line x1="420" y1="60" x2="420" y2="250" />
      {/* rafters */}
      <line x1="60" y1="60" x2="240" y2="40" />
      <line x1="240" y1="40" x2="420" y2="60" />
      {/* bracing */}
      <line x1="60" y1="120" x2="240" y2="100" opacity="0.5" />
      <line x1="240" y1="100" x2="420" y2="120" opacity="0.5" />
      <line x1="60" y1="180" x2="240" y2="160" opacity="0.3" />
      <line x1="240" y1="160" x2="420" y2="180" opacity="0.3" />
      {/* nodes */}
      {[
        [60, 60],
        [240, 40],
        [420, 60],
        [60, 120],
        [240, 100],
        [420, 120],
        [60, 250],
        [240, 250],
        [420, 250],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" />
      ))}
      {/* dim lines */}
      <line x1="60" y1="265" x2="240" y2="265" opacity="0.4" />
      <line x1="60" y1="262" x2="60" y2="268" opacity="0.4" />
      <line x1="240" y1="262" x2="240" y2="268" opacity="0.4" />
      <line x1="240" y1="265" x2="420" y2="265" opacity="0.4" />
      <line x1="420" y1="262" x2="420" y2="268" opacity="0.4" />
    </svg>
  );
}

/* Coordinate cross + tick marks */
export function CoordinateCross({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 120"
      className={cn("h-full w-full", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <line x1="60" y1="10" x2="60" y2="110" opacity="0.5" />
      <line x1="10" y1="60" x2="110" y2="60" opacity="0.5" />
      <circle cx="60" cy="60" r="2.5" fill="currentColor" />
      {[20, 40, 80, 100].map((p) => (
        <g key={p}>
          <line x1={p} y1="58" x2={p} y2="62" opacity="0.4" />
          <line x1="58" y1={p} x2="62" y2={p} opacity="0.4" />
        </g>
      ))}
      <line x1="60" y1="10" x2="60" y2="110" opacity="0" />
    </svg>
  );
}

/* Animated line-draw of a structural elevation */
export function AnimatedElevation({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 240"
      className={cn("h-full w-full", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <line
        x1="40"
        y1="200"
        x2="560"
        y2="200"
        strokeWidth="1.5"
        style={{
          strokeDasharray: 600,
          strokeDashoffset: 0,
          animation: "draw 2.2s ease-out forwards",
        }}
      />
      {[
        [80, 60],
        [220, 60],
        [360, 60],
        [500, 60],
      ].map(([x, y], i) => (
        <line
          key={`c-${i}`}
          x1={x}
          y1={y}
          x2={x}
          y2="200"
          style={{
            strokeDasharray: 200,
            strokeDashoffset: 200,
            animation: `draw 1.6s ease-out ${0.2 + i * 0.15}s forwards`,
          }}
        />
      ))}
      <line
        x1="80"
        y1="60"
        x2="500"
        y2="60"
        style={{
          strokeDasharray: 500,
          strokeDashoffset: 500,
          animation: "draw 1.6s ease-out 0.6s forwards",
        }}
      />
      {[
        [80, 60],
        [220, 60],
        [360, 60],
        [500, 60],
        [80, 200],
        [220, 200],
        [360, 200],
        [500, 200],
      ].map(([x, y], i) => (
        <circle
          key={`n-${i}`}
          cx={x}
          cy={y}
          r="2.5"
          fill="currentColor"
          style={{
            opacity: 0,
            animation: `fade 0.4s ease-out ${1.6 + i * 0.05}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes fade { to { opacity: 1; } }
      `}</style>
    </svg>
  );
}

/* MEP coordination schematic — ducts/pipes/conduits as parallel runs */
export function MepSchematic({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 280"
      className={cn("h-full w-full", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {/* duct */}
      <rect x="40" y="60" width="520" height="22" opacity="0.7" />
      <line x1="40" y1="71" x2="560" y2="71" opacity="0.4" strokeDasharray="4 4" />
      {/* pipe */}
      <line x1="40" y1="120" x2="560" y2="120" strokeWidth="2" opacity="0.7" />
      <line x1="40" y1="130" x2="560" y2="130" strokeWidth="2" opacity="0.7" />
      {/* conduit */}
      <line x1="40" y1="170" x2="560" y2="170" strokeWidth="1.2" opacity="0.6" strokeDasharray="2 4" />
      <line x1="40" y1="180" x2="560" y2="180" strokeWidth="1.2" opacity="0.6" strokeDasharray="2 4" />
      {/* hangers */}
      {[100, 220, 340, 460].map((x) => (
        <g key={x} opacity="0.5">
          <line x1={x} y1="40" x2={x} y2="200" />
          <circle cx={x} cy="40" r="2" fill="currentColor" />
        </g>
      ))}
      {/* end caps */}
      <line x1="40" y1="60" x2="40" y2="82" strokeWidth="1.5" />
      <line x1="560" y1="60" x2="560" y2="82" strokeWidth="1.5" />
    </svg>
  );
}

/* Section-mark / drawing-tag used as a recurring editorial motif */
export function DrawingTag({
  code,
  title,
  className,
}: {
  code: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-stretch border border-border bg-bone/80 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center border-r border-border px-3 py-1.5 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
        {code}
      </div>
      <div className="flex items-center px-3 py-1.5 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-foreground">
        {title}
      </div>
    </div>
  );
}
