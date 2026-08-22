"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import {
  Container,
  Eyebrow,
  Reveal,
} from "@/components/site/primitives";
import {
  PageHeader,
  ContentBlock,
} from "@/components/site/page-blocks";
import { PortalFrame } from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

export function AboutView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { about } = data;
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            An engineering
            <br />
            <span className="text-steel">consultancy, in context.</span>
          </>
        }
        description="Probitas is a passionate team of highly skilled engineers delivering innovative and value-led solutions — bridging the gap between the evolving needs of the construction industry and current consultancy services."
        image="/images/about-image.png"
        imageAlt="Modern engineering studio environment"
      />

      <ContentBlock
        eyebrow="Company Story"
        title="Bridging the gap in structural consultancy."
        sidebar={
          <div className="space-y-4">
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
        eyebrow="Leadership Message"
        title="A highly skilled team, growing steadily."
      >
        <p>{about.leadership}</p>
      </ContentBlock>

      <ContentBlock
        eyebrow="Engineering Philosophy"
        title="Integrity builds trust and shapes excellence."
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

      {/* Mission & Values */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 sm:py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="border border-border bg-background p-8 sm:p-10 md:p-12 h-full flex flex-col justify-between">
                <div>
                  <Eyebrow>Mission Statement</Eyebrow>
                  <h3 className="mt-5 font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground leading-[1.25]">
                    {about.mission}
                  </h3>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-steel">
                    We provide a professional service of world-class quality
                    through an innovative and responsible approach to engineering
                    problems.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-border bg-background p-8 sm:p-10 md:p-12 h-full flex flex-col justify-between">
                <div>
                  <Eyebrow>Core Values</Eyebrow>
                  <h3 className="mt-5 font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground leading-[1.25]">
                    {about.values}
                  </h3>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-steel">
                    We maintain a culture of quality based on transparency, trust,
                    diversity, collaboration and mutual respect — a culture that
                    continually learns and improves.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Want to work with our team?"
        body="Start a conversation about an upcoming structural design or independent peer review commission."
        ctaLabel="Contact Our Team"
        view="contact"
      />
    </>
  );
}
