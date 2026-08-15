"use client";

import * as React from "react";
import { type ViewId, type TeamMember } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
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

/** Detect founder vs partner based on the position field. */
function isFounder(m: TeamMember): boolean {
  const p = m.position.toLowerCase().trim();
  return p === "founder";
}

export function TeamView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { team, services } = data;
  const hasTeam = team.length > 0;

  // Split: founders at top, partners (and others) in the grid below
  const founders = team.filter(isFounder);
  const partners = team.filter((m) => !isFounder(m));

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
        tags={["Founder", "Engineering", "Specialisms"]}
        meta={[
          { label: "Team", value: "10 engineers" },
          { label: "Disciplines", value: "02" },
          { label: "Locations", value: "Across India" },
        ]}
      />

      {hasTeam ? (
        <>
          {/* ===== Founder section — top, full-width hero card ===== */}
          {founders.length > 0 && (
            <section className="border-b border-border bg-background">
              <Container className="py-20 md:py-28">
                <Eyebrow index="01">Founder</Eyebrow>
                <div className="mt-8">
                  <FounderCard member={founders[0]} />
                </div>
              </Container>
            </section>
          )}

          {/* ===== Partners section — grid below ===== */}
          {partners.length > 0 && (
            <section className="border-b border-border bg-bone">
              <Container className="py-20 md:py-28">
                <Eyebrow index="02">
                  Leadership{partners.length > 1 ? ` (${partners.length})` : ""}
                </Eyebrow>
                <div className="mt-8">
                  <PartnersGrid members={partners} startIndex={founders.length} />
                </div>
              </Container>
            </section>
          )}
        </>
      ) : (
        <section className="border-b border-border bg-background">
          <Container className="py-20 md:py-28">
            <EmptyTeamState />
          </Container>
        </section>
      )}

      <CtaBand
        onNavigate={onNavigate}
        title="Building a team for your project?"
        body="Start a conversation about how Probitas can support your next commission."
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

/* ============================================================ */
/* Founder card — large, full-width, photo left + bio right      */
/* ============================================================ */
function FounderCard({ member }: { member: TeamMember }) {
  return (
    <Reveal>
      <article className="group grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-12">
        {/* Photo — left, 5 cols on desktop */}
        <div className="relative bg-background md:col-span-5">
          <ImageOrPlaceholder
            src={member.photo}
            alt={`${member.name} — portrait`}
            ratio="4/5"
            className="h-full"
            imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute left-3 top-3">
            <DrawingTag code="T-01" title={member.position} />
          </div>
        </div>

        {/* Content — right, 7 cols on desktop */}
        <div className="flex flex-col bg-background p-8 md:col-span-7 md:p-10 lg:p-12">
          <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
            {member.position}
          </div>
          <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            {member.name}
          </h3>

          <p className="mt-6 text-pretty text-base leading-relaxed text-steel md:text-lg">
            {member.bio}
          </p>

          {/* Metadata */}
          <div className="mt-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {member.experience && (
                <div className="border-t border-border pt-3">
                  <dt className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                    Experience
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/80">
                    {member.experience}
                  </dd>
                </div>
              )}
              {member.qualification && (
                <div className="border-t border-border pt-3">
                  <dt className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                    Qualification
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/80">
                    {member.qualification}
                  </dd>
                </div>
              )}
              {member.registration && (
                <div className="border-t border-border pt-3">
                  <dt className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                    Registration
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/80">
                    {member.registration}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Expertise tags */}
          {member.expertise && member.expertise.length > 0 && (
            <div className="mt-auto pt-8">
              <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
                Areas of Expertise
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {member.expertise.map((e, i) => (
                  <span
                    key={i}
                    className="border border-border bg-bone px-3 py-1 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

/* ============================================================ */
/* Partners grid — 2 or 3 column grid of partner cards           */
/* ============================================================ */
function PartnersGrid({
  members,
  startIndex,
}: {
  members: TeamMember[];
  startIndex: number;
}) {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => (
        <StaggerItem key={m.id} className="bg-bone">
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
                  code={`T-${String(startIndex + i + 1).padStart(2, "0")}`}
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
                {/* Expertise tags */}
                {m.expertise && m.expertise.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {m.expertise.map((e, i) => (
                      <span
                        key={i}
                        className="border border-border bg-background px-2 py-0.5 font-mono-tight text-[9px] uppercase tracking-[0.18em] text-steel"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

/* ============================================================ */
/* Empty state — shown when no team members exist                */
/* ============================================================ */
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
