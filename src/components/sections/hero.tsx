"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { company, hero, services, type ViewId } from "@/lib/site-content";
import { Container, Eyebrow } from "@/components/site/primitives";
import { DrawingTag } from "@/components/engineering/technical-graphics";
import { CoordinateCross } from "@/components/engineering/technical-graphics";

export function Hero({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax — restrained, not flashy
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.06]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.42, 0.62]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-bone"
    >
      {/* Background image with subtle parallax */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0"
      >
        {hero.image ? (
          <img
            src={hero.image}
            alt={hero.alt}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className="h-full w-full bg-grid-fine opacity-30" />
        )}
      </motion.div>

      {/* Dark gradient + neutral overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30"
      />
      <div className="absolute inset-0 bg-ink/30" />

      {/* Top technical border with tick marks */}
      <div className="absolute inset-x-0 top-20 z-10 hidden md:block">
        <Container>
          <div className="flex items-center justify-between border-t border-bone/20 pt-3 text-bone/60">
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              N 00°00′ · E 00°00′
            </div>
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              Structural · MEP · Peer Review
            </div>
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              Drawing No. 00 / 00
            </div>
          </div>
        </Container>
      </div>

      {/* Main hero content */}
      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <Eyebrow
            index="00"
            className="text-bone/70"
          >
            Engineering Consultancy
          </Eyebrow>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 max-w-5xl font-display text-4xl font-medium leading-[0.95] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            {company.heroHeadline}
          </motion.h1>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="md:col-span-6 md:col-start-1 text-pretty text-base leading-relaxed text-bone/80 md:text-lg"
            >
              {company.heroSupporting}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="md:col-span-4 md:col-start-9 md:justify-self-end"
            >
              <div className="flex flex-col gap-3 md:items-end">
                <button
                  onClick={() => onNavigate("contact")}
                  className="group inline-flex items-center gap-3 bg-bone px-6 py-3.5 text-ink transition-colors hover:bg-accent-brand hover:text-bone"
                >
                  <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                    {company.primaryCta}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => onNavigate("services")}
                  className="group inline-flex items-center gap-3 border border-bone/30 px-6 py-3.5 text-bone transition-colors hover:border-bone hover:bg-bone/5"
                >
                  <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                    {company.secondaryCta}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Service ticker / bottom strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-px border-t border-bone/15 pt-6 md:grid-cols-4"
        >
          {services.map((s) => (
            <button
              key={s.slug}
              onClick={() => onNavigate(s.slug)}
              className="group flex flex-col gap-1 py-2 text-left transition-colors hover:text-accent-brand"
            >
              <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-bone/60 number-tabular">
                {s.index} — Discipline
              </span>
              <span className="font-display text-sm font-medium tracking-tight md:text-base">
                {s.title}
              </span>
            </button>
          ))}
        </motion.div>
      </Container>

      {/* Floating drawing tag — bottom right */}
      <div className="pointer-events-none absolute bottom-6 right-6 z-10 hidden md:block">
        <DrawingTag code="DRG-00" title="Hero / Index" />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() =>
          window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" })
        }
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-6 z-10 hidden items-center gap-2 text-bone/60 transition-colors hover:text-bone md:flex"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
        <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
          Scroll
        </span>
      </motion.button>

      {/* Coordinate cross decoration */}
      <div className="pointer-events-none absolute right-6 top-32 z-10 hidden h-16 w-16 text-bone/30 md:block">
        <CoordinateCross />
      </div>
    </section>
  );
}
