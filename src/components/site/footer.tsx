"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { navItems, type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { ArrowUpRight } from "lucide-react";
import { Container, Hairline } from "./primitives";
import { StructuralGrid } from "@/components/engineering/technical-graphics";

export function SiteFooter({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { company, services } = data;
  return (
    <footer className="mt-auto border-t border-border bg-bone-light text-foreground">
      <Container className="py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Studio info */}
          <div className="lg:col-span-5">
            <div className="flex items-center">
              <img
                src="/images/probitas-logo.png"
                alt="Probitas logo"
                className="h-9 md:h-[43px] object-contain"
              />
            </div>
            <p className="mt-6 max-w-md font-display text-lg font-medium text-foreground tracking-tight">
              {company.tagline}
            </p>
            <p className="mt-3 max-w-md text-sm text-steel leading-relaxed">
              {company.shortDescription}
            </p>

            <div className="mt-8 border-t border-border/80 pt-6">
              <div className="font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel">
                Registered Office
              </div>
              <div className="mt-2 text-sm text-foreground/90 max-w-sm leading-relaxed">
                {company.address}
              </div>
            </div>

            <div className="mt-6 text-sm border-t border-border/80 pt-6">
              <div>
                <div className="font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel">
                  Enquiries Email
                </div>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block text-foreground transition-colors hover:text-accent-brand font-mono-tight text-xs"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 lg:col-start-7">
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel">
              Index Directory
            </div>
            <ul className="mt-5 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="group inline-flex items-center gap-2 text-sm text-foreground/85 transition-colors hover:text-accent-brand"
                  >
                    <span className="h-px w-3 bg-steel/40 transition-all group-hover:w-5 group-hover:bg-accent-brand" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div className="lg:col-span-3">
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel">
              Disciplines &amp; Services
            </div>
            <ul className="mt-5 space-y-4">
              {services.map((s) => (
                <li key={s.slug} className="border-b border-border/60 pb-3 last:border-b-0">
                  <button
                    onClick={() => onNavigate(s.slug)}
                    className="group flex items-start gap-2.5 text-left text-sm text-foreground transition-colors hover:text-accent-brand"
                  >
                    <span className="font-mono-tight text-xs text-steel number-tabular mt-0.5">
                      {s.index}
                    </span>
                    <div>
                      <span className="font-medium">{s.title}</span>
                      <div className="mt-1 flex flex-wrap gap-x-2 text-xs text-steel">
                        {s.services.map((sub, idx) => (
                          <span key={sub.id}>
                            {idx > 0 && "• "}
                            {sub.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Hairline className="my-10" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center text-xs text-steel">
          <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
            © {new Date().getFullYear()} {company.name}. All rights reserved. Structural &amp; MEP Engineering Consultancy.
          </div>
          <div className="flex items-center gap-6 font-mono-tight text-[10px] uppercase tracking-[0.22em]">
            <span>Where Excellence Meets Integrity</span>
          </div>
        </div>

        {/* Structural Grid Watermark */}
        <div className="pointer-events-none mt-12 h-20 w-full text-steel/20">
          <StructuralGrid cellSize={48} />
        </div>
      </Container>
    </footer>
  );
}
