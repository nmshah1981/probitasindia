"use client";

import * as React from "react";
import {
  services,
  type ViewId,
} from "@/lib/site-content";
import { ArrowUpRight } from "lucide-react";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Hairline,
  Reveal,
  StaggerGroup,
  StaggerItem,
  ImageOrPlaceholder,
  TechnicalTag,
} from "@/components/site/primitives";
import { PageHeader, ContentBlock, RelatedServicesCta } from "@/components/site/page-blocks";
import {
  AnimatedElevation,
  MepSchematic,
  PortalFrame,
  DrawingTag,
  CoordinateCross,
} from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

export function ServicesView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  return (
    <>
      <PageHeader
        index="00"
        eyebrow="Services"
        title={
          <>
            Engineering disciplines,
            <br />
            <span className="text-steel">delivered with intent.</span>
          </>
        }
        description="[SERVICES OVERVIEW — OWNER TO PROVIDE: A short description of how the four disciplines work together across the project lifecycle.]"
        tags={["Structural Design", "MEP Design", "Structural Peer Review", "MEP Peer Review"]}
        meta={[
          { label: "Disciplines", value: "04" },
          { label: "Approach", value: "[APPROACH — OWNER TO PROVIDE]" },
          { label: "Standards", value: "[STANDARDS — OWNER TO PROVIDE]" },
        ]}
      />

      {/* Service list */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <StaggerGroup className="flex flex-col gap-px">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <ServiceLargeCard
                  service={s}
                  onNavigate={onNavigate}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Process overview */}
      <ContentBlock
        index="01"
        eyebrow="Engineering Process"
        title="A consistent method across disciplines."
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="PRC-00" title="Method" />
            <div className="h-32 w-full text-steel/60">
              <PortalFrame />
            </div>
          </div>
        }
      >
        <p>
          [ENGINEERING PROCESS — OWNER TO PROVIDE: A description of how the firm
          approaches a typical commission — from briefing and concept design
          through detailed design, documentation, construction support and
          post-completion review.]
        </p>
        <p>
          [PROCESS PRINCIPLES — OWNER TO PROVIDE: Optional short list of
          principles such as clarity of documentation, coordinated deliverables,
          independent verification — phrased without unsupported claims.]
        </p>
      </ContentBlock>

      <CtaBand
        onNavigate={onNavigate}
        title="Not sure which service you need?"
        body="[CTA BODY — OWNER TO PROVIDE]"
        ctaLabel="Request a Consultation"
        view="contact"
      />

      <RelatedServicesCta
        onNavigate={onNavigate}
        services={services.map((s) => ({ slug: s.slug, index: s.index, title: s.title }))}
        primaryLabel="Discuss a Project"
      />
    </>
  );
}

function ServiceLargeCard({
  service,
  onNavigate,
}: {
  service: (typeof services)[number];
  onNavigate: (id: ViewId) => void;
}) {
  return (
    <button
      onClick={() => onNavigate(service.slug)}
      className="group block w-full border-t border-border py-12 text-left transition-colors hover:bg-concrete/20 first:border-t-0"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="relative">
            <ImageOrPlaceholder
              src={service.heroImage}
              alt={`${service.title} — visual`}
              ratio="4/3"
              className="border border-border"
              imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute left-3 top-3">
              <DrawingTag code={`SVC-${service.index}`} title={service.title} />
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="flex items-baseline gap-4">
            <span className="font-mono-tight text-sm text-steel number-tabular">
              {service.index}
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
              Service
            </span>
          </div>
          <h3 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            {service.title}
          </h3>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-steel md:text-lg">
            {service.longDescription}
          </p>
          <div className="mt-8 flex items-center gap-3 text-foreground">
            <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
              Explore service
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </button>
  );
}
