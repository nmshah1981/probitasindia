"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { company, hero, type ViewId } from "@/lib/site-content";
import { Container } from "@/components/site/primitives";

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

      {/* Dark gradient + neutral overlay — strong at top (for header legibility)
          and bottom (for hero text), lighter in the middle to let the image breathe */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink"
      />
      <div className="absolute inset-0 bg-ink/30" />

      {/* Top technical border with tick marks — drawing number removed */}
      <div className="absolute inset-x-0 top-20 z-10 hidden md:block">
        <Container>
          <div className="flex items-center justify-between border-t border-bone/20 pt-3 text-bone/60">
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              N 00°00′ · E 00°00′
            </div>
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              Structural · MEP · Peer Review
            </div>
          </div>
        </Container>
      </div>

      {/* Main hero content — logo centered, headline below */}
      <Container className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center pb-24 pt-32 text-center">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="flex flex-col items-center">
          {/* Centered Probitas logo — original colour format, increased size */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[3px] bg-bone/90 px-6 py-3 shadow-lg backdrop-blur-sm"
          >
            <img
              src="/images/probitas-logo.png"
              alt="Probitas logo"
              className="h-20 object-contain md:h-24"
            />
          </motion.div>

          {/* Headline — font size matched to the logo's wordmark */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-8 font-display text-3xl font-medium leading-[1.1] tracking-[-0.01em] text-bone sm:text-4xl md:text-5xl"
          >
            {company.heroHeadline}
          </motion.h1>

          {/* Supporting statement */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-2xl text-pretty text-sm leading-relaxed text-bone/75 md:text-base"
          >
            {company.heroSupporting}
          </motion.p>

          {/* Secondary CTA only — primary "Discuss a Project" removed per owner request */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10"
          >
            <button
              onClick={() => onNavigate("services")}
              className="group inline-flex items-center gap-3 border border-bone/30 px-6 py-3.5 text-bone transition-colors hover:border-bone hover:bg-bone/5"
            >
              <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                {company.secondaryCta}
              </span>
            </button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.button
        onClick={() =>
          window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" })
        }
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-bone/60 transition-colors hover:text-bone md:flex"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
        <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
          Scroll
        </span>
      </motion.button>
    </section>
  );
}
