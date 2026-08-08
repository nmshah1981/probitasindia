"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { Hero } from "@/components/sections/hero";
import {
  IntroductionSection,
  CoreServicesSection,
  StructuralFeatureSection,
  MepFeatureSection,
  PeerReviewSection,
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
      <PeerReviewSection onNavigate={onNavigate} />
      <CtaBand
        onNavigate={onNavigate}
        title="Have a project in mind?"
        body="[CTA BODY — OWNER TO PROVIDE: A short invitation to start a conversation about an upcoming structural, MEP or peer review commission.]"
        ctaLabel="Discuss a Project"
        view="contact"
      />
    </>
  );
}
