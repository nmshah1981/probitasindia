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
  ImageOrPlaceholder,
} from "@/components/site/primitives";
import {
  PageHeader,
  RelatedServicesCta,
} from "@/components/site/page-blocks";
import { DrawingTag } from "@/components/engineering/technical-graphics";
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
        index="00"
        eyebrow="Projects"
        title={
          <>
            Selected
            <br />
            <span className="text-steel">engineering commissions.</span>
          </>
        }
        description="Selected peer review and value engineering commissions currently underway."
        tags={["Structural", "MEP", "Peer Review"]}
        meta={[
          { label: "Total", value: String(projects.length).padStart(2, "0") },
        ]}
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

/* ============================================================ */
/* PROJECT DETAIL — reusable template                            */
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
