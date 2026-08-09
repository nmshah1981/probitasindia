"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { HomeView } from "@/components/views/home-view";
import { ServicesView } from "@/components/views/services-view";
import { StructuralEngineeringView } from "@/components/views/structural-engineering-view";
import { MepEngineeringView } from "@/components/views/mep-engineering-view";
import { ProjectsView, ProjectDetailView } from "@/components/views/projects-view";
import { AboutView } from "@/components/views/about-view";
import { TeamView } from "@/components/views/team-view";
import { ContactView } from "@/components/views/contact-view";
import { InsightsView } from "@/components/views/insights-view";
import { AdminView } from "@/components/views/admin-view";
import { ContentProvider, useContent } from "@/lib/content-provider";
import type { ViewId } from "@/lib/site-content";

type ViewState =
  | { view: Exclude<ViewId, "project-detail"> }
  | { view: "project-detail"; projectId?: string };

function AppContent() {
  const { data } = useContent();
  const [state, setState] = React.useState<ViewState>({ view: "home" });

  // Check URL hash on mount + hashchange — if #admin, show admin view
  React.useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined" && window.location.hash === "#admin") {
        setState({ view: "admin" });
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Scroll to top on view change
  const prevView = React.useRef(state.view);
  React.useEffect(() => {
    if (prevView.current !== state.view) {
      prevView.current = state.view;
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }
  }, [state.view]);

  const handleNavigate = (id: ViewId) => {
    setState({ view: id });
    if (typeof window !== "undefined" && id === "admin") {
      window.location.hash = "admin";
    }
  };

  const handleSelectProject = (id: string) => {
    setState({ view: "project-detail", projectId: id });
  };

  // Admin view is standalone — no header/footer
  if (state.view === "admin") {
    return <AdminView onNavigate={handleNavigate} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader current={state.view} onNavigate={handleNavigate} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={state.view + (state.view === "project-detail" ? state.projectId ?? "" : "")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {state.view === "home" && <HomeView onNavigate={handleNavigate} />}
            {state.view === "services" && (
              <ServicesView onNavigate={handleNavigate} />
            )}
            {state.view === "structural-engineering" && (
              <StructuralEngineeringView onNavigate={handleNavigate} />
            )}
            {state.view === "mep-engineering" && (
              <MepEngineeringView onNavigate={handleNavigate} />
            )}
            {state.view === "projects" && (
              <ProjectsView
                onNavigate={handleNavigate}
                onSelectProject={handleSelectProject}
              />
            )}
            {state.view === "project-detail" && (
              <ProjectDetailView
                project={
                  state.projectId
                    ? data.projects.find((p) => p.id === state.projectId)
                    : undefined
                }
                onNavigate={handleNavigate}
              />
            )}
            {state.view === "about" && <AboutView onNavigate={handleNavigate} />}
            {state.view === "team" && <TeamView onNavigate={handleNavigate} />}
            {state.view === "contact" && (
              <ContactView onNavigate={handleNavigate} />
            )}
            {state.view === "insights" && (
              <InsightsView onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <SiteFooter onNavigate={handleNavigate} />
    </div>
  );
}

export default function Page() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}
