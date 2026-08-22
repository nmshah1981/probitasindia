"use client";

import * as React from "react";
import {
  type ViewId,
  type ProjectRecord,
} from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";
import {
  PageHeader,
  RelatedServicesCta,
} from "@/components/site/page-blocks";
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
  const { data } = useContent();
  const { projects, services } = data;

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Selected
            <br />
            <span className="text-steel">engineering commissions.</span>
          </>
        }
        description="Selected peer review and value engineering commissions currently underway."
      />

      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <ProjectGrid projects={projects} onSelect={onSelectProject} />
        </Container>
      </section>

      <CtaBand
        onNavigate={onNavigate}
        title="Want to discuss a project?"
        body="Tell us about your project and we'll route your brief to the right team."
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
    <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {list.map((p) => (
        <StaggerItem key={p.id} className="bg-bone-light border border-border">
          <button
            onClick={() => onSelect(p.id)}
            className="group flex h-full w-full flex-col justify-between text-left p-8 sm:p-10 transition-colors hover:bg-concrete-subtle"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-mono-tight text-[11px] uppercase tracking-[0.2em] text-foreground font-medium">
                  {p.projectType}
                </span>
                <span className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel">
                  {p.location}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl font-medium tracking-tight text-foreground group-hover:text-accent-brand transition-colors">
                  {p.name}
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-steel">
                  {p.description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <span className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                {p.scope}
              </span>
              <div className="inline-flex items-center gap-1.5 font-mono-tight text-[11px] uppercase tracking-[0.18em] text-foreground group-hover:text-accent-brand font-medium">
                <span>View Details</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </button>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

/* ============================================================ */
/* PROJECT DETAIL — Case Study Dossier View                     */
/* ============================================================ */
export function ProjectDetailView({
  project,
  onNavigate,
}: {
  project: ProjectRecord;
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { services } = data;

  return (
    <>
      <section className="border-b border-border bg-background pt-28 sm:pt-32 md:pt-40">
        <Container className="pb-8">
          <button
            onClick={() => onNavigate("projects")}
            className="group inline-flex items-center gap-2 font-mono-tight text-[11px] uppercase tracking-[0.2em] text-steel transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </button>
        </Container>

        <Container className="pb-16 md:pb-24">
          <div className="max-w-4xl">
            <Eyebrow>Commission Case Study</Eyebrow>
            <DisplayHeading as="h1" className="mt-6">
              {project.name}
            </DisplayHeading>
            <p className="mt-6 text-pretty text-base leading-relaxed text-steel md:text-lg">
              {project.description}
            </p>

            <div className="mt-10 p-8 border border-border bg-bone-light">
              <div className="font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel mb-4">
                Scope of Work
              </div>
              <p className="text-sm leading-relaxed text-steel">
                {project.scope} — This engagement involves comprehensive structural peer review and value engineering scrutiny — verifying design basis assumptions, structural systems, member sizing, and constructability to optimize safety and economy.
              </p>
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
