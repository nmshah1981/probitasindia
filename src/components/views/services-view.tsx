"use client";

import * as React from "react";
import {
  type ViewId,
  type ServiceSlug,
} from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { ArrowUpRight } from "lucide-react";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
  ImageOrPlaceholder,
} from "@/components/site/primitives";
import { PageHeader, ContentBlock, RelatedServicesCta } from "@/components/site/page-blocks";
import {
  PortalFrame,
  DrawingTag,
} from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

export function ServicesView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;
  const flatServices = services.flatMap((d) =>
    d.services.map((s) => ({
      division: d.slug,
      divisionTitle: d.title,
      divisionIndex: d.index,
      serviceId: s.id,
      serviceIndex: s.index,
      serviceTitle: s.title,
      shortDescription: s.shortDescription,
    })),
  );
  return (
    <>
      <PageHeader
        index="00"
        eyebrow="Services"
        title={
          <>
            Two divisions,
            <br />
            <span className="text-steel">two services each.</span>
          </>
        }
        description="[SERVICES OVERVIEW — OWNER TO PROVIDE: A short description of how the two divisions — Structural Engineering and MEP Engineering — work together across the project lifecycle. Each division offers Design and Independent Peer Review as distinct services.]"
        tags={["Structural Engineering", "MEP Engineering", "Design", "Independent Peer Review"]}
        meta={[
          { label: "Divisions", value: "02" },
          { label: "Services", value: String(flatServices.length).padStart(2, "0") },
          { label: "Approach", value: "[APPROACH — OWNER TO PROVIDE]" },
          { label: "Standards", value: "[STANDARDS — OWNER TO PROVIDE]" },
        ]}
      />

      {/* Division list — each card shows the 2 services within */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <StaggerGroup className="flex flex-col gap-px">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <DivisionLargeCard
                  divisionSlug={s.slug}
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
        title="A consistent method across divisions."
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
          post-completion review. Applies to both design and peer review
          commissions.]
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

/* ============================================================ */
/* DivisionLargeCard — premium row card showing both services    */
/* ============================================================ */
function DivisionLargeCard({
  divisionSlug,
  onNavigate,
}: {
  divisionSlug: ServiceSlug;
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;
  const svc = services.find((s) => s.slug === divisionSlug)!;
  return (
    <button
      onClick={() => onNavigate(svc.slug)}
      className="group block w-full border-t border-border py-12 text-left transition-colors hover:bg-concrete/20 first:border-t-0"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="relative">
            <ImageOrPlaceholder
              src={svc.heroImage}
              alt={`${svc.title} — visual`}
              ratio="4/3"
              className="border border-border"
              imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute left-3 top-3">
              <DrawingTag code={`DIV-${svc.index}`} title={svc.title} />
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="flex items-baseline gap-4">
            <span className="font-mono-tight text-sm text-steel number-tabular">
              {svc.index}
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
              Division
            </span>
          </div>
          <h3 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            {svc.title}
          </h3>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-steel md:text-lg">
            {svc.longDescription}
          </p>

          {/* The two services inside this division */}
          <div className="mt-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
            {svc.services.map((s) => (
              <div
                key={s.id}
                className="bg-background p-5 transition-colors group-hover:bg-concrete/10"
              >
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

          <div className="mt-8 flex items-center gap-3 text-foreground">
            <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
              Explore division
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </button>
  );
}
