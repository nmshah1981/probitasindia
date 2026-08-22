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
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import {
  AnimatedElevation,
  PortalFrame,
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
      />

      {/* Division overview */}
      <ContentBlock
        eyebrow="Division Overview"
        title="RCC and steel structural engineering, end to end."
        sidebar={
          <div className="space-y-4">
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
          constructability across every project — coordinating with
          architecture, MEP and construction teams from concept through
          completion.
        </p>
      </ContentBlock>

      {/* The two services summary */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 sm:py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Services Scope</Eyebrow>
              <DisplayHeading as="h2" className="mt-4">
                Two specialized structural services.
              </DisplayHeading>
              <p className="mt-6 max-w-sm text-pretty text-sm sm:text-base leading-relaxed text-steel">
                The Structural Engineering division delivers two distinct
                services, each with its own scope, deliverables and process.
              </p>
            </div>
            <div className="lg:col-span-8">
              <StaggerGroup className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                <StaggerItem className="bg-background">
                  <ServiceSummaryCard
                    index={design.index}
                    title={design.title}
                    description={design.shortDescription}
                    anchor="#design"
                  />
                </StaggerItem>
                <StaggerItem className="bg-background">
                  <ServiceSummaryCard
                    index={peerReview.index}
                    title={peerReview.title}
                    description={peerReview.shortDescription}
                    anchor="#peer-review"
                  />
                </StaggerItem>
              </StaggerGroup>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================== Service 01 — Structural Design ====================== */}
      <section id="design" className="scroll-mt-28 border-b border-border bg-background">
        <Container className="py-24 sm:py-28 md:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>
                Service — {design.title}
              </Eyebrow>
              <div className="mt-8 h-36 w-full text-steel/60">
                <AnimatedElevation />
              </div>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <DisplayHeading as="h2">{design.title}</DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-steel">
                  {design.longDescription}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =================== Service 02 — Structural Peer Review =================== */}
      <section
        id="peer-review"
        className="relative scroll-mt-28 border-b border-border bg-ink-deep text-bone"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>
        <Container className="relative py-24 sm:py-28 md:py-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow className="text-bone/70">
                Service — {peerReview.title}
              </Eyebrow>
              <div className="mt-8 h-32 w-full text-bone/40">
                <PortalFrame />
              </div>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <DisplayHeading as="h2" className="text-bone">
                  {peerReview.title}
                </DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-bone/80">
                  {peerReview.longDescription}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Starting a structural project or peer review?"
        body="Tell us about your project and we'll route your brief to our structural engineering specialists."
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

function ServiceSummaryCard({
  index,
  title,
  description,
  anchor,
}: {
  index: string;
  title: string;
  description: string;
  anchor: string;
}) {
  return (
    <a
      href={anchor}
      className="group flex h-full flex-col p-8 sm:p-10 transition-colors hover:bg-concrete-subtle"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono-tight text-[11px] uppercase tracking-[0.22em] text-steel number-tabular font-medium">
          Service {index}
        </span>
        <span className="h-px w-8 bg-steel/40" />
      </div>
      <h3 className="mt-5 font-display text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-accent-brand transition-colors text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-steel flex-1">
        {description}
      </p>
      <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 font-mono-tight text-xs uppercase tracking-[0.2em] text-foreground group-hover:text-accent-brand">
        <span>View Details</span>
        <span className="text-accent-brand">↓</span>
      </div>
    </a>
  );
}
