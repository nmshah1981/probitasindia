/**
 * Re-export types and defaults from site-defaults.ts for backward compatibility.
 *
 * Components that need LIVE content (editable via the admin page) should use
 * the `useContent()` hook from @/lib/content-provider instead of importing
 * these static values directly.
 */

export {
  getDefaultSiteData,
  type SiteData,
  type Discipline,
  type DivisionService,
  type ServiceSlug,
  type ProjectRecord,
  type TeamMember,
} from "@/lib/site-defaults";

// Re-export types that other files depend on
export type ViewId =
  | "home"
  | "about"
  | "team"
  | "services"
  | "structural-engineering"
  | "mep-engineering"
  | "projects"
  | "project-detail"
  | "contact"
  | "admin";

export type NavItem = {
  id: ViewId;
  label: string;
};

// Static defaults for SSR / initial render.
// The ContentProvider overrides these with live data from the API on mount.
import { getDefaultSiteData } from "@/lib/site-defaults";
const _defaults = getDefaultSiteData();

export const company = _defaults.company;
export const hero = _defaults.hero;
export const services = _defaults.services;
export const projects = _defaults.projects;
export const team = _defaults.team;
export const about = _defaults.about;
export const seo = _defaults.seo;

// Nav structure is fixed (not editable via admin).
export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "team", label: "Team" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
