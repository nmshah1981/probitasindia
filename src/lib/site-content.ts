/**
 * Centralized site content store for PROBITAS.
 *
 * All company content is sourced from the owner-supplied company profile
 * (Probitas Profile2.pptx). No facts have been invented — every value below
 * is taken directly from the supplied company profile.
 *
 * Discipline model: TWO divisions — Structural Engineering and MEP
 * Engineering. Each division offers TWO services: Design and Independent
 * Peer Review.
 *
 * NOTE: The supplied profile is heavily structural-engineering focused.
 * MEP Engineering content remains as owner-editable placeholders until the
 * owner confirms the MEP scope.
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

/** Back-compat alias. */
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
  name: "Probitas",
  tagline: "Where Excellence Meets Integrity",
  shortDescription:
    "A passionate team of highly skilled structural engineers delivering innovative and value-led solutions across India.",
  longDescription:
    "Probitas was created to bridge the gap between the evolving needs of the construction industry and the current consultancy services available. We apply scientific and engineering principles to solve complex problems and provide solutions that meet — and where possible exceed — clients' expectations.",
  email: "niravmshah@probitasindia.com",
  phone: "+91 98198 29490",
  address:
    "D-102, Fortune Lifestyle Royale, Vapi-Daman Road, Chala, Vapi 396191, India",
  heroHeadline: "Where Excellence Meets Integrity.",
  heroSupporting:
    "A passionate team of highly skilled structural engineers delivering innovative and value-led solutions — bridging the gap between the evolving needs of the construction industry and current consultancy services.",
  primaryCta: "Discuss a Project",
  secondaryCta: "Our Services",
  introductionHeading: "Engineering with integrity.",
  introductionBody:
    "Probitas was created to bridge the gap between the evolving needs of the construction industry and the current consultancy services available. Our clients consistently recognise us for our agility, collaboration and commitment to excellence. We apply scientific and engineering principles to solve complex problems and provide solutions that meet — and where possible exceed — clients' expectations.",
};

export const hero = {
  image: "/images/hero-structural-frame.png",
  alt: "Exposed structural steel frame of a modern building at dusk",
};

export const services: Discipline[] = [
  {
    slug: "structural-engineering",
    index: "01",
    title: "Structural Engineering",
    shortDescription:
      "Innovative, value-led structural design and independent peer review across RCC and steel, for projects ranging from complex airports and hangars to high-rise residential and commercial towers.",
    longDescription:
      "Probitas brings deep expertise in RCC and steel structural design across highly complex large-scale projects — airports, hangars, engine test cells, transit-oriented developments — as well as high-rise residential and commercial buildings up to G+72. Our team has delivered projects across most geographies in India, with a track record in design, peer review, value engineering and constructability solutions. We balance architectural intent, structural performance, economy and constructability across every commission.",
    heroImage: "/images/structural-feature.png",
    services: [
      {
        id: "design",
        index: "01",
        title: "Structural Design",
        shortDescription:
          "Concept-to-construction structural design for RCC and steel buildings, from high-rise towers to complex industrial and infrastructure projects.",
        longDescription:
          "Our Structural Design service covers concept design, detailed analysis, member design, documentation and construction support across RCC and steel structures. We have delivered landmark commissions including India's largest MRO hangar, the country's largest transit-oriented development, Mumbai International Airport's reconstruction, and high-rise residential towers up to G+72. Each project balances architectural intent, structural performance, economy and constructability — coordinated with architecture, MEP and construction teams from concept through completion.",
        heroImage: "/images/structural-feature.png",
      },
      {
        id: "peer-review",
        index: "02",
        title: "Structural Peer Review",
        shortDescription:
          "Independent technical review of structural designs — verifying load paths, analysis assumptions, member design, detailing and code compliance without making unsupported claims.",
        longDescription:
          "Our Structural Peer Review service provides independent technical scrutiny of structural designs prepared by others. We verify design basis, load assumptions, structural systems, analysis models, member design, detailing, drawings and code compliance — and deliver a consolidated review report with findings and recommendations. Our review portfolio includes landmark residential and commercial towers across India, with value engineering carried out on towers up to G+62. We make no claims about error rates or guarantees — peer review is independent engineering judgement, applied with rigour.",
        heroImage: "/images/peer-review-detail.png",
      },
    ],
  },
  {
    slug: "mep-engineering",
    index: "02",
    title: "MEP Engineering",
    shortDescription:
      "[MEP ENGINEERING SHORT DESCRIPTION — OWNER TO PROVIDE: The supplied company profile is structural-focused; confirm MEP scope with the owner.]",
    longDescription:
      "[MEP ENGINEERING DESCRIPTION — OWNER TO PROVIDE: The supplied company profile is structural-focused. If Probitas offers MEP engineering, replace this placeholder with the owner-approved description of the MEP division — scope, systems, coordination approach, and how design and independent peer review are delivered. If MEP is not offered, this division can be removed.]",
    heroImage: "/images/mep-feature.png",
    services: [
      {
        id: "design",
        index: "01",
        title: "MEP Design",
        shortDescription:
          "[MEP DESIGN SHORT DESCRIPTION — OWNER TO PROVIDE]",
        longDescription:
          "[MEP DESIGN DESCRIPTION — OWNER TO PROVIDE: Confirm with the owner whether Probitas offers MEP design, and replace this placeholder with the owner-approved description of the MEP design service.]",
        heroImage: "/images/mep-feature.png",
      },
      {
        id: "peer-review",
        index: "02",
        title: "MEP Peer Review",
        shortDescription:
          "[MEP PEER REVIEW SHORT DESCRIPTION — OWNER TO PROVIDE]",
        longDescription:
          "[MEP PEER REVIEW DESCRIPTION — OWNER TO PROVIDE: Confirm with the owner whether Probitas offers independent MEP peer review, and replace this placeholder with the owner-approved description.]",
        heroImage: "/images/peer-review-detail.png",
      },
    ],
  },
];

/**
 * Flattened list of all four services across both divisions — useful for
 * the Services overview page and the contact form select options.
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

/**
 * Projects — sourced directly from the supplied company profile.
 *
 * These are projects the leadership team has executed during their
 * professional journey (per the profile). Each entry preserves the
 * project name, location, type, scope and description verbatim from
 * the source. Years are not specified in the profile and are omitted.
 */
export const projects: ProjectRecord[] = [
  // === DESIGN PROJECTS — Commercial & Infrastructure ===
  {
    id: "lti-mahape",
    name: "LTI Mahape",
    location: "Mahape, Navi Mumbai, India",
    projectType: "Commercial — Design & Build",
    client: "Larsen & Toubro Ltd.",
    scope: "Structural Design",
    image: "/images/project-lti-mindtree.jpeg",
    description:
      "A 13.72 lakh sq.ft. commercial tower with 2B + 3S + 12 floors, delivered as a design-and-build project by L&T. The structure used a complete structural steel beam-column system with structural steel cores.",
  },
  {
    id: "air-india-engine-test-cell",
    name: "Air India Engine Test Cell Facility",
    location: "Nagpur, India",
    projectType: "Industrial — Engine Test Cell",
    client: "CENCO — Safran Group",
    scope: "Structural Design",
    description:
      "A facility capable of testing GE90-115B engines initially, with GEnx capability in the future. The project included an extremely complex concrete test cell structure where aircraft engine blast loads are anticipated, together with related ancillary buildings.",
  },
  {
    id: "air-india-mro-hangar",
    name: "Air India MRO Hangar",
    location: "Nagpur, India",
    projectType: "Aviation — MRO Hangar",
    client: "Boeing",
    scope: "Structural Design",
    image: "/images/project-air-india-mro.jpeg",
    description:
      "The largest MRO facility in India at the time of delivery — a 200 m wide structural steel aircraft hangar with related ancillary buildings, capable of servicing the largest aircraft including the Airbus A380 and Boeing 777 & 747.",
  },
  {
    id: "seawoods-grand-central",
    name: "Seawoods Grand Central",
    location: "Navi Mumbai, India",
    projectType: "Transit-Oriented Development",
    client: "L&T",
    scope: "Structural Design",
    image: "/images/project-seawoods-central.jpeg",
    description:
      "India's largest transit-oriented development (TOD), including the redevelopment of a railway station together with a commercial building, retail facility, utility buildings and ancillary structures.",
  },
  {
    id: "mumbai-international-airport",
    name: "Mumbai International Airport (MIAL)",
    location: "Mumbai, India",
    projectType: "Aviation — Airport Reconstruction",
    scope: "Structural Design — Design & Build",
    image: "/images/project-mumbai-airport.jpeg",
    description:
      "A complete design-and-build project for the reconstruction of Mumbai Airport. Scope included the terminal building, related ancillary buildings, and air-side works including roads, runways, taxiways, aprons and other associated works.",
  },
  // === DESIGN PROJECTS — Commercial & Temple ===
  {
    id: "surat-municipal-corporation",
    name: "Surat Municipal Corporation (SMC)",
    location: "Surat, Gujarat, India",
    projectType: "Civic — Municipal Headquarters",
    scope: "Structural Design",
    image: "/images/project-surat-municipal.jpg",
    description:
      "Two towers, each with 4B + G + 6P + 28 floors — the tallest municipal corporation building in India. Pure eccentric cores, designed for high cyclonic wind pressures (importance factor for cyclonic region k4 = 1.25).",
  },
  {
    id: "spr-india-market-of-india",
    name: "SPR India — Market of India",
    location: "India",
    projectType: "Commercial — Wholesale & Retail Mall",
    client: "SPR India",
    scope: "Structural Design",
    description:
      "A mall with 2B + G + 10 floors — India's largest wholesale and retail market, accommodating 5,000+ shops and offices.",
  },
  {
    id: "wynn-al-marjan-island",
    name: "Wynn Al Marjan Island",
    location: "Ras Al Khaimah, UAE",
    projectType: "Hospitality — Integrated Resort",
    scope: "Structural Design",
    image: "/images/project-wynn-al-marjan.jpeg",
    description:
      "A massive integrated resort development of over 60 hectares (148 acres) on a man-made island in Ras Al Khaimah, UAE. The programme includes a hotel, casino, retail, dining and entertainment — the first resort in the UAE to include a casino.",
  },
  {
    id: "iskcon-kharghar",
    name: "ISKCON Temple Complex",
    location: "Kharghar, Navi Mumbai, India",
    projectType: "Religious — Temple Complex",
    scope: "Structural Design",
    image: "/images/project-iskcon-kharghar.jpeg",
    description:
      "A temple complex built over 8 acres of land, including the main temple, cultural and education centres, a guest house, accommodation blocks and a kitchen complex.",
  },
  // === DESIGN PROJECTS — Residential ===
  {
    id: "tata-aveza",
    name: "Tata Housing — Aveza / Gateway Towers",
    location: "Mulund, Mumbai, India",
    projectType: "Residential — High-Rise",
    client: "Tata Housing",
    scope: "Structural Design",
    image: "/images/project-tata-aveza.jpeg",
    description:
      "160 m tall, comprising 6 towers of G + 4P + Eco Deck + 32 to 42 floors. The towers use cut-outs and sky-bridges to create visual relief and framed vistas — not a monolithic block, and a complex structure to design.",
  },
  {
    id: "sahana-sheth-beaumonte",
    name: "Sahana-Sheth Creators — Beau Monte",
    location: "Sion, Mumbai, India",
    projectType: "Residential — Ultra-Luxury High-Rise",
    client: "Sahana-Sheth Creators",
    scope: "Structural Design",
    image: "/images/project-sahana-sheth-beaumonte.jpeg",
    description:
      "Two towers, each with 1B + G + 5P + Eco Deck + 40 floors. At 187 m height, the tallest ultra-luxury tower in Sion, with a robust central core and wings inclined to mitigate wind forces.",
  },
  {
    id: "dlf-one-midtown",
    name: "DLF — One Midtown",
    location: "Moti Nagar, New Delhi, India",
    projectType: "Residential — High-Rise",
    client: "DLF",
    scope: "Structural Design",
    image: "/images/project-dlf-one-midtown.jpeg",
    description:
      "Four towers, each with 3B + G + 2P + 39 floors. Designed for Seismic Zone V as per client requirements for enhanced safety.",
  },
  {
    id: "kalpataru-vista-noida",
    name: "Kalpataru — Vista",
    location: "Noida, India",
    projectType: "Residential — High-Rise",
    client: "Kalpataru",
    scope: "Structural Design",
    description:
      "Two towers, each with 2B + 2P + E-Deck + 33 floors. Friction piles were adopted as the subsoil predominantly consists of sandy soil.",
  },
  {
    id: "dheeraj-realty-livsmart",
    name: "Dheeraj Realty — LivSmart",
    location: "Kurla, Mumbai, India",
    projectType: "Residential — High-Rise",
    client: "Dheeraj Realty",
    scope: "Structural Design",
    description:
      "28 towers, each with 3B + G + 14 floors. Originally designed as commercial towers and later converted to residential, while two basements were already constructed.",
  },
  {
    id: "mahindra-happinest-tathawade",
    name: "Mahindra Lifespaces — Happinest",
    location: "Tathawade, Pune, India",
    projectType: "Residential — High-Rise",
    client: "Mahindra Lifespace Developers Ltd.",
    scope: "Structural Design",
    description:
      "Three towers with 1B + G + 32 floors, and three towers with 1B + G + 22 floors.",
  },
  {
    id: "rustomjee-prive",
    name: "Rustomjee — Prive",
    location: "Bandra, Mumbai, India",
    projectType: "Residential — High-Rise",
    client: "Rustomjee",
    scope: "Structural Design",
    description:
      "Two towers, each with 2B + G + 4P + 16 floors. Extensive floating systems were adopted due to space limitations.",
  },
  {
    id: "sardar-height-valsad",
    name: "Sardar Height — Gujarat Housing Board",
    location: "Valsad, Gujarat, India",
    projectType: "Residential — Mass Housing",
    client: "Gujarat Housing Board",
    scope: "Structural Design",
    description:
      "28 blocks, each with G + 14 floors.",
  },
  {
    id: "oberoi-skycity",
    name: "Oberoi Sky City",
    location: "Borivali, Mumbai, India",
    projectType: "Residential — High-Rise",
    scope: "Structural Design",
    image: "/images/project-oberoi-skycity.jpeg",
    description:
      "Residential high-rise development by Oberoi Realty in Borivali, Mumbai.",
  },
  // === PEER REVIEW PROJECTS ===
  {
    id: "godrej-uniabex",
    name: "Godrej Uniabex",
    location: "Thane, India",
    projectType: "Residential + Commercial — Peer Review",
    client: "Godrej",
    scope: "Structural Peer Review",
    description:
      "Detailed peer review of 5 towers of G + 7P + 50, together with a G + 6 retail building and a G + 18 commercial building.",
  },
  {
    id: "krc-cg-house",
    name: "KRC CG House",
    location: "Mumbai, India",
    projectType: "Commercial — Peer Review",
    client: "KRC",
    scope: "Structural Peer Review",
    description:
      "Peer review of a G + 3B + 40 commercial tower rising to 180 m in height.",
  },
  {
    id: "krc-mahalunge",
    name: "KRC Mahalunge",
    location: "Pune, India",
    projectType: "Residential — Peer Review",
    client: "KRC",
    scope: "Structural Peer Review",
    description:
      "Peer review of 7 towers of G + 3 podiums + E-Deck + 24 stories.",
  },
  {
    id: "birla-estate-kalwa",
    name: "Birla Estate — Central Thane, Kalwa",
    location: "Kalwa, Thane, India",
    projectType: "Residential — Value Engineering",
    client: "Birla Estate",
    scope: "Structural Peer Review + Value Engineering",
    description:
      "Value engineering of the structural design of 4 towers of G + 2B + 2 podium + 40-storey residential buildings.",
  },
  {
    id: "oberoi-skycity-ve",
    name: "Oberoi Sky City — Value Engineering",
    location: "Mumbai, India",
    projectType: "Residential — Value Engineering",
    client: "Oberoi Realty",
    scope: "Structural Peer Review + Value Engineering",
    description:
      "Value engineering of the structural design of 5 towers of G + 3B + 62-storey residential buildings, with value engineering options to achieve savings in overall quantities.",
  },
  {
    id: "godrej-carmichael-road",
    name: "Godrej Carmichael Road",
    location: "Mumbai, India",
    projectType: "Residential — Peer Review",
    client: "Godrej",
    scope: "Structural Peer Review",
    description:
      "Peer review of one luxury residential tower (1B + Gr + 8P + Amenity + 2 Service + 18 + Terrace), 131 m in height.",
  },
  {
    id: "godrej-rk-bunglow",
    name: "Godrej RK Bunglow",
    location: "Chembur, Mumbai, India",
    projectType: "Residential — Peer Review",
    client: "Godrej",
    scope: "Structural Peer Review",
    description:
      "Peer review of a residential building (2B + Gr + 2P + E-Deck + 21 Typical + Terrace), 82.90 m in height.",
  },
  {
    id: "mahalunge-r9",
    name: "Mahalunge R9",
    location: "Pune, India",
    projectType: "Residential — Peer Review",
    scope: "Structural Peer Review",
    description:
      "Peer review of 3 + 1 CP towers. Tower configuration: 3P + GF + 38 TYP + T (143 m height); car park: 3P + Terrace (16 m height).",
  },
  {
    id: "maanhinje-r17",
    name: "Maanhinje R17",
    location: "Pune, India",
    projectType: "Residential — Peer Review",
    scope: "Structural Peer Review",
    description:
      "Peer review of 3 towers + 2 NTA. Tower configuration: 2B + GF + 2P + 36 TYP + T (127 m height).",
  },
  {
    id: "godrej-aristocrat",
    name: "Godrej Aristocrat",
    location: "Sector 49, Gurugram, India",
    projectType: "Residential — Peer Review",
    client: "Godrej",
    scope: "Structural Peer Review",
    description:
      "Peer review of a residential project with 4 sale towers of 2B + G + 31 / 32, and 2 EWS buildings of 2B + G + 8.",
  },
  {
    id: "godrej-tropical-isle",
    name: "Godrej Tropical Isle",
    location: "Sector 146, Noida, India",
    projectType: "Residential — Peer Review",
    client: "Godrej",
    scope: "Structural Peer Review",
    description:
      "Peer review of 5 residential towers of B + G + 35 / 36.",
  },
  {
    id: "godrej-vrikatya",
    name: "Godrej Vrikatya",
    location: "Gurugram, India",
    projectType: "Residential — Peer Review",
    client: "Godrej",
    scope: "Structural Peer Review",
    description:
      "Peer review of 6 residential towers of G + 25 to 27.",
  },
  {
    id: "bengal-lamps",
    name: "Bengal Lamps",
    location: "Bangalore East, India",
    projectType: "Residential — Peer Review",
    scope: "Structural Peer Review",
    description:
      "Peer review of 15 towers of 3B + G + 39 floors, plus 3 retail buildings and two clubs.",
  },
  {
    id: "godrej-park-retreat-ii",
    name: "Godrej Park Retreat II",
    location: "Kasturba Road, Bangalore, India",
    projectType: "Residential — Peer Review",
    client: "Godrej",
    scope: "Structural Peer Review",
    description:
      "Peer review of 7 towers of 1B + G + 30 to 36 stories.",
  },
  {
    id: "raymond-next-mile-ten-x",
    name: "Raymond Realty — Next Mile (Ten-X)",
    location: "Thane, India",
    projectType: "Residential — Peer Review",
    client: "Raymond Realty",
    scope: "Structural Peer Review",
    description:
      "Peer review of a residential project at Thane — 3 towers of 1B + G + 42 floors.",
  },
  {
    id: "sd-sarova",
    name: "SD Corporation — Sarova",
    location: "Kandivali, Mumbai, India",
    projectType: "Residential — Peer Review",
    client: "SD Corporation",
    scope: "Structural Peer Review",
    description:
      "Peer review of a residential project — 2 towers of 1B + G + 9 podiums + amenities (E-Deck) + 28 floors.",
  },
  {
    id: "waterstone-business-park",
    name: "Brookfield — Waterstone Business Park",
    location: "Andheri (E), Mumbai, India",
    projectType: "Hospitality + Offices — Peer Review",
    client: "Brookfield Properties",
    scope: "Structural Peer Review",
    description:
      "Peer review of a hotel + offices project — 2B + G + 12 floors.",
  },
  {
    id: "dlf-mrc-chennai",
    name: "DLF MRC",
    location: "Chennai, India",
    projectType: "Residential — Peer Review",
    client: "DLF",
    scope: "Structural Peer Review",
    description:
      "Peer review of a residential project — 3B + G + 19 floors.",
  },
];

export const team: TeamMember[] = [
  {
    id: "nirav-shah",
    name: "Nirav Shah",
    position: "Founder",
    experience: "20 years",
    expertise: [
      "RCC & Steel Structures",
      "Airports & Hangars",
      "High-Rise Residential & Commercial",
      "Public & Institutional Buildings",
    ],
    bio: "Nirav Shah is a seasoned engineer with 20 years of professional experience, having worked with leading listed and large-scale organisations — national and international — including Larsen & Toubro Ltd., Godrej Properties Ltd. and Mott MacDonald. He is also empaneled with the world's top strategy consulting firms: BAIN as advisor and BCG as technical consultant. His design exposure spans highly complex large-scale projects — airports, hangars, aircraft engine test cells — through to high-rise residential and commercial buildings up to G+72, and public buildings such as railway stations and hospitals. His design expertise extends across RCC and steel structures, in diverse geographical conditions across India (Mumbai, Delhi NCR, Bangalore, Kolkata, Chennai, Hyderabad, Pune, Nagpur, Ahmedabad and others).",
    photo: "/images/nirav-shah.png",
  },
  {
    id: "pankaj-shah",
    name: "Pankaj Shah",
    position: "Partner",
    experience: "Nearly 15 years",
    expertise: [
      "Structural Design of High-Rise Buildings",
      "Residential & Commercial Complexes",
      "Mass Housing & Hotels",
      "Institutional & Healthcare Facilities",
    ],
    bio: "Pankaj Shah is a highly proficient structural engineer with nearly 15 years of experience across renowned design firms including Buro Happold, CBM Engineers, Larsen & Toubro Ltd., Gokani Consultant and Optimal Consultancy. He has led and delivered structural design projects across a wide range of sectors — residential high-rise, commercial complexes, mass housing developments, hotels, educational institutions, industrial plants, healthcare facilities and temples. His collaborative work with international design teams has further strengthened his global design perspective and technical proficiency. He is deeply passionate about the structural design of high-rise buildings and carries an exceptional track record of delivering safe, innovative and efficient structural solutions.",
    photo: "/images/pankaj-shah.png",
  },
];

export const about = {
  story:
    "Probitas was created to bridge the gap between the evolving needs of the construction industry and the current consultancy services available. We are a passionate team of highly skilled structural engineers delivering innovative and value-led solutions. Our clients consistently recognise us for our agility, collaboration and commitment to excellence.",
  founding:
    "Probitas was founded to bring a new standard of agility, collaboration and engineering rigour to structural consultancy — bridging the gap between the evolving needs of the construction industry and the consultancy services available at the time.",
  leadership:
    "Guided by strong leadership, we have established a highly skilled team of 10 talented engineers — and the team is growing steadily. We are committed to creating an inclusive working environment based on fairness and respect, one that encourages talented people of any background to produce their best work of the highest quality.",
  philosophy:
    "We apply scientific and engineering principles to solve complex problems and provide solutions that meet — and where possible exceed — clients' expectations. At Probitas, integrity builds trust and shapes excellence.",
  mission:
    "To provide a professional service of world-class quality through an innovative and responsible approach to engineering problems.",
  values:
    "Integrity, transparency, trust, diversity, collaboration and mutual respect. Through the relentless pursuit of excellence and rigour, we maintain a culture of quality that continually learns and improves.",
  qualifications:
    "[QUALIFICATIONS — OWNER TO PROVIDE: Registrations, certifications and memberships can be added here once confirmed by the owner. The supplied profile does not list formal credentials.]",
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
    title: "Probitas — Structural Engineering Consultancy | Where Excellence Meets Integrity",
    description:
      "Probitas is a structural engineering consultancy delivering innovative, value-led design and independent peer review across RCC and steel, for projects from airports and hangars to high-rise towers across India.",
  },
  services: {
    title: "Services — Probitas | Structural Design & Peer Review",
    description:
      "Two divisions, two services each. Probitas Structural Engineering delivers Design and Independent Peer Review across RCC and steel structures.",
  },
  "structural-engineering": {
    title: "Structural Engineering — Probitas",
    description:
      "Probitas Structural Engineering: design and independent peer review of RCC and steel structures — airports, hangars, high-rise towers, transit-oriented developments and more.",
  },
  "mep-engineering": {
    title: "MEP Engineering — Probitas",
    description: "[MEP ENGINEERING META DESCRIPTION — OWNER TO PROVIDE]",
  },
  projects: {
    title: "Projects — Probitas | Selected Engineering Commissions",
    description:
      "Selected structural design and peer review commissions delivered by Probitas leadership — including Air India MRO Hangar, Seawoods Grand Central, Mumbai International Airport, and high-rise residential towers across India.",
  },
  about: {
    title: "About — Probitas | Where Excellence Meets Integrity",
    description:
      "Probitas was created to bridge the gap between the evolving needs of the construction industry and current consultancy services. A passionate team of highly skilled structural engineers.",
  },
  team: {
    title: "Team — Probitas | Leadership & Engineers",
    description:
      "Meet the Probitas leadership: Founder Nirav Shah (20 years' experience) and Partner Pankaj Shah (nearly 15 years' experience), supported by a highly skilled team of 10 engineers.",
  },
  contact: {
    title: "Contact — Probitas",
    description:
      "Get in touch with Probitas. Office: D-102, Fortune Lifestyle Royale, Vapi-Daman Road, Chala, Vapi 396191, India. Email: niravmshah@probitasindia.com.",
  },
  insights: {
    title: "Insights — Probitas",
    description: "[INSIGHTS META DESCRIPTION — OWNER TO PROVIDE]",
  },
};
