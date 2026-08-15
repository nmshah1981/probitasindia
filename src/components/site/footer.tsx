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
    <footer className="mt-auto border-t border-border bg-bone">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center">
              <img
                src="/images/probitas-logo.png"
                alt="Probitas logo"
                className="h-9 object-contain"
              />
            </div>
            <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-steel">
              {company.tagline}
            </p>
            <div className="mt-8 max-w-md text-steel">
              <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
                Studio
              </div>
              <div className="mt-2 text-sm text-foreground">
                {company.address}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
                  Email
                </div>
                <div className="mt-1 text-foreground">{company.email}</div>
              </div>
              <div>
                <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
                  Phone
                </div>
                <div className="mt-1 text-foreground">{company.phone}</div>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 lg:col-start-7">
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
              Index
            </div>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="group inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent-brand"
                  >
                    <span className="h-px w-4 bg-steel/40 transition-all group-hover:w-6 group-hover:bg-accent-brand" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
              Disciplines
            </div>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => onNavigate(s.slug)}
                    className="group inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent-brand"
                  >
                    <span className="font-mono-tight text-[11px] text-steel number-tabular">
                      {s.index}
                    </span>
                    <span className="h-px w-4 bg-steel/40 transition-all group-hover:w-6 group-hover:bg-accent-brand" />
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 lg:col-start-12">
            <button
              onClick={() => onNavigate("contact")}
              className="group inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent-brand"
            >
              <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                Enquire
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <Hairline className="my-10" />

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="text-steel/80 text-xs">
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-steel/80">
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              Privacy Policy
            </span>
            <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em]">
              Terms of Service
            </span>
          </div>
        </div>

        {/* Subtle technical motif at the bottom */}
        <div className="pointer-events-none mt-12 h-24 text-steel/30">
          <StructuralGrid cellSize={56} />
        </div>
      </Container>
    </footer>
  );
}
