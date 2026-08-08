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
  MepSchematic,
  DrawingTag,
} from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";
import { EmptyProjectsState } from "./structural-design-view";

export function MepDesignView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const svc = services.find((s) => s.slug === "mep-design")!;
  const related = services
    .filter((s) => s.slug !== "mep-design")
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
        imageAlt="[MEP DESIGN HERO IMAGE — OWNER TO PROVIDE]"
        tags={["Mechanical", "Electrical", "Plumbing", "Coordination"]}
        meta={[
          { label: "Discipline", value: "MEP" },
          { label: "Systems", value: "[SYSTEMS — OWNER TO PROVIDE]" },
          { label: "Standards", value: "[STANDARDS — OWNER TO PROVIDE]" },
          { label: "Software", value: "[SOFTWARE — OWNER TO PROVIDE]" },
        ]}
      />

      {/* Overview */}
      <ContentBlock
        index="01"
        eyebrow="Overview"
        title="[MEP DESIGN OVERVIEW — OWNER TO PROVIDE]"
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
          [MEP DESIGN OVERVIEW — OWNER TO PROVIDE: A clear description of the
          firm&apos;s MEP engineering practice — its scope, its coordination
          approach, and how building services are integrated with architecture
          and structure.]
        </p>
        <p>
          [ADDITIONAL OVERVIEW — OWNER TO PROVIDE: Optional second paragraph
          describing the firm&apos;s approach to energy performance, indoor
          environmental quality, sustainability and digital coordination.]
        </p>
      </ContentBlock>

      {/* Capabilities */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="02">Capabilities</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  Service systems.
                </DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                  [MEP CAPABILITIES — OWNER TO PROVIDE: Only the systems below
                  that are confirmed by the owner should be displayed. The
                  categories are placeholders, not claims.]
                </p>
              </Reveal>
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
            </div>
          </div>
        </Container>
      </section>

      {/* Design approach */}
      <ContentBlock
        index="03"
        eyebrow="Design Approach"
        title="[MEP DESIGN APPROACH — OWNER TO PROVIDE]"
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="MEP-02" title="Approach" />
            <div className="h-32 w-full text-steel/70">
              <MepSchematic />
            </div>
          </div>
        }
      >
        <p>
          [MEP DESIGN APPROACH — OWNER TO PROVIDE: Describe how the firm
          approaches building services design — load analysis, system selection,
          coordination with structure and architecture, sustainability and
          maintainability.]
        </p>
        <p>
          [COORDINATION — OWNER TO PROVIDE: Optional paragraph describing the
          role of BIM coordination, clash detection and digital workflows in
          the firm&apos;s MEP practice.]
        </p>
      </ContentBlock>

      {/* Engineering process */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="04">Process</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  From load to layout.
                </DisplayHeading>
              </Reveal>
              <div className="mt-10">
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
          </div>
        </Container>
      </section>

      {/* Project types */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="05">Project Types</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  Built typologies.
                </DisplayHeading>
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
              <Eyebrow index="06">Selected Projects</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  Recent MEP work.
                </DisplayHeading>
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
