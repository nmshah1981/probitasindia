"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { ArrowUpRight, Briefcase, MapPin, Users } from "lucide-react";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-blocks";
import { CoordinateCross } from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

type OpenPosition = {
  id: string;
  title: string;
  division: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  responsibilities?: string[];
  qualifications?: string[];
};

const OPEN_POSITIONS: OpenPosition[] = [
  {
    id: "structural-design-engineer",
    title: "Senior Structural Design Engineer",
    division: "Structural Engineering",
    type: "Full-Time",
    location: "Mumbai / Vapi, India",
    experience: "5-8 Years",
    description:
      "Lead structural analysis and design of high-rise residential and commercial buildings and industrial structures. Responsible for concept-to-construction engineering delivery, technical coordination, and mentoring junior engineers.",
    responsibilities: [
      "Develop structural schemes and perform 3D analysis using ETABS, SAFE and STAAD.Pro.",
      "Design reinforced concrete and structural steel elements in compliance with Indian (IS) and international codes.",
      "Coordinate structural models with architectural and MEP disciplines in a BIM environment.",
      "Review structural drawings, bar bending schedules, and technical specifications.",
      "Conduct site inspections and provide technical resolution to construction-phase queries.",
    ],
    qualifications: [
      "B.Tech / M.Tech in Civil / Structural Engineering from a recognized institute.",
      "5-8 years of experience in structural design of high-rise buildings and complex structures.",
      "Proficiency in ETABS, SAFE, STAAD.Pro, and AutoCAD; familiarity with Revit is an advantage.",
      "Sound understanding of IS 456, IS 1893, IS 13920, IS 875, and IS 800.",
      "Strong communication and coordination skills.",
    ],
  },
  {
    id: "structural-peer-review-engineer",
    title: "Structural Peer Review Specialist",
    division: "Structural Engineering",
    type: "Full-Time",
    location: "Mumbai / Vapi, India",
    experience: "7-12 Years",
    description:
      "Perform independent technical audits, peer reviews, and value engineering analysis for large-scale structural commissions across India.",
    responsibilities: [
      "Review structural design basis reports, calculation packages, and mathematical analysis models prepared by third-party consultants.",
      "Verify load paths, lateral stability systems, seismic detailing, and constructability.",
      "Identify optimization and value-engineering opportunities without compromising structural safety.",
      "Author detailed, rigorous peer-review reports with clear findings and actionable recommendations.",
      "Participate in technical discussions with clients, developers, and principal design consultants.",
    ],
    qualifications: [
      "M.Tech / M.E. in Structural Engineering.",
      "7-12 years of hands-on experience in structural design and peer review of high-rise towers.",
      "Deep expertise in finite element modeling and non-linear analysis.",
      "Exceptional analytical rigor and report-writing skills.",
    ],
  },
  {
    id: "mep-design-engineer",
    title: "Senior MEP Design Engineer (HVAC / Electrical / Plumbing)",
    division: "MEP Engineering",
    type: "Full-Time",
    location: "Nagpur, India",
    experience: "4-7 Years",
    description:
      "Design building services systems for commercial, residential, and public infrastructure projects. Work in close coordination with our structural team to deliver integrated engineering solutions.",
    responsibilities: [
      "Design HVAC, electrical power distribution, lighting, fire protection, and public health systems.",
      "Perform heat load calculations, equipment sizing, cable sizing, and hydraulic calculations.",
      "Prepare schematic drawings, detail drawings, BOQs, and tender specifications.",
      "Coordinate MEP services in BIM/Revit to ensure clash-free integration with structural frames.",
      "Review contractor submittals and provide technical support during installation and commissioning.",
    ],
    qualifications: [
      "B.Tech / B.E. in Mechanical or Electrical Engineering.",
      "4-7 years of experience in building services design across commercial or residential real estate.",
      "Proficiency in AutoCAD, Revit MEP, and relevant design software.",
      "Familiarity with NBC, IS, NFPA, and local municipal codes.",
    ],
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
        eyebrow="Careers"
        title={
          <>
            Build your career
            <br />
            <span className="text-steel">with purpose.</span>
          </>
        }
        description="Join a passionate team of engineers working on complex, high-impact projects across India — from airports and high-rise towers to large-scale residential townships. We invest in our people and provide real opportunities for professional growth."
      />

      {/* Why Probitas */}
      <section className="border-b border-border bg-background">
        <Container className="py-20 sm:py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Why Probitas</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <DisplayHeading as="h2">
                  An environment built for engineers who care.
                </DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-steel">
                  At Probitas, integrity builds trust and shapes excellence. We are
                  committed to creating an inclusive working environment based on
                  fairness and respect — one that encourages talented people of any
                  background to produce their best work of the highest quality.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-steel">
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

      {/* What we offer */}
      <section className="border-b border-border bg-bone">
        <Container className="py-20 sm:py-24 md:py-32">
          <Eyebrow>What We Offer</Eyebrow>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            <StaggerItem className="bg-background">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-bone">
                  <Briefcase className="h-5 w-5 text-accent-brand" />
                </div>
                <h3 className="mt-6 font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
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
            <StaggerItem className="bg-background">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-bone">
                  <Users className="h-5 w-5 text-accent-brand" />
                </div>
                <h3 className="mt-6 font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                  Collaborative, Flat Culture
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-steel">
                  We maintain a culture of quality based on transparency, trust,
                  diversity, collaboration and mutual respect. Your ideas and
                  expertise are valued from day one.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="bg-background">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-bone">
                  <MapPin className="h-5 w-5 text-accent-brand" />
                </div>
                <h3 className="mt-6 font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                  Career Growth &amp; Development
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
        <Container className="py-20 sm:py-24 md:py-32">
          <Eyebrow>Open Positions</Eyebrow>
          <Reveal>
            <DisplayHeading as="h2" className="mt-6">
              Current engineering openings.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-steel">
              If your profile matches one of the roles below, we would like to hear
              from you. If no current opening matches your skill set, you are welcome
              to send a general application.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-6">
            {OPEN_POSITIONS.map((pos, i) => (
              <Reveal key={pos.id} delay={0.05 * i}>
                <PositionCard position={pos} index={i} email={company.email} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 border-t border-border pt-8 flex items-center justify-between">
              <p className="text-sm text-steel">
                Don't see a role that fits?{" "}
                <button
                  onClick={() => onNavigate("contact")}
                  className="inline-flex items-center gap-1 text-foreground font-medium transition-colors hover:text-accent-brand"
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
        <Container className="py-20 sm:py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Application Process</Eyebrow>
              <div className="mt-8 h-32 w-full text-steel/60 hidden lg:block">
                <CoordinateCross />
              </div>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <DisplayHeading as="h2">
                  Send your application.
                </DisplayHeading>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 space-y-5 text-pretty text-base sm:text-lg leading-relaxed text-steel">
                  <p>
                    To apply, email your CV and a brief cover letter to{" "}
                    <a href={`mailto:${company.email}`} className="text-foreground font-medium underline underline-offset-4 hover:text-accent-brand">
                      {company.email}
                    </a>{" "}
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
                  className="group mt-10 inline-flex items-center gap-3 bg-foreground px-7 py-4 text-bone transition-colors hover:bg-accent-brand"
                >
                  <span className="font-mono-tight text-[11px] uppercase tracking-[0.2em]">
                    Contact Engineering Recruitment
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

function PositionCard({
  position,
  index,
  email,
}: {
  position: OpenPosition;
  index: number;
  email: string;
}) {
  const hasDetails = position.responsibilities || position.qualifications;
  return (
    <div className="border border-border bg-bone-light p-8 sm:p-10 transition-all">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel">
            <span className="number-tabular font-medium text-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-5 bg-steel/40" />
            <span>{position.division}</span>
            <span className="h-px w-3 bg-steel/40" />
            <span className="text-accent-brand font-medium">{position.type}</span>
          </div>
          <h3 className="mt-3 font-display text-xl sm:text-2xl font-medium tracking-tight text-foreground leading-[1.25]">
            {position.title}
          </h3>
          <p className="mt-3 max-w-3xl text-pretty text-sm sm:text-base leading-relaxed text-steel">
            {position.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono-tight text-steel">
            <MapPin className="h-3.5 w-3.5 text-accent-brand" />
            <span>{position.location}</span>
          </div>

          {/* Responsibilities & Qualifications */}
          {hasDetails && (
            <div className="mt-8 grid grid-cols-1 gap-8 border-t border-border pt-6 md:grid-cols-2">
              {position.responsibilities && (
                <div>
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel font-medium">
                    Key Responsibilities
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {position.responsibilities.map((r, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent-brand" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {position.qualifications && (
                <div>
                  <div className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel font-medium">
                    Qualifications &amp; Skills
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {position.qualifications.map((q, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent-brand" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <a
          href={`mailto:${email}?subject=Application: ${position.title}`}
          className="inline-flex shrink-0 items-center gap-2 border border-border bg-foreground px-6 py-3.5 font-mono-tight text-[11px] uppercase tracking-[0.2em] text-bone transition-colors hover:bg-accent-brand"
        >
          <span>Apply</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
