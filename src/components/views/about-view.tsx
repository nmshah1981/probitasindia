"use client";

import * as React from "react";
import { about, services, type ViewId } from "@/lib/site-content";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
  ImageOrPlaceholder,
  PlaceholderPill,
  TechnicalTag,
} from "@/components/site/primitives";
import {
  PageHeader,
  ContentBlock,
  SpecTable,
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import { DrawingTag, PortalFrame } from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

export function AboutView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  return (
    <>
      <PageHeader
        index="00"
        eyebrow="About"
        title={
          <>
            An engineering
            <br />
            <span className="text-steel">consultancy, in context.</span>
          </>
        }
        description="[ABOUT INTRODUCTION — OWNER TO PROVIDE: A short introduction to the firm, its scope and its engineering culture.]"
        image="/images/about-image.png"
        imageAlt="[ABOUT IMAGE ALT — OWNER TO PROVIDE]"
        tags={["Story", "Philosophy", "Mission", "Values"]}
        meta={[
          { label: "Founded", value: "[FOUNDED — OWNER TO PROVIDE]" },
          { label: "Practice", value: "[PRACTICE — OWNER TO PROVIDE]" },
          { label: "Location", value: "[LOCATION — OWNER TO PROVIDE]" },
        ]}
      />

      <ContentBlock
        index="01"
        eyebrow="Company Story"
        title={about.story}
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="ABT-01" title="Story" />
            <div className="h-32 w-full text-steel/60">
              <PortalFrame />
            </div>
          </div>
        }
      >
        <p>
          [COMPANY STORY — OWNER TO PROVIDE: The firm&apos;s origin and
          evolution — what it was established to do, how it has grown, and what
          it does today.]
        </p>
        <p>
          [FOUNDING STORY — OWNER TO PROVIDE: An optional paragraph describing
          the founding moment or motivation behind the practice.]
        </p>
      </ContentBlock>

      <ContentBlock
        index="02"
        eyebrow="Leadership Message"
        title={about.leadership}
      >
        <p>
          [LEADERSHIP MESSAGE — OWNER TO PROVIDE: A short message from the
          leadership on the firm&apos;s engineering outlook and the way it works
          with clients.]
        </p>
      </ContentBlock>

      <ContentBlock
        index="03"
        eyebrow="Engineering Philosophy"
        title={about.philosophy}
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="ABT-02" title="Philosophy" />
          </div>
        }
      >
        <p>
          [ENGINEERING PHILOSOPHY — OWNER TO PROVIDE: How the firm thinks about
          engineering — its principles, its priorities and its engineering
          judgement.]
        </p>
      </ContentBlock>

      {/* Mission + Values */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <Reveal>
              <div>
                <Eyebrow index="04">Mission</Eyebrow>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight md:text-3xl">
                  {about.mission}
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-steel">
                  [MISSION — OWNER TO PROVIDE: A short statement of the firm&apos;s
                  mission.]
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <Eyebrow index="05">Values</Eyebrow>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight md:text-3xl">
                  {about.values}
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-steel">
                  [VALUES — OWNER TO PROVIDE: A short description of the values
                  that guide the firm&apos;s engineering work.]
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Qualifications / credibility (empty placeholders only) */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="06">Credibility</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <DisplayHeading as="h2">
                  Qualifications &amp; credentials.
                </DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                  [QUALIFICATIONS — OWNER TO PROVIDE: Display only the
                  registrations, certifications, memberships and accreditations
                  the firm actually holds. Never invent credentials or client
                  logos.]
                </p>
              </Reveal>
              <div className="mt-10">
                <SpecTable
                  rows={[
                    { label: "Registrations", value: "[REGISTRATIONS — OWNER TO PROVIDE]" },
                    { label: "Certifications", value: "[CERTIFICATIONS — OWNER TO PROVIDE]" },
                    { label: "Memberships", value: "[MEMBERSHIPS — OWNER TO PROVIDE]" },
                    { label: "Accreditations", value: "[ACCREDITATIONS — OWNER TO PROVIDE]" },
                    { label: "Awards", value: "[AWARDS — OWNER TO PROVIDE]" },
                  ]}
                />
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <PlaceholderPill>Owner-controlled — no fake credentials</PlaceholderPill>
                <TechnicalTag>[CLIENT LOGOS — OWNER TO PROVIDE / OPTIONAL]</TechnicalTag>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Want to work with us?"
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
