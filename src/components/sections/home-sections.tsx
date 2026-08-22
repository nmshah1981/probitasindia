"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
} from "@/components/site/primitives";
import { PortalFrame } from "@/components/engineering/technical-graphics";

/* ============================================================ */
/* SECTION 01 — INTRODUCTION                                    */
/* ============================================================ */
export function IntroductionSection() {
  const { data } = useContent();
  const { company } = data;
  return (
    <section className="relative border-b border-border bg-background">
      <Container className="py-24 sm:py-28 md:py-36">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Introduction</Eyebrow>
            <div className="mt-6 hidden lg:block h-32 w-full max-w-xs text-steel/50">
              <PortalFrame />
            </div>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <DisplayHeading as="h2" className="text-foreground">
                {company.introductionHeading}
              </DisplayHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-3xl text-pretty text-base sm:text-lg md:text-xl leading-relaxed text-steel">
                <p>{company.introductionBody}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================ */
/* CTA band — used across pages                                 */
/* ============================================================ */
export function CtaBand({
  onNavigate,
  title = "Have a project in mind?",
  body = "Start a conversation about an upcoming structural design, peer review or value engineering commission.",
  ctaLabel = "Discuss a Project",
  view = "contact",
}: {
  onNavigate: (id: ViewId) => void;
  title?: string;
  body?: string;
  ctaLabel?: string;
  view?: ViewId;
}) {
  return (
    <section className="border-b border-border bg-ink text-bone relative overflow-hidden">
      {/* Background blueprint grid watermark */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container className="relative z-10 py-18 sm:py-24 md:py-28">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow className="text-bone/70">
              Next Step
            </Eyebrow>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-bone leading-[1.2]">
              {title}
            </h3>
            <p className="mt-3 max-w-2xl text-pretty text-sm sm:text-base leading-relaxed text-bone/80">
              {body}
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <button
              onClick={() => onNavigate(view)}
              className="group inline-flex items-center gap-3 bg-bone px-8 py-4 text-ink transition-all hover:bg-accent-brand hover:text-bone"
            >
              <span className="font-mono-tight text-[11px] uppercase tracking-[0.2em] font-medium">
                {ctaLabel}
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
