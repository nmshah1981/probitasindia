"use client";

import * as React from "react";
import {
  projects,
  services,
  type ViewId,
  type ProjectRecord,
} from "@/lib/site-content";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
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
  ContentBlock,
  SpecTable,
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import { DrawingTag, CoordinateCross } from "@/components/engineering/technical-graphics";
import { CtaBand } from "@/components/sections/home-sections";

/* ============================================================ */
/* PROJECTS — list view                                          */
/* ============================================================ */
export function ProjectsView({
  onNavigate,
  onSelectProject,
}: {
  onNavigate: (id: ViewId) => void;
  onSelectProject: (id: string) => void;
}) {
  const hasProjects = projects.length > 0;

  return (
    <>
      <PageHeader
        index="00"
        eyebrow="Projects"
        title={
          <>
            Selected
            <br />
            <span className="text-steel">engineering commissions.</span>
          </>
        }
        description="[PROJECTS INTRODUCTION — OWNER TO PROVIDE: A short description of the firm's project portfolio. No invented numbers, locations or client names.]"
        tags={["Structural", "MEP", "Peer Review"]}
        meta={[
          { label: "Total", value: String(projects.length).padStart(2, "0") },
          { label: "Sectors", value: "[SECTORS — OWNER TO PROVIDE]" },
          { label: "Regions", value: "[REGIONS — OWNER TO PROVIDE]" },
        ]}
      />

      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          {hasProjects ? (
            <ProjectGrid projects={projects} onSelect={onSelectProject} />
          ) : (
            <EmptyProjectsFullState />
          )}
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Want to discuss a project?"
        body="[CTA BODY — OWNER TO PROVIDE]"
        ctaLabel="Discuss a Project"
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

function ProjectGrid({
  projects: list,
  onSelect,
}: {
  projects: ProjectRecord[];
  onSelect: (id: string) => void;
}) {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
      {list.map((p, i) => (
        <StaggerItem key={p.id} className="bg-background">
          <button
            onClick={() => onSelect(p.id)}
            className="group flex h-full flex-col text-left"
          >
            <div className="relative">
              <ImageOrPlaceholder
                src={p.image}
                alt={`${p.name} — image`}
                ratio="4/3"
                className="border-b border-border"
                imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute left-3 top-3">
                <DrawingTag
                  code={`PRJ-${String(i + 1).padStart(2, "0")}`}
                  title={p.projectType}
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                <span className="number-tabular">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-6 bg-steel/40" />
                <span>{p.projectType}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight md:text-2xl">
                {p.name}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-steel">
                {p.description}
              </p>
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 text-foreground">
                  <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                    View project
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </button>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

function EmptyProjectsFullState() {
  return (
    <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-background p-6">
          <div className="relative">
            <ImageOrPlaceholder
              ratio="4/3"
              label="[PROJECT IMAGE — OWNER TO PROVIDE]"
              className="border-b border-border"
            />
            <div className="absolute left-3 top-3">
              <DrawingTag
                code={`PRJ-${String(i + 1).padStart(2, "0")}`}
                title="Reserved"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
            <span className="number-tabular">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-6 bg-steel/40" />
            <span>[Project Type]</span>
          </div>
          <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-steel">
            [PROJECT NAME — OWNER TO PROVIDE]
          </h3>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-steel">
            [PROJECT DESCRIPTION — OWNER TO PROVIDE]
          </p>
          <div className="mt-4">
            <PlaceholderPill>Owner-controlled content</PlaceholderPill>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================ */
/* PROJECT DETAIL — reusable template                            */
/* ============================================================ */
export function ProjectDetailView({
  project,
  onNavigate,
}: {
  project?: ProjectRecord;
  onNavigate: (id: ViewId) => void;
}) {
  // If no project supplied (because projects[] is empty), show empty state detail.
  if (!project) {
    return <EmptyProjectDetail onNavigate={onNavigate} />;
  }

  return (
    <>
      <section className="border-b border-border bg-background pt-32 md:pt-40">
        <Container className="pb-12">
          <button
            onClick={() => onNavigate("projects")}
            className="group inline-flex items-center gap-2 font-mono-tight text-[11px] uppercase tracking-[0.18em] text-steel transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All Projects
          </button>
        </Container>
        <Container className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <Eyebrow index="PRJ">Project</Eyebrow>
              <DisplayHeading as="h1" className="mt-6">
                {project.name}
              </DisplayHeading>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                {project.description}
              </p>
            </div>
            <div className="md:col-span-4">
              <dl>
                <ProjectMeta label="Location" value={project.location} />
                <ProjectMeta label="Project Type" value={project.projectType} />
                {project.client && (
                  <ProjectMeta label="Client" value={project.client} />
                )}
                <ProjectMeta label="Scope" value={project.scope} />
                {project.year && (
                  <ProjectMeta label="Year" value={project.year} />
                )}
              </dl>
            </div>
          </div>

          <div className="relative mt-12">
            <ImageOrPlaceholder
              src={project.image}
              alt={`${project.name} — hero image`}
              ratio="21/9"
              className="border border-border"
            />
            <div className="absolute right-4 top-4">
              <DrawingTag code="PRJ-HERO" title={project.name} />
            </div>
          </div>
        </Container>
      </section>

      <ContentBlock
        index="01"
        eyebrow="Project Overview"
        title="[PROJECT OVERVIEW — OWNER TO PROVIDE]"
      >
        <p>
          [PROJECT OVERVIEW — OWNER TO PROVIDE: A clear narrative description of
          the project — its brief, its context, the firm&apos;s role and the
          engineering challenge it presented.]
        </p>
      </ContentBlock>

      <ContentBlock
        index="02"
        eyebrow="Engineering Challenge"
        title="[ENGINEERING CHALLENGE — OWNER TO PROVIDE]"
      >
        <p>
          [ENGINEERING CHALLENGE — OWNER TO PROVIDE: A description of the
          principal engineering challenge — technical, contextual or
          programme-related.]
        </p>
      </ContentBlock>

      <ContentBlock
        index="03"
        eyebrow="Engineering Approach"
        title="[ENGINEERING APPROACH — OWNER TO PROVIDE]"
      >
        <p>
          [ENGINEERING APPROACH — OWNER TO PROVIDE: A description of how the
          firm approached the challenge — concept, analysis, coordination and
          delivery.]
        </p>
      </ContentBlock>

      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="04">Key Deliverables</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <SpecTable
                rows={[
                  { label: "Services Provided", value: "[SERVICES PROVIDED — OWNER TO PROVIDE]" },
                  { label: "Deliverables", value: "[KEY DELIVERABLES — OWNER TO PROVIDE]" },
                  { label: "Outcome", value: "[OUTCOME — OWNER TO PROVIDE]" },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <RelatedServicesCta
        onNavigate={onNavigate}
        services={services.map((s) => ({ slug: s.slug, index: s.index, title: s.title }))}
        primaryLabel="Discuss a Project"
      />
    </>
  );
}

function EmptyProjectDetail({ onNavigate }: { onNavigate: (id: ViewId) => void }) {
  return (
    <>
      <section className="border-b border-border bg-background pt-32 md:pt-40">
        <Container className="pb-12">
          <button
            onClick={() => onNavigate("projects")}
            className="group inline-flex items-center gap-2 font-mono-tight text-[11px] uppercase tracking-[0.18em] text-steel transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All Projects
          </button>
        </Container>
        <Container className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <Eyebrow index="PRJ">Project</Eyebrow>
              <DisplayHeading as="h1" className="mt-6">
                [PROJECT NAME — OWNER TO PROVIDE]
              </DisplayHeading>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                [PROJECT DESCRIPTION — OWNER TO PROVIDE]
              </p>
            </div>
            <div className="md:col-span-4">
              <dl>
                <ProjectMeta label="Location" value="[PROJECT LOCATION — OWNER TO PROVIDE]" />
                <ProjectMeta label="Project Type" value="[PROJECT TYPE — OWNER TO PROVIDE]" />
                <ProjectMeta label="Client" value="[CLIENT — OPTIONAL]" />
                <ProjectMeta label="Scope" value="[SCOPE — OWNER TO PROVIDE]" />
                <ProjectMeta label="Year" value="[YEAR — OPTIONAL]" />
              </dl>
            </div>
          </div>

          <div className="relative mt-12">
            <ImageOrPlaceholder
              ratio="21/9"
              label="[PROJECT IMAGE — OWNER TO PROVIDE]"
              className="border border-border"
            />
            <div className="absolute right-4 top-4">
              <DrawingTag code="PRJ-HERO" title="Project hero" />
            </div>
          </div>
        </Container>
      </section>

      <ContentBlock
        index="01"
        eyebrow="Project Overview"
        title="[PROJECT OVERVIEW — OWNER TO PROVIDE]"
      >
        <p>
          [PROJECT OVERVIEW — OWNER TO PROVIDE: When a real project is supplied,
          its narrative overview will appear here.]
        </p>
      </ContentBlock>

      <ContentBlock
        index="02"
        eyebrow="Engineering Challenge"
        title="[ENGINEERING CHALLENGE — OWNER TO PROVIDE]"
      >
        <p>
          [ENGINEERING CHALLENGE — OWNER TO PROVIDE: The principal engineering
          challenge of the project.]
        </p>
      </ContentBlock>

      <ContentBlock
        index="03"
        eyebrow="Engineering Approach"
        title="[ENGINEERING APPROACH — OWNER TO PROVIDE]"
      >
        <p>
          [ENGINEERING APPROACH — OWNER TO PROVIDE: The firm&apos;s engineering
          approach to the project.]
        </p>
      </ContentBlock>

      <section className="border-b border-border bg-bone">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow index="04">Key Deliverables</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <SpecTable
                rows={[
                  { label: "Services Provided", value: "[SERVICES PROVIDED — OWNER TO PROVIDE]" },
                  { label: "Deliverables", value: "[KEY DELIVERABLES — OWNER TO PROVIDE]" },
                  { label: "Outcome", value: "[OUTCOME — OWNER TO PROVIDE]" },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <RelatedServicesCta
        onNavigate={onNavigate}
        services={services.map((s) => ({ slug: s.slug, index: s.index, title: s.title }))}
        primaryLabel="Discuss a Project"
      />
    </>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-border py-3 first:border-t-0 first:pt-0">
      <dt className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
        {label}
      </dt>
      <dd className="text-sm text-foreground">{value}</dd>
    </div>
  );
}
