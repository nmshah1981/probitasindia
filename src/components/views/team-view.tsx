"use client";

import * as React from "react";
import { type ViewId, type TeamMember } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  ImageOrPlaceholder,
} from "@/components/site/primitives";
import {
  PageHeader,
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import { CtaBand } from "@/components/sections/home-sections";

export function TeamView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { team, services } = data;

  const founder = team.find((m) => m.position.toLowerCase().includes("founder") && !m.position.toLowerCase().includes("co")) || team[0];
  const cofounder = team.find((m) => m.position.toLowerCase().includes("cofounder") || m.id === "pankaj-shah") || team[1];

  return (
    <>
      <PageHeader
        eyebrow="Team"
        title={
          <>
            Leadership &amp;
            <br />
            <span className="text-steel">engineering team.</span>
          </>
        }
        description="Guided by strong leadership, Probitas has established a highly skilled team of talented engineers — and the team is growing steadily. Meet the leadership below."
      />

      {/* Founder Section */}
      {founder && (
        <section className="border-b border-border bg-background">
          <Container className="py-20 sm:py-24 md:py-32">
            <Eyebrow>Founder</Eyebrow>
            <div className="mt-8">
              <LeadershipDossierCard member={founder} />
            </div>
          </Container>
        </section>
      )}

      {/* Cofounder Section */}
      {cofounder && (
        <section className="border-b border-border bg-bone">
          <Container className="py-20 sm:py-24 md:py-32">
            <Eyebrow>Cofounder &amp; Operations</Eyebrow>
            <div className="mt-8">
              <LeadershipDossierCard member={cofounder} isBoneBackground />
            </div>
          </Container>
        </section>
      )}

      {/* Team Capability Statement */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 sm:py-24 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Engineering Talent</Eyebrow>
              <DisplayHeading as="h2" className="mt-4">
                Engineering Team — growing steadily.
              </DisplayHeading>
            </div>
            <div className="lg:col-span-8">
              <div className="max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-steel space-y-4">
                <p>
                  Employees are valuable asset of an organization and key to success and we strive to continue to attract the best and the brightest talent. We are committed to creating an inclusive working environment based on fairness and respect, one that encourages talented people of any background to produce their best work of the highest quality ensuring we listen and respond to their needs.
                </p>
                <p>
                  The team has experience in delivering various types of projects in RCC and steel design in most geographies across India. The team has completed huge number of projects for Design, Peer Review, Value engineering and Constructability solutions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Building an engineering team for your next project?"
        body="Start a conversation about how Probitas can support your next project."
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

function LeadershipDossierCard({
  member,
  isBoneBackground = false,
}: {
  member: TeamMember;
  isBoneBackground?: boolean;
}) {
  return (
    <Reveal>
      <article className={`group grid grid-cols-1 gap-px border border-border ${isBoneBackground ? "bg-background" : "bg-bone-light"} lg:grid-cols-12 shadow-xs`}>
        {/* Photo Container scaled to 70% */}
        <div className="flex items-center justify-center p-6 sm:p-8 bg-bone/30 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border">
          <div className="w-full max-w-[240px] sm:max-w-[270px] overflow-hidden border border-border bg-background shadow-2xs">
            <ImageOrPlaceholder
              src={member.photo}
              alt={`${member.name} — portrait`}
              ratio="4/5"
              className="w-full"
              imgClassName="transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col p-8 sm:p-10 md:p-12 lg:col-span-8 justify-between">
          <div>
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel">
              {member.position}
            </div>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.25rem] font-medium tracking-tight text-foreground leading-[1.2]">
              {member.name}
            </h3>

            <div className="mt-3 font-mono-tight text-xs uppercase tracking-[0.2em] text-accent-brand font-medium">
              Professional Experience: {member.experience}
            </div>

            <p className="mt-6 text-pretty text-base sm:text-lg leading-relaxed text-steel">
              {member.bio}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
