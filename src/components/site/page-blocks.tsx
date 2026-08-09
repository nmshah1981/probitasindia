"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  TechnicalTag,
} from "@/components/site/primitives";
import { DrawingTag } from "@/components/engineering/technical-graphics";
import { type ViewId } from "@/lib/site-content";

/* ============================================================ */
/* PageHeader — premium hero for inner pages                     */
/* ============================================================ */
export function PageHeader({
  index,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  tags = [],
  meta = [],
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  meta?: { label: string; value: string }[];
}) {
  const reduce = useReducedMotion();
  return (
    <section className="relative border-b border-border bg-background pt-32 md:pt-40">
      {/* top hairline with technical info */}
      <div className="absolute inset-x-0 top-20 hidden md:block">
        <Container>
          <div className="flex items-center justify-between border-t border-border pt-3 text-steel">
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              {eyebrow}
            </div>
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              Index — {index}
            </div>
          </div>
        </Container>
      </div>

      <Container className="pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow index={index}>{eyebrow}</Eyebrow>
            <Reveal>
              <DisplayHeading as="h1" className="mt-6">
                {title}
              </DisplayHeading>
            </Reveal>
            {description && (
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">
                  {description}
                </p>
              </Reveal>
            )}
            {tags.length > 0 && (
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <TechnicalTag key={t}>{t}</TechnicalTag>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {meta.length > 0 && (
            <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
              <Reveal delay={0.15}>
                <dl className="w-full max-w-xs">
                  {meta.map((m) => (
                    <div
                      key={m.label}
                      className="grid grid-cols-2 gap-4 border-t border-border py-3 first:border-t-0 first:pt-0"
                    >
                      <dt className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                        {m.label}
                      </dt>
                      <dd className="text-sm text-foreground">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          )}
        </div>

        {image && (
          <Reveal delay={0.1}>
            <div className="relative mt-12 md:mt-16">
              <ImageOrPlaceholder
                src={image}
                alt={imageAlt ?? ""}
                ratio="21/9"
                className="border border-border"
                label={imageAlt}
              />
              <div className="absolute right-4 top-4">
                <DrawingTag code={`IMG-${index}`} title={eyebrow} />
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

/* ============================================================ */
/* ContentBlock — heading + body content with optional sidebar  */
/* ============================================================ */
export function ContentBlock({
  index,
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
      <Container className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            {(index || eyebrow) && (
              <Eyebrow index={index}>{eyebrow}</Eyebrow>
            )}
            {sidebar && <div className="mt-8">{sidebar}</div>}
          </div>
          <div className="md:col-span-9">
            {title && (
              <Reveal>
                <DisplayHeading as="h2" className="mb-8">
                  {title}
                </DisplayHeading>
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <div className="max-w-3xl text-pretty text-base leading-relaxed text-steel md:text-lg [&_p]:mb-4 [&_p]:text-foreground/80">
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
/* SpecTable — technical specification rows                      */
/* ============================================================ */
export function SpecTable({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <StaggerGroup className="border-t border-border">
      {rows.map((r) => (
        <StaggerItem key={r.label}>
          <div className="grid grid-cols-1 gap-2 border-b border-border py-4 md:grid-cols-4 md:gap-6">
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel md:col-span-1">
              {r.label}
            </span>
            <span className="text-sm text-foreground/80 md:col-span-3">
              {r.value}
            </span>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
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
    <StaggerGroup className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
      {steps.map((s, i) => (
        <StaggerItem key={s.title} className="bg-background">
          <div className="flex h-full flex-col gap-3 p-8 md:p-10">
            <span className="font-mono-tight text-[11px] uppercase tracking-[0.22em] text-steel number-tabular">
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
/* SectionNav — quick sub-section jump links                     */
/* ============================================================ */
export function SectionNav({
  items,
  active,
  onSelect,
}: {
  items: { id: string; label: string }[];
  active?: string;
  onSelect?: (id: string) => void;
}) {
  return (
    <div className="sticky top-20 z-30 -mx-6 border-b border-border bg-background/85 px-6 py-3 backdrop-blur-md md:top-24 md:mx-0 md:px-0">
      <div className="flex items-center gap-6 overflow-x-auto thin-scroll">
        <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
          On this page
        </span>
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => onSelect?.(it.id)}
            className={cn(
              "whitespace-nowrap font-mono-tight text-[11px] uppercase tracking-[0.18em] transition-colors",
              active === it.id
                ? "text-foreground"
                : "text-steel hover:text-foreground",
            )}
          >
            {it.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ============================================================ */
/* RelatedServicesCta — bottom CTA strip                         */
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
    <section className="border-b border-border bg-background">
      <Container className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow index="→">Continue</Eyebrow>
            <DisplayHeading as="h3" className="mt-6">
              Related disciplines
            </DisplayHeading>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-px border-t border-border md:grid-cols-2">
              {related.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => onNavigate(s.slug)}
                  className="group flex items-center justify-between border-b border-border py-6 text-left transition-colors hover:bg-concrete/30"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono-tight text-[11px] text-steel number-tabular">
                      {s.index}
                    </span>
                    <span className="font-display text-lg font-medium tracking-tight md:text-xl">
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
                className="group inline-flex items-center gap-3 bg-foreground px-6 py-3.5 text-bone transition-colors hover:bg-accent-brand"
              >
                <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
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
