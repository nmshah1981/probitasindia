"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

/* ----------------------------------------------------------------- */
/* Container — fixed max width with technical baseline grid spacing  */
/* ----------------------------------------------------------------- */
export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-6 md:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/* ----------------------------------------------------------------- */
/* Section — vertical rhythm wrapper                                  */
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
      className={cn("py-20 md:py-28 lg:py-36", className)}
      {...props}
    >
      {children}
    </section>
  );
}

/* ----------------------------------------------------------------- */
/* Eyebrow — small mono label with leading index                      */
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
        "flex items-center gap-3 font-mono-tight text-[11px] uppercase tracking-[0.22em] text-steel",
        className,
      )}
    >
      {index && <span className="number-tabular">{index}</span>}
      {index && <span className="h-px w-8 bg-current opacity-40" />}
      <span>{children}</span>
    </div>
  );
}

/* ----------------------------------------------------------------- */
/* DisplayHeading — large editorial heading                           */
/* ----------------------------------------------------------------- */
export function DisplayHeading({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) {
  const sizeMap = {
    h1: "text-4xl md:text-6xl lg:text-7xl leading-[0.95]",
    h2: "text-3xl md:text-5xl lg:text-6xl leading-[1.0]",
    h3: "text-2xl md:text-3xl lg:text-4xl leading-[1.05]",
  } as const;
  return (
    <Tag
      className={cn(
        "font-display font-medium tracking-[-0.02em] text-balance",
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
    <span className="inline-flex items-center rounded-sm border border-dashed border-steel/50 bg-concrete/40 px-2 py-0.5 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------- */
/* HairlineDivider                                                    */
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
        "block hairline",
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
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
      viewport={{ once: true, margin: "-10% 0px" }}
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
      viewport={{ once: true, margin: "-10% 0px" }}
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
/* TechnicalTag — small mono label tag                                */
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
        "inline-flex items-center gap-2 border border-border bg-bone px-3 py-1 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ----------------------------------------------------------------- */
/* ImageOrPlaceholder — renders an image or an elegant empty state    */
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
        "relative overflow-hidden bg-concrete",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-grid-fine p-6 text-center">
          <span className="mb-2 block h-px w-10 bg-steel/40" />
          <span className="font-mono-tight text-[11px] uppercase tracking-[0.2em] text-steel">
            {label ?? "Image"}
          </span>
        </div>
      )}
    </div>
  );
}
