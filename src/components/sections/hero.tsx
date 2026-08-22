"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { Container, DisplayHeading } from "@/components/site/primitives";

export function Hero({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const reduce = useReducedMotion();
  const { data } = useContent();
  const { company, hero } = data;

  return (
    <section className="relative border-b border-border bg-background pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20">
      <Container>
        {/* Hero Line Written Above Picture */}
        <div className="max-w-4xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <DisplayHeading as="h1" className="text-foreground">
              {company.heroHeadline}
            </DisplayHeading>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-3xl text-pretty text-base sm:text-lg md:text-xl leading-relaxed text-steel font-normal"
          >
            {company.heroSupporting}
          </motion.p>
        </div>

        {/* Airport Picture — Clean, Tag-Free & Framed Below Headline */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mt-10 md:mt-12 overflow-hidden border border-border bg-concrete shadow-2xs"
        >
          {hero.image ? (
            <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full max-h-[440px] overflow-hidden">
              <img
                src={hero.image}
                alt={hero.alt || "Mumbai International Airport"}
                className="h-full w-full object-cover object-center filter brightness-[0.92] contrast-[1.04]"
              />
            </div>
          ) : (
            <div className="aspect-[21/9] w-full bg-grid-fine" />
          )}
        </motion.div>
      </Container>
    </section>
  );
}
