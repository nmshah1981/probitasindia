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
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import {
  MepSchematic,
  CoordinateCross,
} from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

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
        imageAlt="MEP engineering building services — technical coordination"
        tags={[design.title, peerReview.title]}
        meta={[
          { label: "Division", value: svc.title },
          { label: "Services", value: "02" },
        ]}
      />

      {/* The two services offered by this division */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow>Services</Eyebrow>
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
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Planning building services?"
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
