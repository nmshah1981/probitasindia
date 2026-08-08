"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { Hero } from "@/components/sections/hero";
import {
  IntroductionSection,
  CoreServicesSection,
  StructuralFeatureSection,
  MepFeatureSection,
  CtaBand,
} from "@/components/sections/home-sections";

export function HomeView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <IntroductionSection />
      <CoreServicesSection onNavigate={onNavigate} />
      <StructuralFeatureSection onNavigate={onNavigate} />
      <MepFeatureSection onNavigate={onNavigate} />
      <CtaBand
        onNavigate={onNavigate}
        title="Have a project in mind?"
        body="Tell us about your project — location, scope, services required and any key milestones. We respond to every enquiry and route your brief to the right team."
        ctaLabel="Discuss a Project"
        view="contact"
      />
    </>
  );
}
