"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  type ViewId,
  type Discipline,
} from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
  ImageOrPlaceholder,
  TechnicalTag,
} from "@/components/site/primitives";
import {
  AnimatedElevation,
  MepSchematic,
  DrawingTag,
} from "@/components/engineering/technical-graphics";

/* ============================================================ */
/* SECTION 02 — INTRODUCTION                                    */
/* ============================================================ */
export function IntroductionSection() {
  const { data } = useContent();
  const { company } = data;
  return (
    <section className="relative border-b border-border bg-background">
      <Container className="py-24 md:py-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow index="01">Introduction</Eyebrow>
            <div className="mt-8">
              <DrawingTag code="SEC-01" title="Firm Introduction" />
            </div>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <DisplayHeading as="h2" className="text-foreground">
                {company.introductionHeading}
              </DisplayHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-3xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                <p>{company.introductionBody}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <TechnicalTag>RCC &amp; Steel</TechnicalTag>
                <TechnicalTag>High-Rise up to G+72</TechnicalTag>
                <TechnicalTag>Airports &amp; Hangars</TechnicalTag>
                <TechnicalTag>Transit-Oriented Development</TechnicalTag>
                <TechnicalTag>Design + Peer Review</TechnicalTag>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================ */
/* SECTION 03 — CORE SERVICES                                    */
/* ============================================================ */
export function CoreServicesSection({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;
  return (
    <section className="relative border-b border-border bg-background">
      <Container className="py-24 md:py-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow index="02">Core Services</Eyebrow>
            <Reveal>
              <DisplayHeading as="h2" className="mt-8">
                Two disciplines, one engineering standard.
              </DisplayHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-steel">
                Each service is structured, documented and delivered to the same
                technical standard. Select a discipline to see scope, deliverables
                and approach.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <StaggerGroup className="flex flex-col">
              {services.map((s) => (
                <StaggerItem key={s.slug}>
                  <ServiceRow
                    service={s}
                    onClick={() => onNavigate(s.slug)}
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceRow({
  service,
  onClick,
}: {
  service: Discipline;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group block w-full border-t border-border py-8 text-left transition-colors first:border-t-0 hover:bg-concrete/30 md:py-10"
    >
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-2 md:col-span-1">
          <span className="font-mono-tight text-xs uppercase tracking-[0.18em] text-steel number-tabular md:text-sm">
            {service.index}
          </span>
        </div>
        <div className="col-span-10 md:col-span-6">
          <h3 className="font-display text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent-brand md:text-3xl lg:text-4xl">
            {service.title}
          </h3>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="text-pretty text-sm leading-relaxed text-steel">
            {service.shortDescription}
          </p>
        </div>
        <div className="col-span-12 flex justify-end md:col-span-1">
          <span className="inline-flex h-10 w-10 items-center justify-center border border-border bg-bone transition-colors group-hover:border-accent-brand group-hover:bg-accent-brand group-hover:text-bone">
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </button>
  );
}

/* ============================================================ */
/* SECTION 04 — STRUCTURAL ENGINEERING FEATURE                  */
/* ============================================================ */
export function StructuralFeatureSection({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;
  const reduce = useReducedMotion();
  const svc = services.find((s) => s.slug === "structural-engineering")!;
  return (
    <section className="relative border-b border-border bg-bone">
      <Container className="py-24 md:py-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <div className="relative">
                <ImageOrPlaceholder
                  src={svc.heroImage}
                  alt="Exposed structural concrete and steel — close architectural detail"
                  ratio="4/3"
                  label="[STRUCTURAL ENGINEERING IMAGE — OWNER TO PROVIDE]"
                  className="border border-border"
                />
                {/* Technical overlay: animated elevation drawing */}
                <div className="pointer-events-none absolute inset-0 flex items-end justify-start p-4 text-foreground/70">
                  <div className="h-1/2 w-1/2 opacity-70">
                    {!reduce && <AnimatedElevation />}
                  </div>
                </div>
                <div className="absolute right-4 top-4">
                  <DrawingTag code="STR-01" title="Structural Elevation" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:pl-6">
            <Eyebrow index={svc.index}>{svc.title}</Eyebrow>
            <Reveal>
              <DisplayHeading as="h2" className="mt-6">
                Engineering structures with precision and intent.
              </DisplayHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-steel md:text-lg">
                {svc.longDescription}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 space-y-3">
                <FieldRow label="Materials" value="RCC &amp; Structural Steel" />
                <FieldRow label="Typology" value="Airports, Hangars, High-Rise, TOD, Temples" />
                <FieldRow label="Height Range" value="Up to G+72 floors / 187 m" />
                <FieldRow label="Geography" value="Across India + UAE" />
              </div>
            </Reveal>

            {/* Two services within this division */}
            <Reveal delay={0.25}>
              <div className="mt-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {svc.services.map((s) => (
                  <div key={s.id} className="bg-bone p-5">
                    <div className="flex items-center gap-2 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                      <span className="number-tabular">{s.index}</span>
                      <span className="h-px w-5 bg-steel/40" />
                      <span>Service</span>
                    </div>
                    <div className="mt-2 font-display text-base font-medium tracking-tight">
                      {s.title}
                    </div>
                    <p className="mt-2 text-pretty text-xs leading-relaxed text-steel">
                      {s.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <button
                onClick={() => onNavigate("structural-engineering")}
                className="group mt-10 inline-flex items-center gap-3 bg-foreground px-6 py-3.5 text-bone transition-colors hover:bg-accent-brand"
              >
                <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                  Explore Structural Engineering
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================ */
/* SECTION 05 — MEP ENGINEERING FEATURE                         */
/* ============================================================ */
export function MepFeatureSection({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;
  const svc = services.find((s) => s.slug === "mep-engineering")!;
  return (
    <section className="relative border-b border-border bg-background">
      <Container className="py-24 md:py-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="order-2 md:order-1 md:col-span-5 md:pr-6">
            <Eyebrow index={svc.index}>{svc.title}</Eyebrow>
            <Reveal>
              <DisplayHeading as="h2" className="mt-6">
                Coordinated building services, engineered as a system.
              </DisplayHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-steel md:text-lg">
                {svc.longDescription}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 space-y-3">
                <FieldRow label="Mechanical" value="[MECHANICAL SERVICES — OWNER TO PROVIDE]" />
                <FieldRow label="Electrical" value="[ELECTRICAL SERVICES — OWNER TO PROVIDE]" />
                <FieldRow label="Plumbing" value="[PLUMBING SERVICES — OWNER TO PROVIDE]" />
                <FieldRow label="Specialist" value="[SPECIALIST SYSTEMS — OWNER TO PROVIDE]" />
              </div>
            </Reveal>

            {/* Two services within this division */}
            <Reveal delay={0.25}>
              <div className="mt-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {svc.services.map((s) => (
                  <div key={s.id} className="bg-background p-5">
                    <div className="flex items-center gap-2 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                      <span className="number-tabular">{s.index}</span>
                      <span className="h-px w-5 bg-steel/40" />
                      <span>Service</span>
                    </div>
                    <div className="mt-2 font-display text-base font-medium tracking-tight">
                      {s.title}
                    </div>
                    <p className="mt-2 text-pretty text-xs leading-relaxed text-steel">
                      {s.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <button
                onClick={() => onNavigate("mep-engineering")}
                className="group mt-10 inline-flex items-center gap-3 bg-foreground px-6 py-3.5 text-bone transition-colors hover:bg-accent-brand"
              >
                <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                  Explore MEP Engineering
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 md:col-span-7">
            <Reveal>
              <div className="relative">
                <ImageOrPlaceholder
                  src={svc.heroImage}
                  alt="[MEP ENGINEERING IMAGE ALT — OWNER TO PROVIDE]"
                  ratio="4/3"
                  label="[MEP ENGINEERING IMAGE — OWNER TO PROVIDE]"
                  className="border border-border"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 text-foreground/70">
                  <div className="h-1/2 w-1/2 opacity-70">
                    <MepSchematic />
                  </div>
                </div>
                <div className="absolute left-4 top-4">
                  <DrawingTag code="MEP-01" title="Services Coordination" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================ */
/* Reusable field row used in feature sections                   */
/* ============================================================ */
function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-t border-border pt-3">
      <span className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
        {label}
      </span>
      <span className="col-span-2 text-sm text-foreground/80">{value}</span>
    </div>
  );
}

/* ============================================================ */
/* CTA band — used between sections                              */
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
    <section className="border-b border-border bg-accent-brand text-bone">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <Eyebrow index="→" className="text-bone/70">
              Next Step
            </Eyebrow>
            <h3 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              {title}
            </h3>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-bone/80 md:text-base">
              {body}
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <button
              onClick={() => onNavigate(view)}
              className="group inline-flex items-center gap-3 bg-bone px-7 py-4 text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
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
