"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { Hero } from "@/components/sections/hero";
import {
  IntroductionSection,
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
    </>
  );
}