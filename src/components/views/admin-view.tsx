"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { type SiteData, type ProjectRecord, type TeamMember } from "@/lib/site-defaults";
import { Container, Eyebrow, DisplayHeading } from "@/components/site/primitives";
import { ArrowLeft, Save, Upload, Lock, Check, Plus, Trash2 } from "lucide-react";

const ADMIN_PASSWORD_DEFAULT = "probitas2025";

export function AdminView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data, refresh } = useContent();
  const [authenticated, setAuthenticated] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [authError, setAuthError] = React.useState("");

  // Working copy of the data being edited
  const [draft, setDraft] = React.useState<SiteData | null>(null);
  const [saving, setSaving] = React.useState(false);
  const [saveMsg, setSaveMsg] = React.useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [activeTab, setActiveTab] = React.useState<
    "company" | "hero" | "services" | "projects" | "team" | "about" | "seo"
  >("company");

  // ---- Auth ----
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const expected = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ADMIN_PASSWORD_DEFAULT;
    if (password === expected) {
      setAuthenticated(true);
      setDraft(data);
      setAuthError("");
    } else {
      setAuthError("Incorrect password. Please try again.");
    }
  };

  // ---- Save ----
  const handleSave = async () => {
    if (!draft) return;
    setSaving(true);
    setSaveMsg(null);
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ADMIN_PASSWORD_DEFAULT,
          data: draft,
        }),
      });
      if (res.ok) {
        await refresh();
        setSaveMsg({ type: "ok", text: "Content saved successfully." });
      } else {
        const err = await res.json();
        setSaveMsg({ type: "err", text: err.error || "Failed to save." });
      }
    } catch {
      setSaveMsg({ type: "err", text: "Network error — failed to save." });
    } finally {
      setSaving(false);
    }
  };

  // ---- Image upload ----
  const handleUpload = async (file: File, onPath: (path: string) => void) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("password", process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ADMIN_PASSWORD_DEFAULT);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (res.ok) {
        const json = await res.json();
        onPath(json.path);
        setSaveMsg({ type: "ok", text: `Image uploaded: ${json.path}` });
      } else {
        const err = await res.json();
        setSaveMsg({ type: "err", text: err.error || "Upload failed." });
      }
    } catch {
      setSaveMsg({ type: "err", text: "Network error — upload failed." });
    }
  };

  // ---- Login screen ----
  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink text-bone">
        <Container className="max-w-md">
          <div className="rounded-lg border border-bone/15 bg-bone/[0.03] p-8 md:p-10">
            <div className="flex items-center gap-3 text-bone/70">
              <Lock className="h-5 w-5" />
              <span className="font-mono-tight text-[11px] uppercase tracking-[0.22em]">
                Admin Access
              </span>
            </div>
            <h1 className="mt-6 font-display text-2xl font-medium tracking-tight text-bone md:text-3xl">
              Probitas Admin
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-bone/60">
              Enter your password to edit website content.
            </p>
            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border-b border-bone/20 bg-transparent pb-2 text-bone outline-none placeholder:text-bone/40 focus:border-bone"
                autoFocus
              />
              {authError && (
                <p className="text-sm text-red-400">{authError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-bone px-5 py-3 font-mono-tight text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-accent-brand hover:text-bone"
              >
                Login
              </button>
            </form>
            <button
              onClick={() => onNavigate("home")}
              className="mt-6 inline-flex items-center gap-2 font-mono-tight text-[10px] uppercase tracking-[0.22em] text-bone/50 transition-colors hover:text-bone"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to site
            </button>
          </div>
        </Container>
      </div>
    );
  }

  // ---- Editor screen ----
  if (!draft) return null;

  const tabs: { id: typeof activeTab; label: string }[] = [
    { id: "company", label: "Company" },
    { id: "hero", label: "Hero" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "team", label: "Team" },
    { id: "about", label: "About" },
    { id: "seo", label: "SEO" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate("home")}
              className="inline-flex items-center gap-2 font-mono-tight text-[11px] uppercase tracking-[0.18em] text-steel transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              View Site
            </button>
            <span className="h-4 w-px bg-border" />
            <span className="font-display text-sm font-semibold tracking-tight">
              Probitas Admin
            </span>
          </div>
          <div className="flex items-center gap-3">
            {saveMsg && (
              <span
                className={`font-mono-tight text-[10px] uppercase tracking-[0.18em] ${
                  saveMsg.type === "ok" ? "text-green-600" : "text-red-600"
                }`}
              >
                {saveMsg.text}
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 font-mono-tight text-[11px] uppercase tracking-[0.18em] text-bone transition-colors hover:bg-accent-brand disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
              <Save className="h-3.5 w-3.5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Tabs */}
      <div className="border-b border-border bg-bone/40">
        <Container className="flex items-center gap-1 overflow-x-auto py-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`whitespace-nowrap px-4 py-2 font-mono-tight text-[11px] uppercase tracking-[0.18em] transition-colors ${
                activeTab === t.id
                  ? "bg-foreground text-bone"
                  : "text-steel hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </Container>
      </div>

      {/* Editor body */}
      <Container className="py-10">
        {activeTab === "company" && (
          <CompanyEditor draft={draft} setDraft={setDraft} />
        )}
        {activeTab === "hero" && (
          <HeroEditor draft={draft} setDraft={setDraft} onUpload={handleUpload} />
        )}
        {activeTab === "services" && (
          <ServicesEditor draft={draft} setDraft={setDraft} onUpload={handleUpload} />
        )}
        {activeTab === "projects" && (
          <ProjectsEditor draft={draft} setDraft={setDraft} onUpload={handleUpload} />
        )}
        {activeTab === "team" && (
          <TeamEditor draft={draft} setDraft={setDraft} onUpload={handleUpload} />
        )}
        {activeTab === "about" && (
          <AboutEditor draft={draft} setDraft={setDraft} />
        )}
        {activeTab === "seo" && (
          <SeoEditor draft={draft} setDraft={setDraft} />
        )}
      </Container>
    </div>
  );
}

/* ============================================================ */
/* Shared field components                                       */
/* ============================================================ */

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="mt-1.5 w-full resize-y border border-border bg-bone px-3 py-2 text-sm text-foreground outline-none focus:border-accent-brand"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1.5 w-full border border-border bg-bone px-3 py-2 text-sm text-foreground outline-none focus:border-accent-brand"
        />
      )}
    </div>
  );
}

function ImageField({
  label,
  value,
  onChange,
  onUpload,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onUpload: (file: File, onPath: (path: string) => void) => void;
}) {
  const fileRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <label className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
        {label}
      </label>
      <div className="mt-1.5 flex items-center gap-3">
        {value && (
          <img
            src={value}
            alt={label}
            className="h-16 w-24 object-cover border border-border"
          />
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/images/example.png"
          className="flex-1 border border-border bg-bone px-3 py-2 text-sm text-foreground outline-none focus:border-accent-brand"
        />
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onUpload(f, onChange);
          }}
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="inline-flex items-center gap-1.5 border border-border bg-bone px-3 py-2 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel transition-colors hover:border-accent-brand hover:text-foreground"
        >
          <Upload className="h-3 w-3" />
          Upload
        </button>
      </div>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border bg-background p-6 md:p-8">
      <h3 className="mb-6 font-display text-lg font-medium tracking-tight">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

/* ============================================================ */
/* Company editor                                                */
/* ============================================================ */

function CompanyEditor({
  draft,
  setDraft,
}: {
  draft: SiteData;
  setDraft: React.Dispatch<React.SetStateAction<SiteData | null>>;
}) {
  const up = (key: keyof SiteData["company"], v: string) =>
    setDraft((d) => (d ? { ...d, company: { ...d.company, [key]: v } } : d));
  const c = draft.company;
  return (
    <div className="space-y-6">
      <Eyebrow index="01">Company</Eyebrow>
      <DisplayHeading as="h1" className="text-2xl md:text-3xl">
        Company Information
      </DisplayHeading>
      <SectionCard title="Identity">
        <Field label="Name" value={c.name} onChange={(v) => up("name", v)} />
        <Field label="Tagline" value={c.tagline} onChange={(v) => up("tagline", v)} />
        <Field label="Short Description" value={c.shortDescription} onChange={(v) => up("shortDescription", v)} textarea rows={2} />
        <Field label="Long Description" value={c.longDescription} onChange={(v) => up("longDescription", v)} textarea rows={4} />
      </SectionCard>
      <SectionCard title="Contact">
        <Field label="Email" value={c.email} onChange={(v) => up("email", v)} type="email" />
        <Field label="Phone" value={c.phone} onChange={(v) => up("phone", v)} />
        <Field label="Address" value={c.address} onChange={(v) => up("address", v)} textarea rows={2} />
      </SectionCard>
      <SectionCard title="Homepage Introduction">
        <Field label="Introduction Heading" value={c.introductionHeading} onChange={(v) => up("introductionHeading", v)} />
        <Field label="Introduction Body" value={c.introductionBody} onChange={(v) => up("introductionBody", v)} textarea rows={5} />
      </SectionCard>
    </div>
  );
}

/* ============================================================ */
/* Hero editor                                                   */
/* ============================================================ */

function HeroEditor({
  draft,
  setDraft,
  onUpload,
}: {
  draft: SiteData;
  setDraft: React.Dispatch<React.SetStateAction<SiteData | null>>;
  onUpload: (file: File, onPath: (path: string) => void) => void;
}) {
  const up = (key: keyof SiteData["company"], v: string) =>
    setDraft((d) => (d ? { ...d, company: { ...d.company, [key]: v } } : d));
  const upHero = (key: keyof SiteData["hero"], v: string) =>
    setDraft((d) => (d ? { ...d, hero: { ...d.hero, [key]: v } } : d));
  const c = draft.company;
  const h = draft.hero;
  return (
    <div className="space-y-6">
      <Eyebrow index="02">Hero</Eyebrow>
      <DisplayHeading as="h1" className="text-2xl md:text-3xl">
        Homepage Hero
      </DisplayHeading>
      <SectionCard title="Hero Content">
        <Field label="Hero Headline" value={c.heroHeadline} onChange={(v) => up("heroHeadline", v)} />
        <Field label="Hero Supporting Text" value={c.heroSupporting} onChange={(v) => up("heroSupporting", v)} textarea rows={3} />
        <Field label="Secondary CTA Label" value={c.secondaryCta} onChange={(v) => up("secondaryCta", v)} />
      </SectionCard>
      <SectionCard title="Hero Image">
        <ImageField label="Hero Image" value={h.image} onChange={(v) => upHero("image", v)} onUpload={onUpload} />
        <Field label="Hero Image Alt Text" value={h.alt} onChange={(v) => upHero("alt", v)} />
      </SectionCard>
    </div>
  );
}

/* ============================================================ */
/* Services editor                                               */
/* ============================================================ */

function ServicesEditor({
  draft,
  setDraft,
  onUpload,
}: {
  draft: SiteData;
  setDraft: React.Dispatch<React.SetStateAction<SiteData | null>>;
  onUpload: (file: File, onPath: (path: string) => void) => void;
}) {
  const updateDiscipline = (idx: number, key: string, v: string) =>
    setDraft((d) => {
      if (!d) return d;
      const newServices = [...d.services];
      newServices[idx] = { ...newServices[idx], [key]: v } as typeof newServices[idx];
      return { ...d, services: [newServices[0], newServices[1]] };
    });

  const updateService = (dIdx: number, sIdx: number, key: string, v: string) =>
    setDraft((d) => {
      if (!d) return d;
      const newServices = [...d.services];
      const disc = newServices[dIdx];
      const svcList = [...disc.services];
      svcList[sIdx] = { ...svcList[sIdx], [key]: v };
      newServices[dIdx] = { ...disc, services: [svcList[0], svcList[1]] };
      return { ...d, services: [newServices[0], newServices[1]] };
    });

  return (
    <div className="space-y-6">
      <Eyebrow index="03">Services</Eyebrow>
      <DisplayHeading as="h1" className="text-2xl md:text-3xl">
        Divisions &amp; Services
      </DisplayHeading>
      {draft.services.map((disc, dIdx) => (
        <div key={disc.slug} className="space-y-4">
          <SectionCard title={`Division ${disc.index} — ${disc.title}`}>
            <Field label="Title" value={disc.title} onChange={(v) => updateDiscipline(dIdx, "title", v)} />
            <Field label="Short Description" value={disc.shortDescription} onChange={(v) => updateDiscipline(dIdx, "shortDescription", v)} textarea rows={2} />
            <Field label="Long Description" value={disc.longDescription} onChange={(v) => updateDiscipline(dIdx, "longDescription", v)} textarea rows={4} />
            <ImageField label="Hero Image" value={disc.heroImage || ""} onChange={(v) => updateDiscipline(dIdx, "heroImage", v)} onUpload={onUpload} />
          </SectionCard>
          {disc.services.map((svc, sIdx) => (
            <SectionCard key={svc.id} title={`Service ${svc.index} — ${svc.title}`}>
              <Field label="Title" value={svc.title} onChange={(v) => updateService(dIdx, sIdx, "title", v)} />
              <Field label="Short Description" value={svc.shortDescription} onChange={(v) => updateService(dIdx, sIdx, "shortDescription", v)} textarea rows={2} />
              <Field label="Long Description" value={svc.longDescription} onChange={(v) => updateService(dIdx, sIdx, "longDescription", v)} textarea rows={4} />
              <ImageField label="Service Image" value={svc.heroImage || ""} onChange={(v) => updateService(dIdx, sIdx, "heroImage", v)} onUpload={onUpload} />
            </SectionCard>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ============================================================ */
/* Projects editor                                               */
/* ============================================================ */

function ProjectsEditor({
  draft,
  setDraft,
  onUpload,
}: {
  draft: SiteData;
  setDraft: React.Dispatch<React.SetStateAction<SiteData | null>>;
  onUpload: (file: File, onPath: (path: string) => void) => void;
}) {
  const updateProject = (idx: number, key: keyof ProjectRecord, v: string) =>
    setDraft((d) => {
      if (!d) return d;
      const projects = [...d.projects];
      projects[idx] = { ...projects[idx], [key]: v };
      return { ...d, projects };
    });

  const addProject = () =>
    setDraft((d) => {
      if (!d) return d;
      const newProject: ProjectRecord = {
        id: `project-${Date.now()}`,
        name: "New Project",
        location: "",
        projectType: "",
        scope: "",
        description: "",
      };
      return { ...d, projects: [...d.projects, newProject] };
    });

  const removeProject = (idx: number) =>
    setDraft((d) => {
      if (!d) return d;
      const projects = d.projects.filter((_, i) => i !== idx);
      return { ...d, projects };
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Eyebrow index="04">Projects</Eyebrow>
          <DisplayHeading as="h1" className="mt-4 text-2xl md:text-3xl">
            Projects ({draft.projects.length})
          </DisplayHeading>
        </div>
        <button
          onClick={addProject}
          className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:bg-accent-brand"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Project
        </button>
      </div>
      {draft.projects.map((p, idx) => (
        <div key={p.id} className="relative">
          <SectionCard title={`Project ${String(idx + 1).padStart(2, "0")} — ${p.name || "Untitled"}`}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Name" value={p.name} onChange={(v) => updateProject(idx, "name", v)} />
              <Field label="Location" value={p.location} onChange={(v) => updateProject(idx, "location", v)} />
              <Field label="Project Type" value={p.projectType} onChange={(v) => updateProject(idx, "projectType", v)} />
              <Field label="Client (optional)" value={p.client || ""} onChange={(v) => updateProject(idx, "client", v)} />
              <Field label="Scope" value={p.scope} onChange={(v) => updateProject(idx, "scope", v)} />
              <Field label="Year (optional)" value={p.year || ""} onChange={(v) => updateProject(idx, "year", v)} />
            </div>
            <Field label="Description" value={p.description} onChange={(v) => updateProject(idx, "description", v)} textarea rows={3} />
            <ImageField label="Project Image" value={p.image || ""} onChange={(v) => updateProject(idx, "image", v)} onUpload={onUpload} />
          </SectionCard>
          <button
            onClick={() => removeProject(idx)}
            className="absolute right-4 top-4 inline-flex items-center gap-1 text-red-500 transition-colors hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

/* ============================================================ */
/* Team editor                                                   */
/* ============================================================ */

function TeamEditor({
  draft,
  setDraft,
  onUpload,
}: {
  draft: SiteData;
  setDraft: React.Dispatch<React.SetStateAction<SiteData | null>>;
  onUpload: (file: File, onPath: (path: string) => void) => void;
}) {
  const updateMember = (idx: number, key: keyof TeamMember, v: string) =>
    setDraft((d) => {
      if (!d) return d;
      const team = [...d.team];
      team[idx] = { ...team[idx], [key]: v };
      return { ...d, team };
    });

  const updateExpertise = (idx: number, v: string) =>
    setDraft((d) => {
      if (!d) return d;
      const team = [...d.team];
      team[idx] = { ...team[idx], expertise: v.split("\n").filter(Boolean) };
      return { ...d, team };
    });

  const addMember = () =>
    setDraft((d) => {
      if (!d) return d;
      const newMember: TeamMember = {
        id: `member-${Date.now()}`,
        name: "New Member",
        position: "",
        bio: "",
      };
      return { ...d, team: [...d.team, newMember] };
    });

  const removeMember = (idx: number) =>
    setDraft((d) => {
      if (!d) return d;
      return { ...d, team: d.team.filter((_, i) => i !== idx) };
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Eyebrow index="05">Team</Eyebrow>
          <DisplayHeading as="h1" className="mt-4 text-2xl md:text-3xl">
            Team Members ({draft.team.length})
          </DisplayHeading>
        </div>
        <button
          onClick={addMember}
          className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 font-mono-tight text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:bg-accent-brand"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Member
        </button>
      </div>
      {draft.team.map((m, idx) => (
        <div key={m.id} className="relative">
          <SectionCard title={`Member ${String(idx + 1).padStart(2, "0")} — ${m.name || "Untitled"}`}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Name" value={m.name} onChange={(v) => updateMember(idx, "name", v)} />
              <Field label="Position" value={m.position} onChange={(v) => updateMember(idx, "position", v)} />
              <Field label="Qualification (optional)" value={m.qualification || ""} onChange={(v) => updateMember(idx, "qualification", v)} />
              <Field label="Registration (optional)" value={m.registration || ""} onChange={(v) => updateMember(idx, "registration", v)} />
              <Field label="Experience (optional)" value={m.experience || ""} onChange={(v) => updateMember(idx, "experience", v)} />
            </div>
            <Field
              label="Expertise (one per line)"
              value={(m.expertise || []).join("\n")}
              onChange={(v) => updateExpertise(idx, v)}
              textarea
              rows={4}
            />
            <Field label="Bio" value={m.bio} onChange={(v) => updateMember(idx, "bio", v)} textarea rows={5} />
            <ImageField label="Photo" value={m.photo || ""} onChange={(v) => updateMember(idx, "photo", v)} onUpload={onUpload} />
          </SectionCard>
          <button
            onClick={() => removeMember(idx)}
            className="absolute right-4 top-4 inline-flex items-center gap-1 text-red-500 transition-colors hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

/* ============================================================ */
/* About editor                                                  */
/* ============================================================ */

function AboutEditor({
  draft,
  setDraft,
}: {
  draft: SiteData;
  setDraft: React.Dispatch<React.SetStateAction<SiteData | null>>;
}) {
  const up = (key: keyof SiteData["about"], v: string) =>
    setDraft((d) => (d ? { ...d, about: { ...d.about, [key]: v } } : d));
  const a = draft.about;
  return (
    <div className="space-y-6">
      <Eyebrow index="06">About</Eyebrow>
      <DisplayHeading as="h1" className="text-2xl md:text-3xl">
        About Page Content
      </DisplayHeading>
      <SectionCard title="Company Story">
        <Field label="Story" value={a.story} onChange={(v) => up("story", v)} textarea rows={4} />
        <Field label="Founding" value={a.founding} onChange={(v) => up("founding", v)} textarea rows={3} />
        <Field label="Leadership Message" value={a.leadership} onChange={(v) => up("leadership", v)} textarea rows={3} />
      </SectionCard>
      <SectionCard title="Philosophy &amp; Mission">
        <Field label="Philosophy" value={a.philosophy} onChange={(v) => up("philosophy", v)} textarea rows={3} />
        <Field label="Mission" value={a.mission} onChange={(v) => up("mission", v)} textarea rows={2} />
        <Field label="Values" value={a.values} onChange={(v) => up("values", v)} textarea rows={3} />
      </SectionCard>
      <SectionCard title="Qualifications">
        <Field label="Qualifications / Credentials" value={a.qualifications} onChange={(v) => up("qualifications", v)} textarea rows={4} />
      </SectionCard>
    </div>
  );
}

/* ============================================================ */
/* SEO editor                                                    */
/* ============================================================ */

function SeoEditor({
  draft,
  setDraft,
}: {
  draft: SiteData;
  setDraft: React.Dispatch<React.SetStateAction<SiteData | null>>;
}) {
  const keys = Object.keys(draft.seo);
  const up = (key: string, field: "title" | "description", v: string) =>
    setDraft((d) => {
      if (!d) return d;
      return {
        ...d,
        seo: { ...d.seo, [key]: { ...d.seo[key], [field]: v } },
      };
    });
  return (
    <div className="space-y-6">
      <Eyebrow index="07">SEO</Eyebrow>
      <DisplayHeading as="h1" className="text-2xl md:text-3xl">
        SEO Metadata
      </DisplayHeading>
      {keys.map((key) => (
        <SectionCard key={key} title={`Page: ${key}`}>
          <Field
            label="Title"
            value={draft.seo[key].title}
            onChange={(v) => up(key, "title", v)}
          />
          <Field
            label="Description"
            value={draft.seo[key].description}
            onChange={(v) => up(key, "description", v)}
            textarea
            rows={2}
          />
        </SectionCard>
      ))}
    </div>
  );
}
