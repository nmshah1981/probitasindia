"use client";

import * as React from "react";
import { services, type ViewId } from "@/lib/site-content";
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
  AnimatedElevation,
  PortalFrame,
  CoordinateCross,
  DrawingTag,
} from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

export function StructuralEngineeringView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
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
          { label: "Codes", value: "[CODES — OWNER TO PROVIDE]" },
          { label: "Software", value: "[SOFTWARE — OWNER TO PROVIDE]" },
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
          high-rise residential and commercial buildings up to G+72. Our team
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
                      { label: "Height Range", value: "Up to G+72 floors / 187 m" },
                      { label: "Geography", value: "Mumbai, Delhi NCR, Bangalore, Kolkata, Chennai, Hyderabad, Pune, Nagpur, Ahmedabad, Surat, Valsad + UAE" },
                      { label: "Analysis Methods", value: "[ANALYSIS METHODS — OWNER TO PROVIDE]" },
                      { label: "Design Codes", value: "[DESIGN CODES — OWNER TO PROVIDE]" },
                      { label: "Software", value: "[SOFTWARE — OWNER TO PROVIDE]" },
                      { label: "Deliverables", value: "Structural drawings, specifications, schedules, design basis reports" },
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
                          title: "Brief &amp; Site",
                          body: "[STEP 01 — OWNER TO PROVIDE: Brief development, site appraisal, structural concept exploration.]",
                        },
                        {
                          title: "Concept Design",
                          body: "[STEP 02 — OWNER TO PROVIDE: Structural concept design, load path strategy, preliminary sizing.]",
                        },
                        {
                          title: "Detailed Design",
                          body: "[STEP 03 — OWNER TO PROVIDE: Analysis, member design, coordination with disciplines.]",
                        },
                        {
                          title: "Documentation",
                          body: "[STEP 04 — OWNER TO PROVIDE: Structural drawings, specifications, schedules.]",
                        },
                        {
                          title: "Construction Support",
                          body: "[STEP 05 — OWNER TO PROVIDE: RFI responses, site visits, structural observations.]",
                        },
                        {
                          title: "Post-Completion",
                          body: "[STEP 06 — OWNER TO PROVIDE: As-built records, performance review, lessons learned.]",
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

              <Reveal delay={0.2}>
                <div className="mt-10">
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-bone/60">
                    Typical Review Scope
                  </div>
                  <div className="mt-4">
                    <SpecTable
                      rows={[
                        { label: "Design Basis", value: "[DESIGN BASIS REVIEW — OWNER TO PROVIDE]" },
                        { label: "Load Assumptions", value: "[LOAD ASSUMPTIONS REVIEW — OWNER TO PROVIDE]" },
                        { label: "Structural System", value: "[STRUCTURAL SYSTEM REVIEW — OWNER TO PROVIDE]" },
                        { label: "Analysis Model", value: "[ANALYSIS MODEL REVIEW — OWNER TO PROVIDE]" },
                        { label: "Member Design", value: "[MEMBER DESIGN REVIEW — OWNER TO PROVIDE]" },
                        { label: "Detailing", value: "[DETAILING REVIEW — OWNER TO PROVIDE]" },
                        { label: "Drawings", value: "[DRAWINGS REVIEW — OWNER TO PROVIDE]" },
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
                          body: "[STEP 02 — OWNER TO PROVIDE: Review of structural design basis, analysis, drawings and specifications.]",
                        },
                        {
                          title: "Technical Analysis",
                          body: "[STEP 03 — OWNER TO PROVIDE: Independent verification of critical load paths, analysis assumptions and member design.]",
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
                  [PROJECT TYPES — OWNER TO PROVIDE: A short introduction. Only
                  display typologies the firm has actually delivered or is
                  equipped to deliver.]
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
                  "Mixed Use",
                  "Institutional",
                  "Infrastructure",
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
                <DisplayHeading as="h2">Recent structural work.</DisplayHeading>
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
        title="Starting a structural project?"
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

/* Shared empty state for projects — used across multiple views */
export function EmptyProjectsState() {
  return (
    <div className="flex flex-col items-start gap-4 border border-dashed border-border bg-bone p-10 md:p-16">
      <div className="flex items-center gap-3">
        <CoordinateCross className="h-8 w-8 text-steel/60" />
        <span className="font-mono-tight text-[11px] uppercase tracking-[0.22em] text-steel">
          Projects will be added here
        </span>
      </div>
      <p className="max-w-xl text-pretty text-base leading-relaxed text-steel">
        [PROJECTS WILL BE ADDED HERE — OWNER TO PROVIDE: When real project
        entries are supplied, this section will display selected structural
        engineering work in an editorial grid.]
      </p>
      <div className="mt-2">
        <PlaceholderPill>Owner-controlled content</PlaceholderPill>
      </div>
    </div>
  );
}
