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
  ImageOrPlaceholder,
  TechnicalTag,
  PlaceholderPill,
} from "@/components/site/primitives";
import {
  PageHeader,
  ContentBlock,
  SpecTable,
  ProcessTimeline,
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import {
  MepSchematic,
  DrawingTag,
  CoordinateCross,
} from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";
import { EmptyProjectsState } from "./structural-engineering-view";

export function MepEngineeringView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;
  const svc = services.find((s) => s.slug === "mep-engineering")!;
  const design = svc.services[0];
  const peerReview = svc.services[1];
  const related = services
    .filter((s) => s.slug !== "mep-engineering")
    .map((s) => ({ slug: s.slug, index: s.index, title: s.title }));

  return (
    <>
      <PageHeader
        index={svc.index}
        eyebrow={svc.title}
        title={
          <>
            Building services
            <br />
            <span className="text-steel">coordinated as a system.</span>
          </>
        }
        description={svc.longDescription}
        image={svc.heroImage}
        imageAlt="[MEP ENGINEERING HERO IMAGE — OWNER TO PROVIDE]"
        tags={[design.title, peerReview.title]}
        meta={[
          { label: "Division", value: svc.title },
          { label: "Services", value: "02" },
          { label: "Systems", value: "[SYSTEMS — OWNER TO PROVIDE]" },
          { label: "Standards", value: "[STANDARDS — OWNER TO PROVIDE]" },
          { label: "Software", value: "[SOFTWARE — OWNER TO PROVIDE]" },
        ]}
      />

      {/* Division overview */}
      <ContentBlock
        index="01"
        eyebrow="Division Overview"
        title="[MEP ENGINEERING OVERVIEW — OWNER TO PROVIDE]"
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="MEP-01" title="Overview" />
            <div className="h-32 w-full text-steel/60">
              <MepSchematic />
            </div>
          </div>
        }
      >
        <p>
          [MEP ENGINEERING OVERVIEW — OWNER TO PROVIDE: A clear description of
          the firm&apos;s MEP engineering division — its scope, its coordination
          approach, how building services are integrated with architecture and
          structure, and how it approaches both design commissions and
          independent peer review.]
        </p>
        <p>
          [ADDITIONAL OVERVIEW — OWNER TO PROVIDE: Optional second paragraph
          describing the firm&apos;s approach to energy performance, indoor
          environmental quality, sustainability and digital coordination.]
        </p>
      </ContentBlock>

      {/* The two services offered by this division */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="02">Services</Eyebrow>
              <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-steel">
                The MEP Engineering division delivers two distinct services,
                each with its own scope, deliverables and process.
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
                <MepSchematic />
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
                      { label: "Mechanical", value: "[MECHANICAL SERVICES — OWNER TO PROVIDE]" },
                      { label: "Electrical", value: "[ELECTRICAL SERVICES — OWNER TO PROVIDE]" },
                      { label: "Plumbing", value: "[PLUMBING SERVICES — OWNER TO PROVIDE]" },
                      { label: "Fire", value: "[FIRE SERVICES — ONLY IF OFFERED]" },
                      { label: "HVAC", value: "[HVAC — ONLY IF OFFERED]" },
                      { label: "BMS / Controls", value: "[BMS / CONTROLS — ONLY IF OFFERED]" },
                      { label: "Energy", value: "[ENERGY / SUSTAINABILITY — ONLY IF OFFERED]" },
                      { label: "Lighting", value: "[LIGHTING — ONLY IF OFFERED]" },
                      { label: "Vertical Transport", value: "[VERTICAL TRANSPORTATION — ONLY IF OFFERED]" },
                    ]}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-12">
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
                    Design Process
                  </div>
                  <div className="mt-6">
                    <ProcessTimeline
                      steps={[
                        {
                          title: "Brief &amp; Loads",
                          body: "[STEP 01 — OWNER TO PROVIDE: Brief development, load assessment, system strategy.]",
                        },
                        {
                          title: "Concept Design",
                          body: "[STEP 02 — OWNER TO PROVIDE: System zoning, plant selection, spatial coordination.]",
                        },
                        {
                          title: "Detailed Design",
                          body: "[STEP 03 — OWNER TO PROVIDE: Sizing, equipment selection, routing, coordination.]",
                        },
                        {
                          title: "Documentation",
                          body: "[STEP 04 — OWNER TO PROVIDE: MEP drawings, specifications, schedules.]",
                        },
                        {
                          title: "Construction Support",
                          body: "[STEP 05 — OWNER TO PROVIDE: RFI responses, site visits, commissioning oversight.]",
                        },
                        {
                          title: "Commissioning",
                          body: "[STEP 06 — OWNER TO PROVIDE: Verification, performance testing, handover.]",
                        },
                      ]}
                    />
                  </div>
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
                <CoordinateCross />
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

              <Reveal delay={0.2}>
                <div className="mt-10">
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-bone/60">
                    Typical Review Scope
                  </div>
                  <div className="mt-4">
                    <SpecTable
                      rows={[
                        { label: "Design Basis", value: "[DESIGN BASIS REVIEW — OWNER TO PROVIDE]" },
                        { label: "Load Calculations", value: "[LOAD CALCULATIONS REVIEW — OWNER TO PROVIDE]" },
                        { label: "System Selection", value: "[SYSTEM SELECTION REVIEW — OWNER TO PROVIDE]" },
                        { label: "Sizing", value: "[SIZING REVIEW — OWNER TO PROVIDE]" },
                        { label: "Coordination", value: "[COORDINATION REVIEW — OWNER TO PROVIDE]" },
                        { label: "Energy", value: "[ENERGY PERFORMANCE REVIEW — OWNER TO PROVIDE]" },
                        { label: "Maintainability", value: "[MAINTAINABILITY REVIEW — OWNER TO PROVIDE]" },
                        { label: "Code Compliance", value: "[CODE COMPLIANCE REVIEW — OWNER TO PROVIDE]" },
                      ]}
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-12">
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-bone/60">
                    Review Process
                  </div>
                  <div className="mt-6">
                    <ProcessTimeline
                      steps={[
                        {
                          title: "Engagement",
                          body: "[STEP 01 — OWNER TO PROVIDE: Confirm scope, deliverables, independence and timeline.]",
                        },
                        {
                          title: "Document Review",
                          body: "[STEP 02 — OWNER TO PROVIDE: Review of MEP design basis, calculations, drawings and specifications.]",
                        },
                        {
                          title: "Technical Analysis",
                          body: "[STEP 03 — OWNER TO PROVIDE: Independent verification of loads, system sizing, coordination and performance.]",
                        },
                        {
                          title: "Mark-ups &amp; Comments",
                          body: "[STEP 04 — OWNER TO PROVIDE: Annotated drawings and structured comment log.]",
                        },
                        {
                          title: "Review Report",
                          body: "[STEP 05 — OWNER TO PROVIDE: Consolidated peer review report with findings and recommendations.]",
                        },
                        {
                          title: "Close-out",
                          body: "[STEP 06 — OWNER TO PROVIDE: Review of designer responses and confirmation of close-out.]",
                        },
                      ]}
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-2">
                  <PlaceholderPill>
                    Owner-controlled — no fake claims about error rates or guarantees
                  </PlaceholderPill>
                  <TechnicalTag className="border-bone/20 bg-transparent text-bone/70">
                    [INDEPENDENCE — OWNER TO PROVIDE]
                  </TechnicalTag>
                  <TechnicalTag className="border-bone/20 bg-transparent text-bone/70">
                    [DELIVERABLES — OWNER TO PROVIDE]
                  </TechnicalTag>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Project types */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="03">Project Types</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">Built typologies.</DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                  [PROJECT TYPES — OWNER TO PROVIDE: Only display typologies the
                  firm has actually delivered or is equipped to deliver.]
                </p>
              </Reveal>
              <StaggerGroup className="mt-10 grid grid-cols-2 gap-px bg-border md:grid-cols-3">
                {[
                  "Residential",
                  "Commercial",
                  "Hospitality",
                  "Healthcare",
                  "Education",
                  "Industrial",
                  "Data Centres",
                  "Mixed Use",
                  "Retail",
                ].map((p, i) => (
                  <StaggerItem key={p} className="bg-bone">
                    <div className="flex h-full items-start justify-between p-6">
                      <div>
                        <div className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel number-tabular">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="mt-3 font-display text-lg font-medium">
                          {p}
                        </div>
                        <div className="mt-2">
                          <PlaceholderPill>[OWNER TO PROVIDE]</PlaceholderPill>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected projects (empty state by default) */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="04">Selected Projects</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">Recent MEP work.</DisplayHeading>
              </Reveal>
              <div className="mt-10">
                <EmptyProjectsState />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Planning building services?"
        body="[CTA BODY — OWNER TO PROVIDE]"
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
