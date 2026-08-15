"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
} from "@/components/site/primitives";
import {
  PageHeader,
  ContentBlock,
} from "@/components/site/page-blocks";
import { DrawingTag, PortalFrame } from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

export function AboutView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { about, services } = data;
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
        description="Probitas is a passionate team of highly skilled engineers delivering innovative and value-led solutions — bridging the gap between the evolving needs of the construction industry and current consultancy services."
        image="/images/about-image.png"
        imageAlt="Quiet modern engineering studio interior"
        tags={["Story", "Philosophy", "Mission", "Values"]}
        meta={[
          { label: "Practice", value: "Structural Engineering" },
          { label: "Team", value: "10 engineers — and growing" },
          { label: "Location", value: "Vapi, India" },
        ]}
      />

      <ContentBlock
        index="01"
        eyebrow="Company Story"
        title="Bridging the gap in structural consultancy."
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="ABT-01" title="Story" />
            <div className="h-32 w-full text-steel/60">
              <PortalFrame />
            </div>
          </div>
        }
      >
        <p>{about.story}</p>
        <p>{about.founding}</p>
      </ContentBlock>

      <ContentBlock
        index="02"
        eyebrow="Leadership Message"
        title="A highly skilled team, growing steadily."
      >
        <p>{about.leadership}</p>
      </ContentBlock>

      <ContentBlock
        index="03"
        eyebrow="Engineering Philosophy"
        title="Integrity builds trust and shapes excellence."
        sidebar={
          <div className="space-y-4">
            <DrawingTag code="ABT-02" title="Philosophy" />
          </div>
        }
      >
        <p>{about.philosophy}</p>
        <p>
          Employees are the valuable asset of an organization and key to
          success. We reinforce our commitment through investment in our people,
          systems, equipment and capabilities — providing opportunities and
          career paths for our staff, and developing our leadership as we grow
          and evolve in the building industry.
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
                  We provide a professional service of world-class quality
                  through an innovative and responsible approach to engineering
                  problems.
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
                  We maintain a culture of quality based on transparency, trust,
                  diversity, collaboration and mutual respect — a culture that
                  continually learns and improves.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Want to work with us?"
        body="Start a conversation about an upcoming structural design or independent peer review commission."
        ctaLabel="Contact Our Team"
        view="contact"
      />


    </>
  );
}
