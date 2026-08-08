"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { company, navItems, services, type ViewId } from "@/lib/site-content";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Container } from "./primitives";

type NavProps = {
  current: ViewId;
  onNavigate: (id: ViewId) => void;
};

export function SiteHeader({ current, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (id: ViewId) => {
    onNavigate(id);
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-14" : "h-20",
          )}
        >
          {/* Logo — original colour format, no text wordmark */}
          <button
            onClick={() => handleNav("home")}
            className={cn(
              "group flex items-center transition-all duration-300",
              scrolled ? "h-7" : "h-9",
            )}
            aria-label="Go to homepage"
          >
            {/* Original Probitas logo — dark mark on transparent background.
                When over the dark hero, a subtle bone chip sits behind it so
                the original colours stay visible without altering the logo. */}
            <span
              className={cn(
                "inline-flex items-center justify-center transition-all duration-300",
                scrolled
                  ? "bg-transparent px-0"
                  : "rounded-[2px] bg-bone/90 px-2 py-1 shadow-sm backdrop-blur-sm",
              )}
            >
              <img
                src="/images/probitas-logo.png"
                alt="Probitas logo"
                className={cn(
                  "object-contain transition-all duration-300",
                  scrolled ? "h-7" : "h-7",
                )}
              />
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = current === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={cn(
                    "relative px-4 py-2 font-mono-tight text-[11px] uppercase tracking-[0.18em] transition-colors",
                    scrolled
                      ? active
                        ? "text-foreground"
                        : "text-steel hover:text-foreground"
                      : active
                        ? "text-bone"
                        : "text-bone/70 hover:text-bone",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-px transition-colors",
                        scrolled ? "bg-foreground" : "bg-bone",
                      )}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA + mobile trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav("contact")}
              className={cn(
                "group hidden items-center gap-2 px-5 py-2.5 transition-colors lg:inline-flex",
                scrolled
                  ? "bg-foreground text-bone hover:bg-accent-brand"
                  : "bg-bone text-ink hover:bg-accent-brand hover:text-bone",
              )}
            >
              <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                {company.primaryCta}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center border transition-colors lg:hidden",
                scrolled
                  ? "border-border bg-bone/60 text-foreground"
                  : "border-bone/30 bg-bone/10 text-bone backdrop-blur-sm",
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>

        {/* Services sub-strip — only on services-related views for context */}
        {(current === "services" ||
          current === "structural-engineering" ||
          current === "mep-engineering") && (
          <div className="hidden border-t border-border bg-bone/40 lg:block">
            <Container className="flex items-center gap-8 py-2.5">
              <span className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
                Disciplines
              </span>
              {services.map((s) => {
                const active = current === s.slug;
                return (
                  <button
                    key={s.slug}
                    onClick={() => handleNav(s.slug)}
                    className={cn(
                      "flex items-center gap-2 font-mono-tight text-[11px] uppercase tracking-[0.18em] transition-colors",
                      active ? "text-foreground" : "text-steel hover:text-foreground",
                    )}
                  >
                    <span className="number-tabular opacity-70">{s.index}</span>
                    {s.title}
                  </button>
                );
              })}
            </Container>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <Container className="flex h-20 items-center justify-between">
              <img
                src="/images/probitas-logo.png"
                alt="Probitas logo"
                className="h-8 object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center border border-border bg-bone/60"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </Container>
            <Container className="mt-6 flex flex-col gap-1">
              <div className="mb-4 font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
                Navigation
              </div>
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  onClick={() => handleNav(item.id)}
                  className="flex items-baseline justify-between border-b border-border py-4 text-left"
                >
                  <span className="font-display text-2xl font-medium tracking-tight">
                    {item.label}
                  </span>
                  <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em] text-steel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.button>
              ))}
            </Container>
            <Container className="mt-8">
              <div className="mb-4 font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
                Disciplines
              </div>
              <div className="grid grid-cols-1 gap-1">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => handleNav(s.slug)}
                    className="flex items-baseline gap-3 border-b border-border py-3 text-left"
                  >
                    <span className="font-mono-tight text-[11px] text-steel">
                      {s.index}
                    </span>
                    <span className="font-display text-lg font-medium">
                      {s.title}
                    </span>
                  </button>
                ))}
              </div>
            </Container>
            <Container className="mt-10">
              <button
                onClick={() => handleNav("contact")}
                className="flex w-full items-center justify-between bg-foreground px-5 py-4 text-bone"
              >
                <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                  {company.primaryCta}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
