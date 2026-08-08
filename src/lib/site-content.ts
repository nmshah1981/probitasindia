/**
 * Centralized site content store.
 *
 * ALL substantive company content lives here as editable placeholders.
 * The owner replaces these values without touching component code.
 *
 * Rule: never invent facts. If a value is missing, leave the placeholder text
 * "[OWNER TO PROVIDE]" exactly so it remains visually identifiable.
 *
 * Discipline model: TWO divisions — Structural Engineering and MEP
 * Engineering. Each division offers TWO services: Design and Independent
 * Peer Review.
 */

export type ServiceSlug =
  | "structural-engineering"
  | "mep-engineering";

/** A service offered by a division (Design or Peer Review). */
export type DivisionService = {
  /** Stable id used to scroll to / open this service within a division page. */
  id: "design" | "peer-review";
  /** Editorial index shown beside the service title — "01", "02". */
  index: string;
  /** Service title, e.g. "Structural Design" / "Structural Peer Review". */
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage?: string;
};

export type Discipline = {
  slug: ServiceSlug;
  /** Top-level index shown in nav strips and headers — "01", "02". */
  index: string;
  /** Division name, e.g. "Structural Engineering". */
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage?: string;
  /** The two services offered by this division — always Design + Peer Review. */
  services: [DivisionService, DivisionService];
};

/**
 * Back-compat alias — components still import `ServiceSummary`, but the
 * underlying shape is now `Discipline`.
 */
export type ServiceSummary = Discipline;

/** Back-compat alias for the per-service block shape. */
export type PeerReviewBlock = DivisionService;

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
  | "structural-engineering"
  | "mep-engineering"
  | "projects"
  | "project-detail"
  | "about"
  | "team"
  | "contact"
  | "insights";

export const company = {
  name: "[BUSINESS NAME]",
  tagline: "[COMPANY TAGLINE — OWNER TO PROVIDE]",
  shortDescription: "[SHORT COMPANY DESCRIPTION — OWNER TO PROVIDE]",
  longDescription: "[COMPANY INTRODUCTION — OWNER TO PROVIDE]",
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

export const services: Discipline[] = [
  {
    slug: "structural-engineering",
    index: "01",
    title: "Structural Engineering",
    shortDescription:
      "[STRUCTURAL ENGINEERING SHORT DESCRIPTION — OWNER TO PROVIDE]",
    longDescription:
      "[STRUCTURAL ENGINEERING DESCRIPTION — OWNER TO PROVIDE: Cover the full scope of the structural engineering division — design, documentation, construction support, and independent peer review — without making unsupported claims.]",
    heroImage: "/images/structural-feature.png",
    services: [
      {
        id: "design",
        index: "01",
        title: "Structural Design",
        shortDescription:
          "[STRUCTURAL DESIGN SHORT DESCRIPTION — OWNER TO PROVIDE]",
        longDescription:
          "[STRUCTURAL DESIGN DESCRIPTION — OWNER TO PROVIDE: Describe the firm's structural design service — concept, analysis, documentation, and construction support — without making unsupported claims.]",
        heroImage: "/images/structural-feature.png",
      },
      {
        id: "peer-review",
        index: "02",
        title: "Structural Peer Review",
        shortDescription:
          "[STRUCTURAL PEER REVIEW SHORT DESCRIPTION — OWNER TO PROVIDE]",
        longDescription:
          "[STRUCTURAL PEER REVIEW DESCRIPTION — OWNER TO PROVIDE: Explain the value of independent structural review without making unsupported claims about error rates or guarantees.]",
        heroImage: "/images/peer-review-detail.png",
      },
    ],
  },
  {
    slug: "mep-engineering",
    index: "02",
    title: "MEP Engineering",
    shortDescription:
      "[MEP ENGINEERING SHORT DESCRIPTION — OWNER TO PROVIDE]",
    longDescription:
      "[MEP ENGINEERING DESCRIPTION — OWNER TO PROVIDE: Cover the full scope of the MEP engineering division — design, documentation, construction support, and independent peer review — without making unsupported claims.]",
    heroImage: "/images/mep-feature.png",
    services: [
      {
        id: "design",
        index: "01",
        title: "MEP Design",
        shortDescription:
          "[MEP DESIGN SHORT DESCRIPTION — OWNER TO PROVIDE]",
        longDescription:
          "[MEP DESIGN DESCRIPTION — OWNER TO PROVIDE: Describe the firm's MEP design service — concept, coordination, documentation, and construction support — without making unsupported claims.]",
        heroImage: "/images/mep-feature.png",
      },
      {
        id: "peer-review",
        index: "02",
        title: "MEP Peer Review",
        shortDescription:
          "[MEP PEER REVIEW SHORT DESCRIPTION — OWNER TO PROVIDE]",
        longDescription:
          "[MEP PEER REVIEW DESCRIPTION — OWNER TO PROVIDE: Explain the value of independent MEP review without making unsupported claims about error rates or guarantees.]",
        heroImage: "/images/peer-review-detail.png",
      },
    ],
  },
];

/**
 * Flattened list of all four services across both divisions — useful for
 * the Services overview page and the contact form select options.
 * Shape: { division, divisionIndex, serviceIndex, serviceId, serviceTitle }.
 */
export type FlatService = {
  division: ServiceSlug;
  divisionTitle: string;
  divisionIndex: string;
  serviceId: "design" | "peer-review";
  serviceIndex: string;
  serviceTitle: string;
  shortDescription: string;
};

export const flatServices: FlatService[] = services.flatMap((d) =>
  d.services.map((s) => ({
    division: d.slug,
    divisionTitle: d.title,
    divisionIndex: d.index,
    serviceId: s.id,
    serviceIndex: s.index,
    serviceTitle: s.title,
    shortDescription: s.shortDescription,
  })),
);

// Projects — empty by default until owner supplies real entries.
export const projects: ProjectRecord[] = [];

export const team: TeamMember[] = [];

export const about = {
  story: "[COMPANY STORY — OWNER TO PROVIDE]",
  founding: "[FOUNDING STORY — OWNER TO PROVIDE]",
  leadership: "[LEADERSHIP MESSAGE — OWNER TO PROVIDE]",
  philosophy: "[ENGINEERING PHILOSOPHY — OWNER TO PROVIDE]",
  mission: "[MISSION — OWNER TO PROVIDE]",
  values: "[VALUES — OWNER TO PROVIDE]",
  qualifications: "[QUALIFICATIONS — OWNER TO PROVIDE]",
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
  "structural-engineering": {
    title: "[STRUCTURAL ENGINEERING PAGE TITLE — OWNER TO PROVIDE]",
    description: "[STRUCTURAL ENGINEERING META DESCRIPTION — OWNER TO PROVIDE]",
  },
  "mep-engineering": {
    title: "[MEP ENGINEERING PAGE TITLE — OWNER TO PROVIDE]",
    description: "[MEP ENGINEERING META DESCRIPTION — OWNER TO PROVIDE]",
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
