"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";
import {
  PageHeader,
  ContentBlock,
  SpecTable,
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import {
  AnimatedElevation,
  PortalFrame,
  DrawingTag,
} from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

export function StructuralEngineeringView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;
  const svc = services.find((s) => s.slug === "structural-engineering")!;
  const design = svc.services[0];
  const peerReview = svc.services[1];
  const related = services
    .filter((s) => s.slug !== "structural-engineering")
    .map((s) => ({ slug: s.slug, index: s.index, title: s.title }));

  return (
    <>
      <PageHeader
        index={svc.index}
        eyebrow={svc.title}
        title={
          <>
            Structural systems
            <br />
            <span className="text-steel">designed with intent.</span>
          </>
        }
        description={svc.longDescription}
        image={svc.heroImage}
        imageAlt="Exposed structural concrete and steel — architectural detail"
        tags={[design.title, peerReview.title]}
        meta={[
          { label: "Division", value: svc.title },
          { label: "Services", value: "02" },
          { label: "Materials", value: "RCC & Structural Steel" },
        ]}
      />

      {/* Division overview */}
      <ContentBlock
        index="01"
        eyebrow="Division Overview"
        title="RCC and steel structural engineering, end to end."
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="STR-01" title="Overview" />
            <div className="h-32 w-full text-steel/60">
              <PortalFrame />
            </div>
          </div>
        }
      >
        <p>
          Probitas brings deep expertise in RCC and steel structural design
          across highly complex large-scale projects — airports, hangars,
          aircraft engine test cells, transit-oriented developments — as well as
          high-rise residential and commercial buildings. Our team
          has delivered projects across most geographies in India, with a track
          record in design, peer review, value engineering and constructability
          solutions.
        </p>
        <p>
          We balance architectural intent, structural performance, economy and
          constructability across every commission — coordinating with
          architecture, MEP and construction teams from concept through
          completion.
        </p>
      </ContentBlock>

      {/* The two services offered by this division */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="02">Services</Eyebrow>
              <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-steel">
                The Structural Engineering division delivers two distinct
                services, each with its own scope, deliverables and process.
              </p>
            </div>
            <div className="md:col-span-9">
              <StaggerGroup className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
                <StaggerItem className="bg-bone">
                  <ServiceSummaryCard
                    index={design.index}
                    title={design.title}
                    description={design.shortDescription}
                  />
                </StaggerItem>
                <StaggerItem className="bg-bone">
                  <ServiceSummaryCard
                    index={peerReview.index}
                    title={peerReview.title}
                    description={peerReview.shortDescription}
                  />
                </StaggerItem>
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================== Service 01 — Design ====================== */}
      <section id="design" className="scroll-mt-32 border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index={`${svc.index}.${design.index}`}>
                Service — {design.title}
              </Eyebrow>
              <div className="mt-8 h-32 w-full text-steel/60">
                <AnimatedElevation />
              </div>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">{design.title}</DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                  {design.longDescription}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10">
                  <SpecTable
                    rows={[
                      { label: "Structural Systems", value: "RCC frames, Steel frames, Composite, Shear walls, Cores, Long-span steel" },
                      { label: "Materials", value: "RCC, Structural Steel, Composite" },
                      { label: "Typology", value: "Airports, Hangars, Test Cells, High-Rise, TOD, Temples, Mass Housing" },
                      { label: "Geography", value: "Mumbai, Delhi NCR, Bangalore, Kolkata, Chennai, Hyderabad, Pune, Nagpur, Ahmedabad, Surat, Valsad + UAE" },
                      { label: "Deliverables", value: "Structural drawings, specifications, schedules, design basis reports" },
                    ]}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =================== Service 02 — Peer Review =================== */}
      <section
        id="peer-review"
        className="relative scroll-mt-32 border-b border-border bg-ink text-bone"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>
        <Container className="relative py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index={`${svc.index}.${peerReview.index}`} className="text-bone/70">
                Service — {peerReview.title}
              </Eyebrow>
              <div className="mt-8 h-28 w-full text-bone/40">
                <PortalFrame />
              </div>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2" className="text-bone">
                  {peerReview.title}
                </DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone/70 md:text-lg">
                  {peerReview.longDescription}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Starting a structural project?"
        body="Tell us about your project and we'll route your brief to the right team."
        ctaLabel="Discuss a Project"
        view="contact"
      />

      <RelatedServicesCta
        onNavigate={onNavigate}
        services={related}
        primaryLabel="Discuss a Project"
      />
    </>
  );
}

/* ============================================================ */
/* Service summary card — used inside the Services section       */
/* ============================================================ */
function ServiceSummaryCard({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full flex-col p-8 md:p-10">
      <div className="flex items-center gap-3">
        <span className="font-mono-tight text-[11px] uppercase tracking-[0.22em] text-steel number-tabular">
          {index}
        </span>
        <span className="h-px w-8 bg-steel/40" />
        <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
          Service
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-medium tracking-tight md:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-steel">
        {description}
      </p>
    </div>
  );
}
