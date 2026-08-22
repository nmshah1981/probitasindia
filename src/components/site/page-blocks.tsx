"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
  ImageOrPlaceholder,
} from "@/components/site/primitives";
import { type ViewId } from "@/lib/site-content";

/* ============================================================ */
/* PageHeader — editorial inner page hero                        */
/* ============================================================ */
export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="relative border-b border-border bg-background pt-28 sm:pt-32 md:pt-36">
      <Container className="pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Reveal>
            <DisplayHeading as="h1" className="mt-6">
              {title}
            </DisplayHeading>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-steel">
                {description}
              </p>
            </Reveal>
          )}
        </div>

        {image && (
          <Reveal delay={0.1}>
            <div className="relative mt-12 md:mt-16">
              <ImageOrPlaceholder
                src={image}
                alt={imageAlt ?? ""}
                ratio="21/9"
                className="border border-border shadow-xs"
                label={imageAlt}
              />
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

/* ============================================================ */
/* ContentBlock — heading + body with optional technical sidebar */
/* ============================================================ */
export function ContentBlock({
  eyebrow,
  title,
  children,
  sidebar,
  className,
}: {
  index?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-border bg-background", className)}>
      <Container className="py-20 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {sidebar && <div className="mt-8">{sidebar}</div>}
          </div>
          <div className="lg:col-span-8">
            {title && (
              <Reveal>
                <DisplayHeading as="h2" className="mb-8">
                  {title}
                </DisplayHeading>
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <div className="max-w-3xl text-pretty text-base sm:text-lg leading-relaxed text-steel [&_p]:mb-5 [&_p]:text-foreground/85">
                {children}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================ */
/* ProcessTimeline — numbered process steps                      */
/* ============================================================ */
export function ProcessTimeline({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
      {steps.map((s, i) => (
        <StaggerItem key={s.title} className="bg-background">
          <div className="flex h-full flex-col gap-3 p-8 sm:p-10">
            <span className="font-mono-tight text-[11px] uppercase tracking-[0.24em] text-steel number-tabular">
              {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
              {s.title}
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-steel">
              {s.body}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

/* ============================================================ */
/* RelatedServicesCta — bottom cross-discipline navigation strip */
/* ============================================================ */
export function RelatedServicesCta({
  onNavigate,
  services: related,
  primaryLabel,
  primaryView = "contact",
}: {
  onNavigate: (id: ViewId) => void;
  services: { slug: ViewId; index: string; title: string }[];
  primaryLabel?: string;
  primaryView?: ViewId;
}) {
  return (
    <section className="border-b border-border bg-bone">
      <Container className="py-20 sm:py-24 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Explore Next</Eyebrow>
            <DisplayHeading as="h3" className="mt-6">
              Engineering Disciplines
            </DisplayHeading>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-px border-t border-border sm:grid-cols-2">
              {related.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate(s.slug)}
                  className="group flex items-center justify-between border-b border-border bg-background p-6 text-left transition-colors hover:bg-concrete/40"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono-tight text-xs text-steel number-tabular">
                      {s.index}
                    </span>
                    <span className="font-display text-lg font-medium tracking-tight md:text-xl group-hover:text-accent-brand transition-colors">
                      {s.title}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-brand" />
                </button>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={() => onNavigate(primaryView)}
                className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-bone transition-colors hover:bg-accent-brand"
              >
                <span className="font-mono-tight text-[11px] uppercase tracking-[0.2em]">
                  {primaryLabel ?? "Discuss a Project"}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
