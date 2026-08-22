"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { navItems, type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "./primitives";

type NavProps = {
  current: ViewId;
  onNavigate: (id: ViewId) => void;
};

export function SiteHeader({ current, onNavigate }: NavProps) {
  const { data } = useContent();
  const { company, services } = data;
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
  };

  const isHeroView = current === "home" && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-md shadow-2xs"
            : "border-b border-border/50 bg-background/80 backdrop-blur-md",
        )}
      >
        <Container
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16 md:h-18" : "h-20 md:h-22",
          )}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="group flex items-center transition-opacity hover:opacity-90"
            aria-label="Probitas Home"
          >
            <span className="inline-flex items-center justify-center transition-all duration-300">
              <img
                src="/images/probitas-logo.png"
                alt="Probitas logo"
                className={cn(
                  "object-contain transition-all duration-300",
                  scrolled ? "h-9 md:h-[43px]" : "h-10 md:h-[46px]",
                )}
              />
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
            {navItems.map((item) => {
              const active = current === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={cn(
                    "relative px-3.5 py-2 font-mono-tight text-[11px] uppercase tracking-[0.2em] transition-colors",
                    active
                      ? "text-foreground font-medium"
                      : "text-steel hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-x-2.5 -bottom-0.5 h-[1.5px] bg-accent-brand"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center border transition-colors lg:hidden",
                isHeroView
                  ? "border-bone/35 bg-bone/10 text-bone backdrop-blur-sm"
                  : "border-border bg-bone/80 text-foreground",
              )}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>

        {/* Disciplines secondary quick strip for Services / Structural / MEP */}
        {(current === "services" ||
          current === "structural-engineering" ||
          current === "mep-engineering") && (
          <div className="hidden border-t border-border bg-bone-light/95 backdrop-blur-xs lg:block">
            <Container className="flex items-center gap-8 py-2.5">
              <span className="font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel">
                Disciplines Directory
              </span>
              <div className="flex items-center gap-6">
                {services.map((s) => {
                  const active = current === s.slug;
                  return (
                    <button
                      key={s.slug}
                      onClick={() => handleNav(s.slug)}
                      className={cn(
                        "flex items-center gap-2 font-mono-tight text-[11px] uppercase tracking-[0.2em] transition-colors",
                        active
                          ? "text-accent-brand font-medium"
                          : "text-steel hover:text-foreground",
                      )}
                    >
                      <span className="number-tabular opacity-75">{s.index}</span>
                      <span>{s.title}</span>
                    </button>
                  );
                })}
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-background overflow-y-auto"
          >
            <Container className="flex h-20 items-center justify-between border-b border-border">
              <img
                src="/images/probitas-logo.png"
                alt="Probitas logo"
                className="h-9 object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center border border-border bg-bone/80 text-foreground"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </Container>

            <Container className="py-8 flex-1 flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <div className="mb-3 font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel">
                  Site Directory
                </div>
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                    onClick={() => handleNav(item.id)}
                    className="flex items-baseline justify-between border-b border-border/80 py-3.5 text-left transition-colors hover:text-accent-brand"
                  >
                    <span className="font-display text-2xl font-medium tracking-tight">
                      {item.label}
                    </span>
                    <span className="font-mono-tight text-[11px] uppercase tracking-[0.2em] text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Disciplines in mobile drawer */}
              <div className="mt-8 border-t border-border pt-6">
                <div className="mb-3 font-mono-tight text-[10px] uppercase tracking-[0.24em] text-steel">
                  Engineering Divisions
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => handleNav(s.slug)}
                      className="flex items-center justify-between border border-border bg-bone p-3.5 text-left"
                    >
                      <span className="font-display text-base font-medium">{s.title}</span>
                      <span className="font-mono-tight text-xs text-steel number-tabular">{s.index}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact info in mobile drawer */}
              <div className="mt-8 border-t border-border pt-6 text-xs text-steel space-y-1">
                <div className="font-mono-tight uppercase tracking-[0.2em] text-foreground">{company.name}</div>
                <div>{company.email}</div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
