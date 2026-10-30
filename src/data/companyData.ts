export interface NAICSCode {
  code: string;
  title: string;
  isPrimary?: boolean;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  keyConsideration?: string;
  relevantActivities: string[];
  applicableMarkets: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface DifferentiatorItem {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface MarketGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  relevantCapabilities: string[];
  potentialApplications: string[];
}

export const COMPANY_INFO = {
  name: "RSVP ROSES LLC",
  tagline: "Efficient Solutions, Flourishing Results.",
  brandStatement: "Where Aesthetics Meet Excellence & Equity.",
  established: "November 2019",
  businessType: "Minority-Owned / Woman-Owned Small Business (Incorporation)",
  businessAddress: "254 Chapman Rd, Ste 208 #26118, Newark, DE 19702, USA",
  phone: "(302) 600-0137",
  tollFree: "1 (877) 215-9744",
  fax: "(302) 600-0162",
  email: "info@rsvprose.com",
  website: "www.rsvproses.com",
  cageCode: "24K75",
  uei: "GGPSJBBL8WK3",
  serviceCoverage: "Nationwide, with an operational focus in New York",
  domainNotice: "Please note: Both info@rsvprose.com and rsvproses.com are authorized official company communication channels."
};

export const PRIMARY_NAICS: NAICSCode[] = [
  { code: "531390", title: "Other Activities Related to Real Estate", isPrimary: true },
  { code: "541611", title: "Administrative Management and General Management Consulting Services", isPrimary: true },
  { code: "484110", title: "General Freight Trucking, Local", isPrimary: true }
];

export const ADDITIONAL_NAICS: NAICSCode[] = [
  { code: "423690", title: "Other Electronic Parts and Equipment Merchant Wholesalers" },
  { code: "488510", title: "Freight Transportation Arrangement" },
  { code: "423450", title: "Medical, Dental, and Hospital Equipment and Supplies Merchant Wholesalers" },
  { code: "541810", title: "Advertising Agencies" },
  { code: "561730", title: "Landscaping Services" },
  { code: "561210", title: "Facilities Support Services" },
  { code: "531310", title: "Real Estate Property Managers" }
];

export const ALL_NAICS = [...PRIMARY_NAICS, ...ADDITIONAL_NAICS];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "communication-systems",
    number: "01",
    title: "Communication Systems Procurement",
    shortDesc: "Sourcing, supply, and integration of mission-critical communication systems, including Push-to-Talk over Cellular (PoC) radios and associated hardware.",
    detailedDesc: "Coordinated sourcing and supply of reliable voice and data communications infrastructure tailored for tactical, operational, and institutional field units. We help government and commercial clients acquire compliant Push-to-Talk over Cellular (PoC) terminals, multi-channel accessories, and peripheral dispatch hardware.",
    keyConsideration: "Ensures strict alignment with applicable Trade Agreements Act (TAA) and Section 889 federal supply chain requirements.",
    relevantActivities: [
      "Push-to-Talk over Cellular (PoC) radio procurement",
      "Field-ready tactical and commercial communications peripherals",
      "Supply chain verification under TAA and Section 889 guidelines",
      "Hardware delivery coordination and logistics handover"
    ],
    applicableMarkets: [
      "Federal, state, and local emergency and public works departments",
      "Security teams and municipal facility directors",
      "Prime contractors requiring compliant radio equipment sourcing"
    ],
    imageSrc: "/src/assets/images/communications_hardware_1792504461393.jpg",
    imageAlt: "Push-to-Talk over Cellular radio communications hardware and transceivers"
  },
  {
    id: "logistics-distribution",
    number: "02",
    title: "Logistics & Equipment Distribution",
    shortDesc: "End-to-end supply chain support for the secure, timely, and compliant delivery of specialized equipment and supplies for federal and commercial operations.",
    detailedDesc: "Comprehensive supply chain coordination ensuring specialized materials, medical/commercial supplies, and operational equipment arrive securely and punctually. We integrate local freight scheduling and freight forwarding oversight through a disciplined chain of custody.",
    keyConsideration: "Operates across verified NAICS 484110 (General Freight Trucking, Local) and 488510 (Freight Transportation Arrangement).",
    relevantActivities: [
      "Local freight trucking and last-mile site distribution",
      "Freight transportation arrangement and scheduling oversight",
      "Secure handling of institutional and commercial equipment",
      "Inventory staging and coordinated drop-ship fulfillment"
    ],
    applicableMarkets: [
      "Regional agency supply depots and administrative compounds",
      "Commercial developers requiring scheduled material staging",
      "Prime contractors managing multi-vendor logistical pipelines"
    ],
    imageSrc: "/src/assets/images/logistics_distribution_hub_1792504462659.jpg",
    imageAlt: "Modern organized logistics warehouse and distribution facility"
  },
  {
    id: "real-estate-facilities",
    number: "03",
    title: "Real Estate & Facilities Consulting",
    shortDesc: "Advisory services for real estate acquisitions, dispositions, and portfolio management, combining market analysis with strategic property solutions.",
    detailedDesc: "Strategic consulting for commercial property portfolios, asset optimization, space utilization, and acquisition feasibility. We evaluate property conditions, analyze market dynamics, and help clients align real property assets with operational objectives.",
    keyConsideration: "Grounded in NAICS 531390 (Other Activities Related to Real Estate) and 531310 (Real Estate Property Managers).",
    relevantActivities: [
      "Commercial real estate portfolio review and asset analysis",
      "Acquisitions and dispositions operational advisory",
      "Facility utilization assessments and space planning consulting",
      "Vendor coordination and stakeholder property reviews"
    ],
    applicableMarkets: [
      "Institutional property owners and municipal redevelopment bodies",
      "Commercial asset managers seeking third-party analysis",
      "Organizations planning physical relocations or footprint consolidation"
    ],
    imageSrc: "/src/assets/images/hero_corporate_facility_1792504461500.jpg",
    imageAlt: "Contemporary commercial and government administrative building architecture"
  },
  {
    id: "community-engagement",
    number: "04",
    title: "Inclusive Community Engagement",
    shortDesc: "Helping bridge the gap between government programs and underserved communities so that public initiatives and services can reach the populations they are intended to serve.",
    detailedDesc: "Culturally fluent, equity-centered advisory and outreach services connecting institutional initiatives with local neighborhoods. We assist agencies and prime partners in facilitating stakeholder dialog, ensuring civic investments and public notices resonate with diverse constituencies.",
    keyConsideration: "Leverages a minority- and woman-owned perspective to ensure equitable access and transparent public communication.",
    relevantActivities: [
      "Civic program outreach and community information dissemination",
      "Local stakeholder coordination and listening sessions",
      "Equity-centered engagement strategy for public initiatives",
      "Multicultural outreach material planning and campaign advisory"
    ],
    applicableMarkets: [
      "Public sector agencies launching municipal or regional initiatives",
      "Infrastructure teams conducting environmental and civic outreach",
      "Civic non-profits and public-private community partnerships"
    ],
    imageSrc: "/src/assets/images/civic_community_building_1792504463511.jpg",
    imageAlt: "Accessible civic community center and welcoming public entryway"
  },
  {
    id: "property-preservation",
    number: "05",
    title: "Property Preservation & Asset Management",
    shortDesc: "Support for foreclosure-related property preservation, maintenance, and asset disposition, helping preserve properties and prepare them for successful community transition.",
    detailedDesc: "Physical preservation, securitization, and protective maintenance for vacant, distressed, or transition-stage real estate. We coordinate exterior maintenance, debris removal, code-compliance checks, and environmental stabilization to protect asset integrity.",
    keyConsideration: "Directly addresses neighborhood stabilization and responsible property rehabilitation before public or private disposition.",
    relevantActivities: [
      "Foreclosure-related property inspection and preservation coordination",
      "Property securitization, lock changes, and winterization coordination",
      "Lawn care, exterior grounds management, and debris cleanup",
      "Transition staging for neighborhood re-occupancy"
    ],
    applicableMarkets: [
      "Mortgage servicers and asset disposition trusts",
      "Municipal land banks and housing development agencies",
      "Financial institutions holding real-estate-owned (REO) portfolios"
    ],
    imageSrc: "/src/assets/images/hero_corporate_facility_1792504461500.jpg",
    imageAlt: "Commercial property grounds and exterior facility preservation"
  },
  {
    id: "aesthetic-enhancement",
    number: "06",
    title: "Aesthetic & Appearance Enhancement",
    shortDesc: "High-quality painting, finishing, and interior improvements for federal and commercial facilities, with an emphasis on refined results, local hiring, and community-centered execution.",
    detailedDesc: "Interior and exterior architectural finishing, surface preparation, protective coatings, and cosmetic revitalizations. We combine fine craftsmanship with local workforce participation, uplifting institutional environments with clean, durable aesthetic excellence.",
    keyConsideration: "Supports NAICS 561730 and 561210 facilities upkeep while prioritizing local hiring and high-standard finishing.",
    relevantActivities: [
      "Commercial interior and architectural wall painting",
      "Surface repair, prep work, and specialized protective coatings",
      "Facility touch-up and aesthetic enhancement cycles",
      "Supervised local trade coordination and rigorous quality inspection"
    ],
    applicableMarkets: [
      "Government agency regional offices and courtroom complexes",
      "Commercial office buildings, property management complexes",
      "Educational, institutional, and healthcare administrative spaces"
    ],
    imageSrc: "/src/assets/images/facility_interior_finishing_1792504462310.jpg",
    imageAlt: "Craftsmen performing high-quality interior painting and architectural finishing"
  },
  {
    id: "business-development",
    number: "07",
    title: "Business Development Consulting",
    shortDesc: "Helping agencies and commercial partners refine procurement strategies and strengthen internal capacity to meet evolving mission requirements.",
    detailedDesc: "Strategic advisory services focused on procurement planning, vendor evaluation frameworks, operational readiness, and collaborative partnership models. We help organizations modernize their vendor sourcing approaches and build cross-disciplinary capabilities.",
    keyConsideration: "Aligned with NAICS 541611 (Administrative Management and General Management Consulting Services).",
    relevantActivities: [
      "Procurement strategy refinement and requirement scoping",
      "Operational capacity building and workflow alignment",
      "Subcontracting structure advisory and supplier collaboration",
      "Engagement readiness and requirement documentation review"
    ],
    applicableMarkets: [
      "Government contracting officers refining multi-faceted requirements",
      "Commercial primes seeking agile, responsive small business partners",
      "Growing enterprises structuring their procurement operations"
    ],
    imageSrc: "/src/assets/images/hero_corporate_facility_1792504461500.jpg",
    imageAlt: "Modern corporate conference facility for business strategy"
  }
];

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    number: "01",
    title: "The All-In-One Equity Advantage",
    summary: "Single-source integration across strategic consulting, procurement, real estate, and property services.",
    detail: "Rather than coordinating disconnected contractors across disparate disciplines, partners benefit from a single point of accountability that bridges procurement, logistics, physical property work, and strategic advisory."
  },
  {
    number: "02",
    title: "Concept-to-Completion Delivery",
    summary: "Lifecycle oversight spanning upfront requirement planning to physical execution and maintenance.",
    detail: "We walk alongside the entire lifecycle of an operational requirement—from market analysis and compliant hardware sourcing through to site logistics, installation coordination, and ongoing facility follow-through."
  },
  {
    number: "03",
    title: "Agile & Inclusive",
    summary: "A minority- and woman-owned enterprise perspective centered on equity and community-driven results.",
    detail: "Our operational model embeds inclusive outreach, local workforce engagement, and civic awareness into government and commercial projects, delivering positive social equity without compromising on rigor."
  },
  {
    number: "04",
    title: "High-Touch Management",
    summary: "Dedicated responsiveness, constant communication, and systematic quality assurance.",
    detail: "Direct executive accessibility, prompt status reporting, and hands-on oversight ensure that project timelines, contract specifications, and compliance standards are consistently upheld."
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the requirement, operational context, objectives, and expected outcomes.",
    detail: "We conduct structured intake sessions to define technical specifications, compliance parameters (such as TAA, Section 889, or local mandates), delivery schedules, and budget targets."
  },
  {
    step: "02",
    title: "Plan & Source",
    description: "Develop an appropriate approach, identify sourcing or service requirements, and coordinate necessary resources.",
    detail: "We map out supply chains, identify verified vendor channels, schedule logistics routes, and allocate qualified personnel to fulfill every phase of the scope."
  },
  {
    step: "03",
    title: "Execute & Coordinate",
    description: "Coordinate delivery, project activities, property services, or other agreed work according to requirements.",
    detail: "Direct operational deployment with centralized management oversight, proactive milestone tracking, and daily operational communication to maintain momentum."
  },
  {
    step: "04",
    title: "Review & Maintain",
    description: "Prioritize quality control, communication, and appropriate follow-through or maintenance where required.",
    detail: "Rigorous quality inspection, complete handover documentation, and scheduled maintenance or follow-through services to ensure long-term satisfaction."
  }
];

export const MARKET_GROUPS: MarketGroup[] = [
  {
    id: "government-public",
    title: "Government & Public Sector",
    subtitle: "Federal, State, and Municipal Entities",
    description: "Coordinated solutions addressing mission-critical communications procurement, specialized supply logistics, facilities management support, and civic outreach initiatives.",
    relevantCapabilities: ["Communication Systems Procurement", "Logistics & Equipment Distribution", "Business Development Consulting", "Inclusive Community Engagement"],
    potentialApplications: [
      "Push-to-Talk cellular radio provisioning for emergency response & field teams",
      "Administrative facility cosmetic renovation and surface finishing",
      "Community outreach campaigns for public infrastructure projects",
      "Strategic procurement advisory and capacity evaluation"
    ]
  },
  {
    id: "prime-contractors",
    title: "Prime Contractors & Procurement Partners",
    subtitle: "Subcontracting & Joint Teaming Collaborations",
    description: "Agile small-business subcontracting partner providing responsive support for large-scale prime awards across multi-disciplinary scopes.",
    relevantCapabilities: ["Logistics & Equipment Distribution", "Communication Systems Procurement", "Aesthetic & Appearance Enhancement", "Business Development Consulting"],
    potentialApplications: [
      "Qualified small business (M/WOSB) subcontracting utilization",
      "Local freight distribution and equipment staging under federal scopes",
      "TAA / Section 889 compliant telecom and radio sourcing",
      "Specialized interior finishing sub-scopes"
    ]
  },
  {
    id: "commercial-property",
    title: "Commercial Property & Real Estate",
    subtitle: "Owners, Asset Managers, and Portfolio Operators",
    description: "Holistic property consulting, preservation, and appearance enhancement services to stabilize, revitalize, and maintain real estate holdings.",
    relevantCapabilities: ["Real Estate & Facilities Consulting", "Property Preservation & Asset Management", "Aesthetic & Appearance Enhancement"],
    potentialApplications: [
      "Real estate portfolio utilization and transition advisory",
      "Foreclosure property preservation, securitization, and upkeep",
      "Tenant space repaint, architectural wall coating, and cosmetic refreshes",
      "Commercial facility exterior grounds management"
    ]
  },
  {
    id: "logistics-supply",
    title: "Logistics & Equipment Supply",
    subtitle: "Distribution Networks & Materials Handling",
    description: "Reliable freight trucking and logistics coordination ensuring critical equipment and wholesale supplies reach operational destinations securely.",
    relevantCapabilities: ["Logistics & Equipment Distribution", "Communication Systems Procurement"],
    potentialApplications: [
      "Local freight trucking and freight transportation arrangement",
      "Scheduled distribution of electronic parts and merchant equipment",
      "Medical and institutional equipment transportation support",
      "Supply chain transit management and chain of custody tracking"
    ]
  },
  {
    id: "community-initiatives",
    title: "Community-Focused Initiatives",
    subtitle: "Civic Organizations & Urban Initiatives",
    description: "Inclusive community engagement and neighborhood stabilization initiatives bridging public programs with underserved populations.",
    relevantCapabilities: ["Inclusive Community Engagement", "Property Preservation & Asset Management", "Aesthetic & Appearance Enhancement"],
    potentialApplications: [
      "Grassroots public information campaigns and stakeholder forums",
      "Neighborhood property preservation and blighted asset stabilization",
      "Local workforce engagement on facility beautification contracts",
      "Community feedback collection and equity reporting"
    ]
  }
];

export const INQUIRY_TYPES = [
  "Government Contracting Opportunity",
  "Subcontracting or Supplier Partnership",
  "Communication Systems Procurement",
  "Logistics and Equipment Distribution",
  "Real Estate and Facilities Consulting",
  "Property Preservation and Asset Management",
  "Aesthetic and Appearance Enhancement",
  "Business Development Consulting",
  "Other Inquiry"
];
