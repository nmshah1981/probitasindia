/**
 * Centralized site content store.
 *
 * ALL substantive company content lives here as editable placeholders.
 * The owner replaces these values without touching component code.
 *
 * Rule: never invent facts. If a value is missing, leave the placeholder text
 * "[OWNER TO PROVIDE]" exactly so it remains visually identifiable.
 */

export type ServiceSlug =
  | "structural-design"
  | "mep-design"
  | "structural-peer-review"
  | "mep-peer-review";

export type ServiceSummary = {
  slug: ServiceSlug;
  index: string; // "01", "02"...
  title: string;
  shortDescription: string;
  longDescription: string; // owner-provided
  heroImage?: string;
};

export type ProjectRecord = {
  id: string;
  name: string;
  location: string;
  projectType: string;
  client?: string;
  scope: string;
  year?: string;
  image?: string;
  description: string;
};

export type TeamMember = {
  id: string;
  name: string;
  position: string;
  qualification?: string;
  registration?: string;
  experience?: string;
  expertise?: string[];
  bio: string;
  photo?: string;
};

export type NavItem = {
  id: ViewId;
  label: string;
};

export type ViewId =
  | "home"
  | "services"
  | "structural-design"
  | "mep-design"
  | "structural-peer-review"
  | "mep-peer-review"
  | "projects"
  | "project-detail"
  | "about"
  | "team"
  | "contact"
  | "insights";

export const company = {
  name: "[BUSINESS NAME]",
  tagline:
    "[COMPANY TAGLINE — OWNER TO PROVIDE]",
  shortDescription:
    "[SHORT COMPANY DESCRIPTION — OWNER TO PROVIDE]",
  longDescription:
    "[COMPANY INTRODUCTION — OWNER TO PROVIDE]",
  email: "[EMAIL ADDRESS — OWNER TO PROVIDE]",
  phone: "[PHONE NUMBER — OWNER TO PROVIDE]",
  address: "[OFFICE ADDRESS — OWNER TO PROVIDE]",
  heroHeadline: "[HERO HEADLINE — OWNER TO PROVIDE]",
  heroSupporting: "[HERO SUPPORTING STATEMENT — OWNER TO PROVIDE]",
  primaryCta: "Discuss a Project",
  secondaryCta: "Our Services",
  introductionHeading: "[COMPANY INTRODUCTION HEADING — OWNER TO PROVIDE]",
  introductionBody:
    "[COMPANY INTRODUCTION — OWNER TO PROVIDE: A short, powerful description of the consultancy, its engineering scope and how it works with clients. Keep to roughly 2–3 paragraphs.]",
};

export const hero = {
  image: "/images/hero-structural-frame.png",
  alt: "[HERO IMAGE ALT TEXT — OWNER TO PROVIDE]",
};

export const services: ServiceSummary[] = [
  {
    slug: "structural-design",
    index: "01",
    title: "Structural Design",
    shortDescription:
      "[STRUCTURAL DESIGN SHORT DESCRIPTION — OWNER TO PROVIDE]",
    longDescription:
      "[STRUCTURAL DESIGN DESCRIPTION — OWNER TO PROVIDE]",
    heroImage: "/images/structural-feature.png",
  },
  {
    slug: "mep-design",
    index: "02",
    title: "MEP Design",
    shortDescription:
      "[MEP DESIGN SHORT DESCRIPTION — OWNER TO PROVIDE]",
    longDescription:
      "[MEP DESIGN DESCRIPTION — OWNER TO PROVIDE]",
    heroImage: "/images/mep-feature.png",
  },
  {
    slug: "structural-peer-review",
    index: "03",
    title: "Structural Design Peer Review",
    shortDescription:
      "[STRUCTURAL PEER REVIEW SHORT DESCRIPTION — OWNER TO PROVIDE]",
    longDescription:
      "[STRUCTURAL PEER REVIEW DESCRIPTION — OWNER TO PROVIDE]",
    heroImage: "/images/peer-review-detail.png",
  },
  {
    slug: "mep-peer-review",
    index: "04",
    title: "MEP Design Peer Review",
    shortDescription:
      "[MEP PEER REVIEW SHORT DESCRIPTION — OWNER TO PROVIDE]",
    longDescription:
      "[MEP PEER REVIEW DESCRIPTION — OWNER TO PROVIDE]",
    heroImage: "/images/peer-review-detail.png",
  },
];

export const peerReview = {
  headline: "[PEER REVIEW HEADLINE — OWNER TO PROVIDE]",
  description:
    "[PEER REVIEW DESCRIPTION — OWNER TO PROVIDE: Explain the value of independent technical review without making unsupported claims about error rates or guarantees.]",
  structural: {
    title: "Structural Peer Review",
    body:
      "[STRUCTURAL PEER REVIEW DETAIL — OWNER TO PROVIDE]",
  },
  mep: {
    title: "MEP Peer Review",
    body:
      "[MEP PEER REVIEW DETAIL — OWNER TO PROVIDE]",
  },
};

// Projects — empty by default until owner supplies real entries.
export const projects: ProjectRecord[] = [];

export const team: TeamMember[] = [];

export const about = {
  story:
    "[COMPANY STORY — OWNER TO PROVIDE]",
  founding:
    "[FOUNDING STORY — OWNER TO PROVIDE]",
  leadership:
    "[LEADERSHIP MESSAGE — OWNER TO PROVIDE]",
  philosophy:
    "[ENGINEERING PHILOSOPHY — OWNER TO PROVIDE]",
  mission:
    "[MISSION — OWNER TO PROVIDE]",
  values:
    "[VALUES — OWNER TO PROVIDE]",
  qualifications:
    "[QUALIFICATIONS — OWNER TO PROVIDE]",
};

// Editable nav structure — owner can rename labels after final IA is set.
export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

// SEO editable placeholders per top-level view
export const seo: Record<string, { title: string; description: string }> = {
  home: {
    title: "[PAGE TITLE — OWNER TO PROVIDE]",
    description: "[META DESCRIPTION — OWNER TO PROVIDE]",
  },
  services: {
    title: "[SERVICES PAGE TITLE — OWNER TO PROVIDE]",
    description: "[SERVICES META DESCRIPTION — OWNER TO PROVIDE]",
  },
  "structural-design": {
    title: "[STRUCTURAL DESIGN PAGE TITLE — OWNER TO PROVIDE]",
    description: "[STRUCTURAL DESIGN META DESCRIPTION — OWNER TO PROVIDE]",
  },
  "mep-design": {
    title: "[MEP DESIGN PAGE TITLE — OWNER TO PROVIDE]",
    description: "[MEP DESIGN META DESCRIPTION — OWNER TO PROVIDE]",
  },
  "structural-peer-review": {
    title: "[STRUCTURAL PEER REVIEW PAGE TITLE — OWNER TO PROVIDE]",
    description:
      "[STRUCTURAL PEER REVIEW META DESCRIPTION — OWNER TO PROVIDE]",
  },
  "mep-peer-review": {
    title: "[MEP PEER REVIEW PAGE TITLE — OWNER TO PROVIDE]",
    description: "[MEP PEER REVIEW META DESCRIPTION — OWNER TO PROVIDE]",
  },
  projects: {
    title: "[PROJECTS PAGE TITLE — OWNER TO PROVIDE]",
    description: "[PROJECTS META DESCRIPTION — OWNER TO PROVIDE]",
  },
  about: {
    title: "[ABOUT PAGE TITLE — OWNER TO PROVIDE]",
    description: "[ABOUT META DESCRIPTION — OWNER TO PROVIDE]",
  },
  team: {
    title: "[TEAM PAGE TITLE — OWNER TO PROVIDE]",
    description: "[TEAM META DESCRIPTION — OWNER TO PROVIDE]",
  },
  contact: {
    title: "[CONTACT PAGE TITLE — OWNER TO PROVIDE]",
    description: "[CONTACT META DESCRIPTION — OWNER TO PROVIDE]",
  },
  insights: {
    title: "[INSIGHTS PAGE TITLE — OWNER TO PROVIDE]",
    description: "[INSIGHTS META DESCRIPTION — OWNER TO PROVIDE]",
  },
};
