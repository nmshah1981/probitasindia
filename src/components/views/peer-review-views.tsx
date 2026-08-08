"use client";

import * as React from "react";
import { services, peerReview, type ViewId } from "@/lib/site-content";
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
  DrawingTag,
  PortalFrame,
  CoordinateCross,
} from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";
import { EmptyProjectsState } from "./structural-design-view";

/* ============================================================ */
/* Structural Peer Review                                       */
/* ============================================================ */
export function StructuralPeerReviewView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const svc = services.find((s) => s.slug === "structural-peer-review")!;
  const related = services
    .filter((s) => s.slug !== "structural-peer-review")
    .map((s) => ({ slug: s.slug, index: s.index, title: s.title }));

  return (
    <>
      <PageHeader
        index={svc.index}
        eyebrow={svc.title}
        title={
          <>
            Independent scrutiny
            <br />
            <span className="text-steel">of structural design.</span>
          </>
        }
        description={peerReview.structural.body}
        image={svc.heroImage}
        imageAlt="[STRUCTURAL PEER REVIEW HERO IMAGE — OWNER TO PROVIDE]"
        tags={["Drawings", "Analysis", "Coordination", "Reporting"]}
        meta={[
          { label: "Service", value: "Peer Review" },
          { label: "Discipline", value: "Structural" },
          { label: "Independence", value: "[INDEPENDENCE — OWNER TO PROVIDE]" },
          { label: "Deliverables", value: "[DELIVERABLES — OWNER TO PROVIDE]" },
        ]}
      />

      {/* Why peer review */}
      <ContentBlock
        index="01"
        eyebrow="Why Peer Review"
        title="[WHY STRUCTURAL PEER REVIEW — OWNER TO PROVIDE]"
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="SPR-01" title="Why" />
            <div className="h-32 w-full text-steel/60">
              <PortalFrame />
            </div>
          </div>
        }
      >
        <p>
          [WHY STRUCTURAL PEER REVIEW — OWNER TO PROVIDE: Explain why an
          independent structural review adds engineering value — verification of
          load paths, code compliance, structural integrity and constructability
          — without making unsupported claims about error rates or guarantees.]
        </p>
        <p>
          [ADDITIONAL — OWNER TO PROVIDE: Optional paragraph describing when
          peer review is typically required — regulatory, contractual or
          voluntary — and what an independent review does and does not cover.]
        </p>
      </ContentBlock>

      {/* Review scope */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="02">Typical Review Scope</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  What a structural review covers.
                </DisplayHeading>
              </Reveal>
              <div className="mt-10">
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
          </div>
        </Container>
      </section>

      {/* Review process */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="03">Review Process</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  A structured method of review.
                </DisplayHeading>
              </Reveal>
              <div className="mt-10">
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
          </div>
        </Container>
      </section>

      {/* Project examples (empty state) */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="04">Project Examples</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  Selected review commissions.
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
        title="Need an independent structural review?"
        body="[CTA BODY — OWNER TO PROVIDE]"
        ctaLabel="Request a Peer Review"
        view="contact"
      />

      <RelatedServicesCta
        onNavigate={onNavigate}
        services={related}
        primaryLabel="Request a Peer Review"
      />
    </>
  );
}

/* ============================================================ */
/* MEP Peer Review                                              */
/* ============================================================ */
export function MepPeerReviewView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const svc = services.find((s) => s.slug === "mep-peer-review")!;
  const related = services
    .filter((s) => s.slug !== "mep-peer-review")
    .map((s) => ({ slug: s.slug, index: s.index, title: s.title }));

  return (
    <>
      <PageHeader
        index={svc.index}
        eyebrow={svc.title}
        title={
          <>
            Independent scrutiny
            <br />
            <span className="text-steel">of MEP design.</span>
          </>
        }
        description={peerReview.mep.body}
        image={svc.heroImage}
        imageAlt="[MEP PEER REVIEW HERO IMAGE — OWNER TO PROVIDE]"
        tags={["Systems", "Coordination", "Performance", "Reporting"]}
        meta={[
          { label: "Service", value: "Peer Review" },
          { label: "Discipline", value: "MEP" },
          { label: "Independence", value: "[INDEPENDENCE — OWNER TO PROVIDE]" },
          { label: "Deliverables", value: "[DELIVERABLES — OWNER TO PROVIDE]" },
        ]}
      />

      <ContentBlock
        index="01"
        eyebrow="Why Peer Review"
        title="[WHY MEP PEER REVIEW — OWNER TO PROVIDE]"
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="MPR-01" title="Why" />
            <div className="h-32 w-full text-steel/60">
              <CoordinateCross />
            </div>
          </div>
        }
      >
        <p>
          [WHY MEP PEER REVIEW — OWNER TO PROVIDE: Explain why an independent
          review of MEP design adds value — verification of system sizing,
          coordination, energy performance and maintainability — without making
          unsupported claims about error rates or guarantees.]
        </p>
        <p>
          [ADDITIONAL — OWNER TO PROVIDE: Optional paragraph describing when MEP
          peer review is typically required — regulatory, contractual or
          voluntary — and what an independent review does and does not cover.]
        </p>
      </ContentBlock>

      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="02">Typical Review Scope</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  What an MEP review covers.
                </DisplayHeading>
              </Reveal>
              <div className="mt-10">
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
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="03">Review Process</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  A structured method of review.
                </DisplayHeading>
              </Reveal>
              <div className="mt-10">
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
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="04">Project Examples</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  Selected review commissions.
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
        title="Need an independent MEP review?"
        body="[CTA BODY — OWNER TO PROVIDE]"
        ctaLabel="Request a Peer Review"
        view="contact"
      />

      <RelatedServicesCta
        onNavigate={onNavigate}
        services={related}
        primaryLabel="Request a Peer Review"
      />
    </>
  );
}
