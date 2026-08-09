"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { ArrowUpRight } from "lucide-react";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
  PlaceholderPill,
} from "@/components/site/primitives";
import {
  PageHeader,
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import { DrawingTag } from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

export function InsightsView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;
  return (
    <>
      <PageHeader
        index="00"
        eyebrow="Insights"
        title={
          <>
            Engineering
            <br />
            <span className="text-steel">notes &amp; commentary.</span>
          </>
        }
        description="[INSIGHTS INTRODUCTION — OWNER TO PROVIDE: A short description of the kind of technical articles, project insights and engineering notes that will eventually appear here.]"
        tags={["Technical Notes", "Project Insights", "Commentary"]}
        meta={[
          { label: "Articles", value: "00" },
          { label: "Categories", value: "[CATEGORIES — OWNER TO PROVIDE]" },
          { label: "Cadence", value: "[CADENCE — OWNER TO PROVIDE]" },
        ]}
      />

      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="01">Latest</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  Articles will be added here.
                </DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                  For the initial launch, no articles have been published. When
                  real engineering notes, project insights or technical
                  commentary are supplied, they will appear in this section.
                  Articles will not be manufactured or attributed to the firm
                  without owner approval.
                </p>
              </Reveal>

              {/* Reserved article slots */}
              <StaggerGroup className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <StaggerItem key={i} className="bg-background">
                    <article className="flex h-full flex-col p-8">
                      <div className="flex items-center gap-3 font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
                        <span className="number-tabular">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px w-6 bg-steel/40" />
                        <span>[CATEGORY — OWNER TO PROVIDE]</span>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-steel md:text-2xl">
                        [ARTICLE TITLE — OWNER TO PROVIDE]
                      </h3>
                      <p className="mt-3 text-pretty text-sm leading-relaxed text-steel">
                        [ARTICLE SUMMARY — OWNER TO PROVIDE]
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-6">
                        <span className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                          [DATE — OWNER TO PROVIDE]
                        </span>
                        <PlaceholderPill>Reserved</PlaceholderPill>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <div className="mt-10">
                <DrawingTag code="INS-00" title="Reserved Slots" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Have an engineering question?"
        body="[CTA BODY — OWNER TO PROVIDE]"
        ctaLabel="Contact Our Team"
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
