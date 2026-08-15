"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { ArrowUpRight, MapPin, Briefcase, Users } from "lucide-react";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-blocks";
import { DrawingTag, CoordinateCross } from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

/* Open positions — static for now, can be moved to admin/content system later */
type OpenPosition = {
  id: string;
  title: string;
  division: string;
  location: string;
  type: string;
  description: string;
  responsibilities?: string[];
  qualifications?: string[];
};

const OPEN_POSITIONS: OpenPosition[] = [
  {
    id: "lead-structural-engineer-mumbai",
    title: "Lead Structural Engineer",
    division: "Structural Engineering",
    location: "Mumbai, India",
    type: "Full-time / Hybrid",
    description:
      "Lead structural design for landmark residential and commercial high-rise building projects. Drive high-level technical decisions, mentor rising engineering talent, and collaborate directly with clients and multidisciplinary teams to deliver safe, sustainable, and cost-effective structural solutions. Requires 8 to 10 years of extensive experience in RCC and steel design across India — executing complex projects in structural design, peer review and value engineering.",
    responsibilities: [
      "Lead structural design and analysis for high-rise RCC projects",
      "Ensure full compliance with IS codes and international standards",
      "Mentor junior engineers; review and sign off on drawings",
      "Drive value engineering and constructability peer reviews",
      "Represent Probitas in client and multidisciplinary meetings",
    ],
    qualifications: [
      "Bachelor's / Master's in Structural or Civil Engineering",
      "8-10 years experience in structural analysis, RCC design and constructability review",
      "Track record on design of high-rise / complex residential or commercial developments",
      "Proficient in ETABS, SAFE and CAD tools like Revit, AutoCAD",
      "Strong IS-code knowledge, mentoring and communication skills",
    ],
  },
  {
    id: "sr-structural-engineer",
    title: "Senior Structural Engineer",
    division: "Structural Engineering",
    location: "Vapi, India",
    type: "Full-time",
    description:
      "Lead structural design and peer review commissions for high-rise residential, commercial, and infrastructure projects. Requires 8+ years of experience in RCC and steel design with a strong understanding of Indian and international codes.",
  },
  {
    id: "structural-engineer",
    title: "Structural Engineer",
    division: "Structural Engineering",
    location: "Vapi, India",
    type: "Full-time",
    description:
      "Work on structural design and analysis across diverse project typologies including high-rise buildings, airports, and industrial facilities. Requires 3-8 years of experience in RCC and/or steel design.",
  },
  {
    id: "mep-design-engineer",
    title: "MEP Design Engineer",
    division: "MEP Engineering",
    location: "Vapi, India",
    type: "Full-time",
    description:
      "Design and coordinate mechanical, electrical, and plumbing systems for residential, commercial, and public building projects. Requires 3-8 years of experience in MEP design with proficiency in Revit/BIM workflows.",
  },
];

export function CareersView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { company } = data;

  return (
    <>
      <PageHeader
        index="00"
        eyebrow="Careers"
        title={
          <>
            Build your career
            <br />
            <span className="text-steel">with purpose.</span>
          </>
        }
        description="Join a passionate team of engineers working on complex, high-impact projects across India — from airports and high-rise towers to large-scale residential townships. We invest in our people and provide real opportunities for professional growth."
        tags={["Engineering", "Growth", "Collaboration"]}
        meta={[
          { label: "Team", value: "10 engineers — and growing" },
          { label: "Location", value: "Vapi, India" },
          { label: "Disciplines", value: "02" },
        ]}
      />

      {/* Why Probitas */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow index="01">Why Probitas</Eyebrow>
              <div className="mt-8">
                <DrawingTag code="CAR-01" title="Culture" />
              </div>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <DisplayHeading as="h2">
                  An environment built for engineers who care.
                </DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                  At Probitas, integrity builds trust and shapes excellence. We are
                  committed to creating an inclusive working environment based on
                  fairness and respect — one that encourages talented people of any
                  background to produce their best work of the highest quality.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                  We reinforce our commitment through investment in our people,
                  systems, equipment and capabilities — providing opportunities and
                  career paths for our staff, and developing our leadership as we
                  grow and evolve in the building industry.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What we offer — value props */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <Eyebrow index="02">What We Offer</Eyebrow>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            <StaggerItem className="bg-bone">
              <div className="flex h-full flex-col p-8 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-background">
                  <Briefcase className="h-5 w-5 text-accent-brand" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight md:text-2xl">
                  Complex, High-Impact Projects
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-steel">
                  Work on projects that matter — airports, high-rise towers,
                  transit-oriented developments, and large-scale residential
                  townships across India and the UAE. Every commission challenges
                  you to grow.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="bg-bone">
              <div className="flex h-full flex-col p-8 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-background">
                  <Users className="h-5 w-5 text-accent-brand" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight md:text-2xl">
                  Collaborative, Flat Culture
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-steel">
                  We maintain a culture of quality based on transparency, trust,
                  diversity, collaboration and mutual respect. Your ideas and
                  expertise are valued from day one.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="bg-bone">
              <div className="flex h-full flex-col p-8 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-background">
                  <MapPin className="h-5 w-5 text-accent-brand" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight md:text-2xl">
                  Career Growth & Development
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-steel">
                  We invest in systems, equipment, and capabilities — providing
                  real career paths and leadership development as we grow and
                  evolve in the building industry.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </Container>
      </section>

      {/* Open positions */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <Eyebrow index="03">Open Positions</Eyebrow>
          <Reveal>
            <DisplayHeading as="h2" className="mt-6">
              Current openings.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-steel">
              If your profile matches one of the roles below, we would like to hear
              from you. If no current opening matches your skill set, you are welcome
              to send a general application.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-px bg-border">
            {OPEN_POSITIONS.map((pos, i) => (
              <Reveal key={pos.id} delay={0.05 * i}>
                <PositionCard position={pos} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 border-t border-border pt-8">
              <p className="text-sm text-steel">
                Don't see a role that fits?{" "}
                <button
                  onClick={() => onNavigate("contact")}
                  className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent-brand"
                >
                  Send a general application
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* How to apply */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow index="04">How to Apply</Eyebrow>
              <div className="mt-8 h-32 w-full text-steel/60">
                <CoordinateCross />
              </div>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <DisplayHeading as="h2">
                  Send your application.
                </DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 space-y-6 text-pretty text-base leading-relaxed text-steel">
                  <p>
                    To apply, email your CV and a brief cover letter to{" "}
                    <span className="text-foreground font-medium">{company.email}</span>{" "}
                    with the position title in the subject line. We review every
                    application and respond to shortlisted candidates within one week.
                  </p>
                  <p>
                    Please include your current notice period, salary expectations, and
                    any relevant project experience that demonstrates your capability
                    for the role.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <button
                  onClick={() => onNavigate("contact")}
                  className="group mt-10 inline-flex items-center gap-3 bg-foreground px-6 py-3.5 text-bone transition-colors hover:bg-accent-brand"
                >
                  <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                    Contact Us
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Ready to build something meaningful?"
        body="Start a conversation about joining our team of engineers."
        ctaLabel="Get in Touch"
        view="contact"
      />
    </>
  );
}

/* ============================================================ */
/* Position card — styled row for each open position               */
/* ============================================================ */
function PositionCard({
  position,
  index,
}: {
  position: OpenPosition;
  index: number;
}) {
  const hasDetails = position.responsibilities || position.qualifications;
  return (
    <div className="bg-background p-8 md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
            <span className="number-tabular">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-5 bg-steel/40" />
            <span>{position.division}</span>
            <span className="h-px w-3 bg-steel/40" />
            <span>{position.type}</span>
          </div>
          <h3 className="mt-3 font-display text-xl font-medium tracking-tight md:text-2xl">
            {position.title}
          </h3>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-steel">
            {position.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-steel">
            <MapPin className="h-3.5 w-3.5" />
            {position.location}
          </div>

          {/* Responsibilities & Qualifications — shown when available */}
          {hasDetails && (
            <div className="mt-6 grid grid-cols-1 gap-6 border-t border-border pt-6 md:grid-cols-2">
              {position.responsibilities && (
                <div>
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                    Key Responsibilities
                  </div>
                  <ul className="mt-3 space-y-2">
                    {position.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent-brand" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {position.qualifications && (
                <div>
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                    Qualifications & Skills
                  </div>
                  <ul className="mt-3 space-y-2">
                    {position.qualifications.map((q, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent-brand" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <a
          href={`mailto:contact@probitasindia.com?subject=Application: ${position.title}`}
          className="inline-flex shrink-0 items-center gap-2 border border-border bg-bone px-5 py-3 font-mono-tight text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent-brand hover:bg-accent-brand hover:text-bone"
        >
          Apply
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
