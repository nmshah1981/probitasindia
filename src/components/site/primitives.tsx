"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

/* ----------------------------------------------------------------- */
/* Container — editorial container with balanced max-width            */
/* ----------------------------------------------------------------- */
export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-16", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/* ----------------------------------------------------------------- */
/* Section — vertical rhythm wrapper with architectural grid lines    */
/* ----------------------------------------------------------------- */
export function Section({
  className,
  children,
  id,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-24 md:py-32 lg:py-36", className)}
      {...props}
    >
      {children}
    </section>
  );
}

/* ----------------------------------------------------------------- */
/* Eyebrow — mono label with leading index & measurement bar          */
/* ----------------------------------------------------------------- */
export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono-tight text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-steel",
        className,
      )}
    >
      {index && <span className="number-tabular font-medium text-foreground">{index}</span>}
      {index && <span className="h-px w-6 sm:w-8 bg-steel/35" />}
      <span className="tracking-[0.22em]">{children}</span>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/* DisplayHeading — refined editorial architectural heading           */
/* ----------------------------------------------------------------- */
export function DisplayHeading({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: React.ReactNode;
}) {
  const sizeMap = {
    h1: "text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] leading-[1.12] tracking-[-0.022em]",
    h2: "text-2xl sm:text-3xl md:text-[1.875rem] lg:text-[2.25rem] leading-[1.2] tracking-[-0.02em]",
    h3: "text-xl sm:text-2xl md:text-[1.5rem] leading-[1.25] tracking-[-0.015em]",
    h4: "text-lg sm:text-xl leading-[1.3] tracking-[-0.01em]",
  } as const;
  return (
    <Tag
      className={cn(
        "font-display font-medium text-foreground text-pretty",
        sizeMap[Tag],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------------- */
/* PlaceholderPill — clearly editable placeholder marker              */
/* ----------------------------------------------------------------- */
export function PlaceholderPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-none border border-dashed border-steel/50 bg-concrete/60 px-2.5 py-1 font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel">
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------- */
/* Hairline Divider                                                  */
/* ----------------------------------------------------------------- */
export function Hairline({
  className,
  vertical = false,
}: {
  className?: string;
  vertical?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "block hairline bg-border",
        vertical ? "h-full w-px" : "h-px w-full",
        className,
      )}
    />
  );
}

/* ----------------------------------------------------------------- */
/* Reveal — scroll-triggered fade/slide using framer-motion           */
/* ----------------------------------------------------------------- */
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={revealVariants}
      transition={reduce ? undefined : { delay }}
    >
      {children}
    </Comp>
  );
}

/* ----------------------------------------------------------------- */
/* StaggerGroup + StaggerItem                                         */
/* ----------------------------------------------------------------- */
export function StaggerGroup({
  children,
  className,
  gap = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------- */
/* TechnicalTag — architectural technical stamp / badge              */
/* ----------------------------------------------------------------- */
export function TechnicalTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-border bg-bone-light/80 px-3 py-1.5 font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel shadow-2xs transition-colors hover:border-steel/60 hover:text-foreground",
        className,
      )}
    >
      <span className="h-1 w-1 bg-accent-brand/80" />
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------- */
/* ImageOrPlaceholder — renders image with high-end framing           */
/* ----------------------------------------------------------------- */
export function ImageOrPlaceholder({
  src,
  alt,
  ratio = "16/10",
  label,
  className,
  imgClassName,
}: {
  src?: string;
  alt: string;
  ratio?: string;
  label?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-concrete transition-all duration-500",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn("h-full w-full object-cover transition-transform duration-700 ease-out", imgClassName)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-grid-fine p-6 text-center">
          <span className="mb-2 block h-px w-10 bg-steel/40" />
          <span className="font-mono-tight text-[11px] uppercase tracking-[0.22em] text-steel">
            {label ?? "Image"}
          </span>
        </div>
      )}
    </div>
  );
}
