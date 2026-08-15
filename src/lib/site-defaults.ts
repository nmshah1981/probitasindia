/**
 * Default site content — used to seed the database on first access and as a
 * fallback if the database is unavailable.
 *
 * This is the single source of truth for the *shape* and *initial values*
 * of all editable site content. The admin page writes overrides to the
 * database via /api/content; the public site reads from /api/content on load.
 */

export type ServiceSlug = "structural-engineering" | "mep-engineering";

export type DivisionService = {
  id: "design" | "peer-review";
  index: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage?: string;
};

export type Discipline = {
  slug: ServiceSlug;
  index: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage?: string;
  services: [DivisionService, DivisionService];
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

export type SiteData = {
  company: {
    name: string;
    tagline: string;
    shortDescription: string;
    longDescription: string;
    email: string;
    phone: string;
    address: string;
    heroHeadline: string;
    heroSupporting: string;
    primaryCta: string;
    secondaryCta: string;
    introductionHeading: string;
    introductionBody: string;
  };
  hero: {
    image: string;
    alt: string;
  };
  services: Discipline[];
  projects: ProjectRecord[];
  team: TeamMember[];
  about: {
    story: string;
    founding: string;
    leadership: string;
    philosophy: string;
    mission: string;
    values: string;
    qualifications: string;
  };
  seo: Record<string, { title: string; description: string }>;
};

export function getDefaultSiteData(): SiteData {
  return {
    company: {
      name: "Probitas",
      tagline: "Where Excellence Meets Integrity",
      shortDescription:
        "A passionate team of highly skilled engineers delivering innovative and value-led solutions across India.",
      longDescription:
        "Probitas was created to bridge the gap between the evolving needs of the construction industry and the current consultancy services available. We apply scientific and engineering principles to solve complex problems and provide solutions that meet — and where possible exceed — clients' expectations.",
      email: "niravmshah@probitasindia.com",
      phone: "+91 98198 29490",
      address:
        "D-102, Fortune Lifestyle Royale, Vapi-Daman Road, Chala, Vapi 396191, India",
      heroHeadline: "Where Excellence Meets Integrity.",
      heroSupporting:
        "A passionate team of highly skilled engineers delivering innovative and value-led solutions — bridging the gap between the evolving needs of the construction industry and current consultancy services.",
      primaryCta: "Discuss a Project",
      secondaryCta: "Our Services",
      introductionHeading: "Engineering with integrity.",
      introductionBody:
        "Probitas was created to bridge the gap between the evolving needs of the construction industry and the current consultancy services available. Our clients consistently recognise us for our agility, collaboration and commitment to excellence. We apply scientific and engineering principles to solve complex problems and provide solutions that meet — and where possible exceed — clients' expectations.",
    },
    hero: {
      image: "/images/project-mumbai-airport.jpeg",
      alt: "Mumbai International Airport — terminal building reconstruction",
    },
    services: [
      {
        slug: "structural-engineering",
        index: "01",
        title: "Structural Engineering",
        shortDescription:
          "Innovative, value-led structural design and independent peer review across RCC and steel, for projects ranging from complex airports and hangars to high-rise residential and commercial towers.",
        longDescription:
          "Probitas brings deep expertise in RCC and steel structural design across highly complex large-scale projects — airports, hangars, aircraft engine test cells, transit-oriented developments — as well as high-rise residential and commercial buildings up to G+72. Our team has delivered projects across most geographies in India, with a track record in design, peer review, value engineering and constructability solutions. We balance architectural intent, structural performance, economy and constructability across every commission.",
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
          "Design and independent peer review of mechanical, electrical, and plumbing systems across commercial and residential real estate, airports, and public buildings.",
        longDescription:
          "Our MEP Engineering division designs and reviews the mechanical, electrical, and plumbing systems that keep buildings running safely and efficiently. Covering everything from HVAC to fire protection to power and lighting, our team supports projects across commercial and residential real estate, airports, and public buildings — either as lead designer or as an independent reviewer of MEP packages developed by others.",
        heroImage: "/images/mep-feature.png",
        services: [
          {
            id: "design",
            index: "01",
            title: "MEP Design",
            shortDescription:
              "Comprehensive design of HVAC, fire protection, electrical power and lighting, plumbing and drainage, and low-voltage systems — balancing performance, energy efficiency, maintainability, and regulatory compliance.",
            longDescription:
              "Comprehensive design of Mechanical, Electrical, and Plumbing systems, including HVAC, fire protection, electrical power and lighting, plumbing and drainage, and low-voltage systems. Our MEP team designs systems that balance performance, energy efficiency, maintainability, and regulatory compliance for buildings ranging from residential towers to complex public infrastructure.",
            heroImage: "/images/mep-feature.png",
          },
          {
            id: "peer-review",
            index: "02",
            title: "MEP Peer Review",
            shortDescription:
              "Independent review of MEP design packages to confirm code compliance, system sizing, coordination between disciplines, and adherence to project requirements.",
            longDescription:
              "A rigorous, independent review of MEP design packages to confirm code compliance, system sizing, coordination between disciplines, and adherence to project requirements. This service gives clients an added layer of assurance that building services have been designed correctly before they move into construction.",
            heroImage: "/images/peer-review-detail.png",
          },
        ],
      },
    ],
    projects: [
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
    ],
    team: [
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
    ],
    about: {
      story:
        "Probitas was created to bridge the gap between the evolving needs of the construction industry and the current consultancy services available. We are a passionate team of highly skilled engineers delivering innovative and value-led solutions. Our clients consistently recognise us for our agility, collaboration and commitment to excellence.",
      founding:
        "Probitas was founded to bring a new standard of agility, collaboration and engineering rigour to structural consultancy — bridging the gap between the evolving needs of the construction industry and the consultancy services available at the time. As we built long-term trust with our partners, our clients gradually demanded integrated mechanical, electrical, and plumbing (MEP) capabilities for their projects. To match these growing requirements and provide a more complete consultancy experience, we expanded our expertise into MEP services.",
      leadership:
        "Guided by strong leadership, we have established a highly skilled team of 10 talented engineers — and the team is growing steadily. We are committed to creating an inclusive working environment based on fairness and respect, one that encourages talented people of any background to produce their best work of the highest quality.",
      philosophy:
        "We apply scientific and engineering principles to solve complex problems and provide solutions that meet — and where possible exceed — clients' expectations. At Probitas, integrity builds trust and shapes excellence.",
      mission:
        "To provide a professional service of world-class quality through an innovative and responsible approach to engineering problems.",
      values:
        "Integrity, transparency, trust, diversity, collaboration and mutual respect. Through the relentless pursuit of excellence and rigour, we maintain a culture of quality that continually learns and improves.",
      qualifications:
        "[QUALIFICATIONS — OWNER TO PROVIDE: Registrations, certifications and memberships can be added here once confirmed by the owner.]",
    },
    seo: {
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
        description:
          "Probitas MEP Engineering: design and independent peer review of mechanical, electrical, and plumbing systems across commercial, residential, airport, and public building projects.",
      },
      projects: {
        title: "Projects — Probitas | Selected Engineering Commissions",
        description:
          "Selected structural design and peer review commissions delivered by Probitas leadership — including Air India MRO Hangar, Seawoods Grand Central, Mumbai International Airport, and high-rise residential towers across India.",
      },
      about: {
        title: "About — Probitas | Where Excellence Meets Integrity",
        description:
          "Probitas was created to bridge the gap between the evolving needs of the construction industry and current consultancy services. A passionate team of highly skilled engineers.",
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
    },
  };
}
