"use client";

import * as React from "react";
import { team, services, type ViewId } from "@/lib/site-content";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
  ImageOrPlaceholder,
  PlaceholderPill,
} from "@/components/site/primitives";
import {
  PageHeader,
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import { DrawingTag } from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

export function TeamView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const hasTeam = team.length > 0;

  return (
    <>
      <PageHeader
        index="00"
        eyebrow="Team"
        title={
          <>
            Leadership &amp;
            <br />
            <span className="text-steel">engineering team.</span>
          </>
        }
        description="Guided by strong leadership, Probitas has established a highly skilled team of 10 talented engineers — and the team is growing steadily. Meet the leadership below."
        tags={["Leadership", "Engineering", "Specialisms"]}
        meta={[
          { label: "Team", value: "10 engineers" },
          { label: "Disciplines", value: "02" },
          { label: "Locations", value: "Across India" },
        ]}
      />

      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          {hasTeam ? (
            <TeamGrid members={team} />
          ) : (
            <EmptyTeamState />
          )}
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Building a team for your project?"
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

function TeamGrid({
  members,
}: {
  members: typeof team;
}) {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => (
        <StaggerItem key={m.id} className="bg-background">
          <article className="group flex h-full flex-col">
            <div className="relative">
              <ImageOrPlaceholder
                src={m.photo}
                alt={`${m.name} — portrait`}
                ratio="4/5"
                className="border-b border-border"
                imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute left-3 top-3">
                <DrawingTag
                  code={`T-${String(i + 1).padStart(2, "0")}`}
                  title={m.position}
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
                {m.name}
              </h3>
              <div className="mt-1 font-mono-tight text-[11px] uppercase tracking-[0.18em] text-steel">
                {m.position}
              </div>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-steel">
                {m.bio}
              </p>
              <div className="mt-auto pt-6">
                <dl className="space-y-2 text-xs">
                  {m.qualification && (
                    <div className="flex gap-3">
                      <dt className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                        Qual.
                      </dt>
                      <dd className="text-foreground/80">{m.qualification}</dd>
                    </div>
                  )}
                  {m.registration && (
                    <div className="flex gap-3">
                      <dt className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                        Reg.
                      </dt>
                      <dd className="text-foreground/80">{m.registration}</dd>
                    </div>
                  )}
                  {m.experience && (
                    <div className="flex gap-3">
                      <dt className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                        Exp.
                      </dt>
                      <dd className="text-foreground/80">{m.experience}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

function EmptyTeamState() {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <StaggerItem key={i} className="bg-background">
          <article className="flex h-full flex-col">
            <div className="relative">
              <ImageOrPlaceholder
                src="/images/team-placeholder.png"
                alt="[TEAM MEMBER PORTRAIT — OWNER TO PROVIDE]"
                ratio="4/5"
                className="border-b border-border"
                label="[PORTRAIT — OWNER TO PROVIDE]"
              />
              <div className="absolute left-3 top-3">
                <DrawingTag
                  code={`T-${String(i + 1).padStart(2, "0")}`}
                  title="Reserved"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-medium tracking-tight text-steel">
                [NAME — OWNER TO PROVIDE]
              </h3>
              <div className="mt-1 font-mono-tight text-[11px] uppercase tracking-[0.18em] text-steel">
                [POSITION — OWNER TO PROVIDE]
              </div>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-steel">
                [SHORT BIO — OWNER TO PROVIDE]
              </p>
              <div className="mt-auto pt-6">
                <PlaceholderPill>Owner-controlled — no invented profiles</PlaceholderPill>
              </div>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
