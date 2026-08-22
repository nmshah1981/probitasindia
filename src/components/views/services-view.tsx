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
  StaggerGroup,
  StaggerItem,
  ImageOrPlaceholder,
} from "@/components/site/primitives";
import { PageHeader, RelatedServicesCta } from "@/components/site/page-blocks";
import { CtaBand } from "@/components/sections/home-sections";

export function ServicesView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Two divisions,
            <br />
            <span className="text-steel">two services each.</span>
          </>
        }
        description="We're built around two engineering divisions — Structural Engineering and MEP Engineering — each offering Design and Independent Peer Review. That means clients can bring us on as engineer of record, or as an independent check on work done elsewhere. The two divisions work in lock-step from concept to construction — sharing models, aligning on milestones, and resolving interface issues early — so structural systems and building services are integrated by design, not patched together after the fact. Across commercial and residential real estate, airports, and public buildings, that coordination is what delivers technically sound, buildable results."
      />

      {/* Division list — each card shows the 2 services within */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 sm:py-24 md:py-32">
          <StaggerGroup className="flex flex-col gap-16 md:gap-24">
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

      <CtaBand
        onNavigate={onNavigate}
        title="Not sure which service fits your project?"
        body="Tell us about your project and we will route your brief to our structural or MEP engineering specialists."
        ctaLabel="Request Consultation"
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
/* DivisionLargeCard — editorial presentation of each division   */
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
    <div className="border border-border bg-bone-light p-8 sm:p-10 md:p-12 transition-all">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="relative">
            <ImageOrPlaceholder
              src={svc.heroImage}
              alt={`${svc.title} — visual`}
              ratio="4/3"
              className="border border-border shadow-xs"
            />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline gap-4">
              <span className="font-mono-tight text-sm font-medium text-foreground number-tabular">
                Division {svc.index}
              </span>
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel">
                Specialist Practice
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.25rem] font-medium tracking-tight text-foreground leading-[1.2]">
              {svc.title}
            </h3>
            <p className="mt-5 text-pretty text-base sm:text-lg leading-relaxed text-steel">
              {svc.longDescription}
            </p>

            {/* The two services inside this division */}
            <div className="mt-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {svc.services.map((s) => (
                <div
                  key={s.id}
                  className="bg-background p-6 transition-colors hover:bg-concrete-subtle"
                >
                  <div className="flex items-center gap-2 font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel">
                    <span className="number-tabular font-medium text-foreground">{s.index}</span>
                    <span className="h-px w-4 bg-steel/40" />
                    <span>Service</span>
                  </div>
                  <div className="mt-2 font-display text-lg font-medium tracking-tight text-foreground">
                    {s.title}
                  </div>
                  <p className="mt-2.5 text-pretty text-xs leading-relaxed text-steel">
                    {s.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex items-center justify-end">
            <button
              onClick={() => onNavigate(svc.slug)}
              className="group inline-flex items-center gap-3 bg-foreground px-6 py-3.5 text-bone transition-colors hover:bg-accent-brand"
            >
              <span className="font-mono-tight text-[11px] uppercase tracking-[0.2em]">
                Explore {svc.title}
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
