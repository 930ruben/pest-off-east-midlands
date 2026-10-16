/**
 * Pest Off - Site Configuration & Data Layer
 * 
 * All business variables are managed here.
 * Edit phone numbers, email, address, services, and locations in this file.
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  locationArea: string;
  operatingHours: string;
  establishedYear: string;
  responseGuarantee: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    bgImage: string;
    responsiveImages?: {
      mobileSlow: string;
      mobile: string;
      mobile2x: string;
      tablet: string;
      desktop: string;
      fallback: string;
    };
  };
  banner: {
    headline: string;
    subtitle: string;
    buttonText: string;
  };
  googleRating: {
    score?: number;
    businessName: string;
    reviewUrl: string;
    profileUrl: string;
    placeId: string;
    placeIdPlaceholder?: string;
    totalReviews?: number;
  };
  socials: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
  accreditations: Array<{
    name: string;
    abbr: string;
    desc: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Pest Off East Midlands",
  tagline: "Friendly, Trusted East Midlands Pest Control",
  subTagline: "Prompt, safe, and guaranteed pest eradication for homes and commercial businesses across Nottinghamshire and the East Midlands.",
  
  // PRIMARY PHONE NUMBER
  phone: "07401 555142",
  phoneRaw: "+447401555142",
  
  // EMAIL & CONTACT
  email: "info@pestoffeastmidlands.co.uk",
  address: "City Gate East, Tollhouse Hill, Nottingham, NG1 5FS",
  locationArea: "Nottingham & Surrounding Areas",
  operatingHours: "All hours, every day of the week",
  establishedYear: "2017",
  responseGuarantee: "Guaranteed Pest Eradication",

  // HERO CONTENT VARIABLES
  hero: {
    badge: "BPCA Certified Nottinghamshire Contractor",
    title: "Pest Control for the East Midlands",
    subtitle: "Pest Off handles insects, rodents, wasps, and birds discreetly and with care. Fast, dependable eradication for homes and businesses across Nottingham and the East Midlands.",
    bgImage: "/assets/hero/hero-desktop.webp",
    responsiveImages: {
      mobileSlow: "/assets/hero/hero-mobile-slow.webp",
      mobile: "/assets/hero/hero-mobile.webp",
      mobile2x: "/assets/hero/hero-mobile-2x.webp",
      tablet: "/assets/hero/hero-tablet.webp",
      desktop: "/assets/hero/hero-desktop.webp",
      fallback: "/assets/hero/hero-fallback.jpg",
    },
  },

  // CALLOUT BANNER VARIABLES
  banner: {
    headline: "Got pests? Tell them to Pest Off!",
    subtitle: "Speak with a local Nottingham specialist today for honest advice and upfront pricing.",
    buttonText: "Request Free Estimate",
  },

  googleRating: {
    score: 5.0,
    totalReviews: 1,
    businessName: "Pest Off East Midlands",
    reviewUrl: "https://g.page/r/CaZ9-xqMgeL2ECE/review",
    profileUrl: "https://g.page/r/CaZ9-xqMgeL2ECE",
    placeId: "ChIJOR5lWDNI_QgRpn37GoyB4vY",
    placeIdPlaceholder: "ChIJOR5lWDNI_QgRpn37GoyB4vY",
  },

  socials: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },

  accreditations: [
    {
      name: "British Pest Control Association",
      abbr: "BPCA Member",
      desc: "Strict adherence to industry code of best practice & continuous professional development."
    },
    {
      name: "Royal Society for Public Health",
      abbr: "RSPH Level 2",
      desc: "Fully certified technicians in public health pest management & safe rodenticide stewardship."
    },
    {
      name: "CRRU Compliant",
      abbr: "CRRU Wildlife Safe",
      desc: "Responsible rodenticide usage to safeguard non-target wildlife and domestic animals."
    }
  ]
};

export interface NottinghamLocation {
  slug: string;
  name: string;
  isFeatured?: boolean; // Large card in dropdown (e.g. West Bridgford, City Centre)
  isPopular?: boolean;  // Small text item in dropdown
  summary: string;
  description: string;
  commonPests: string[];
  propertyTypes: string[];
  nearbyAreas: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  postcode?: string;
}

export const allNottinghamLocations: NottinghamLocation[] = [
  {
    slug: "west-bridgford",
    name: "West Bridgford",
    isFeatured: true,
    summary: "Comprehensive pest control for Central Avenue eateries, riverside properties, and residential avenues.",
    description: "West Bridgford is one of our primary daily service areas. With high property density, Victorian and Edwardian housing stocks, and bustling dining strips along Central Avenue, residential rodent ingress and summer wasp nests are frequent occurrences. Pest Off delivers prompt, discreet treatments across all West Bridgford neighborhoods, including Trent Bridge, Lady Bay, and Abbey Park.",
    commonPests: ["Rats & Mice", "Wasps", "Ants", "Squirrels", "Moths"],
    propertyTypes: ["Victorian & Edwardian family homes", "Cafes & Restaurants on Central Avenue", "Apartments near Trent Bridge"],
    nearbyAreas: ["Edwalton", "Compton Acres", "Gamston", "Ruddington", "City Centre"],
    coordinates: { lat: 52.9328, lng: -1.1342 },
    postcode: "NG2"
  },
  {
    slug: "city-centre",
    name: "City Centre",
    isFeatured: true,
    summary: "Discreet commercial and residential pest eradication across Lace Market, Hockley, and Market Square.",
    description: "Nottingham City Centre demands dependable, discreet pest management for high-density student accommodations, historic Lace Market converted lofts, retail establishments, and busy hospitality venues in Hockley. Our technicians operate unmarked vehicles to safeguard reputations while maintaining complete compliance with local council health standards.",
    commonPests: ["Cockroaches", "Bed Bugs", "Rats & Mice", "Pigeons & Gulls", "Flies"],
    propertyTypes: ["Restaurants, Bars & Nightlife", "Student Accommodations & Apartments", "Retail Stores & Warehouses"],
    nearbyAreas: ["Lace Market", "Hockley", "Castle Quarter", "Sneinton", "The Park"],
    coordinates: { lat: 52.9548, lng: -1.1581 },
    postcode: "NG1"
  },
  {
    slug: "arnold",
    name: "Arnold",
    isFeatured: true,
    isPopular: true,
    summary: "Fast pest control for residential estates, High Street shops, and suburban properties in Arnold.",
    description: "Covering Arnold, Daybrook, and Redhill, Pest Off offers fast, dependable eradication of rodents, wasp nests, fleas, and garden ants. We regularly assist homeowners with loft rodent proofing and local retail owners along Front Street with proactive pest defense.",
    commonPests: ["Rats & Mice", "Wasps", "Fleas", "Ants", "Silverfish"],
    propertyTypes: ["Detached & Semi-detached Homes", "Retail Shops on Front Street", "Schools & Commercial Units"],
    nearbyAreas: ["Woodthorpe", "Mapperley", "Gedling", "Sherwood", "Bestwood"],
    coordinates: { lat: 53.0044, lng: -1.1278 },
    postcode: "NG5"
  },
  {
    slug: "edwalton",
    name: "Edwalton",
    isPopular: true,
    summary: "Discreet pest control for modern housing developments and established family estates in Edwalton.",
    description: "Edwalton has experienced rapid residential growth alongside established luxury estates. Construction and ground displacement often drive mice and rats toward residential gardens and cavities. Our discreet technicians provide pet-safe eradication and exterior barrier proofing.",
    commonPests: ["Rats & Mice", "Wasps", "Mole Trapping", "Ants"],
    propertyTypes: ["Modern Executive Builds", "Period Manor Properties", "Local Retail Parades"],
    nearbyAreas: ["West Bridgford", "Compton Acres", "Tollerton", "Gamston"],
    coordinates: { lat: 52.9150, lng: -1.1250 },
    postcode: "NG12"
  },
  {
    slug: "hucknall",
    name: "Hucknall",
    isPopular: true,
    summary: "Effective domestic and commercial pest eradication throughout Hucknall and surrounding areas.",
    description: "Whether you run an industrial unit near the bypass or own a home near Hucknall town centre, Pest Off delivers reliable pest solutions. From loft rodent clearance to exterior wasp nest removal, our team guarantees permanent results.",
    commonPests: ["Rats & Mice", "Wasps", "Cockroaches", "Pigeons"],
    propertyTypes: ["Residential Terraces & Semis", "Industrial Trading Estates", "High Street Shops"],
    nearbyAreas: ["Bulwell", "Linby", "Papplewick", "Bestwood"],
    coordinates: { lat: 53.0360, lng: -1.2050 },
    postcode: "NG15"
  },
  {
    slug: "compton-acres",
    name: "Compton Acres",
    isPopular: true,
    summary: "Targeted, family-safe pest solutions for Compton Acres homes, lofts, and garden perimeters.",
    description: "Situated in South Nottingham near West Bridgford, Compton Acres is a quiet residential community where garden rodent activity and summer wasps are common concerns. We deploy child- and pet-safe tamper-resistant bait stations and discreet removal methods.",
    commonPests: ["Mice & Rats", "Wasps", "Squirrels in Lofts", "Ant Infestations"],
    propertyTypes: ["Suburban Family Residences", "Townhouses", "Local Shopping Precints"],
    nearbyAreas: ["West Bridgford", "Edwalton", "Wilford", "Ruddington"],
    coordinates: { lat: 52.9230, lng: -1.1490 },
    postcode: "NG2"
  },
  {
    slug: "beeston",
    name: "Beeston",
    isFeatured: true,
    isPopular: true,
    summary: "Reliable pest services for residential neighborhoods, university quarters, and High Road businesses.",
    description: "With proximity to the University of Nottingham, Beeston features a blend of student rentals, historic family residences, and bustling independent businesses on the High Road. We provide specialist bed bug treatments, rodent exclusion, and commercial preventative contracts.",
    commonPests: ["Bed Bugs", "Rats & Mice", "Wasps", "Fleas", "Cockroaches"],
    propertyTypes: ["Student Shared Housing", "Victorian Terraces", "Offices & High Road Cafes"],
    nearbyAreas: ["Chilwell", "Bramcote", "Wollaton", "Lenton", "Dunkirk"],
    coordinates: { lat: 52.9268, lng: -1.2144 },
    postcode: "NG9"
  },
  {
    slug: "wollaton",
    name: "Wollaton",
    isPopular: true,
    summary: "Specialist pest management for Wollaton residences, parkside properties, and commercial premises.",
    description: "Bordered by Wollaton Park and surrounding woodlands, local homes frequently encounter gray squirrels nesting in roof spaces and rodents seeking shelter in winter months. Pest Off provides targeted removal, loft proofing, and wasp eradication.",
    commonPests: ["Squirrels in Attics", "Rats & Mice", "Wasps", "Hornets", "Ants"],
    propertyTypes: ["Parkside Detached Homes", "Suburban Family Houses", "Pubs & Restaurants"],
    nearbyAreas: ["Bramcote", "Beeston", "Radford", "Bilborough"],
    coordinates: { lat: 52.9515, lng: -1.2132 },
    postcode: "NG8"
  },
  {
    slug: "mapperley",
    name: "Mapperley",
    isPopular: true,
    summary: "Trusted pest control for Mapperley Top commercial venues, Porchester, and residential properties.",
    description: "Mapperley Top is known for its busy restaurant and bar scene, requiring rigorous hygiene compliance and scheduled monitoring. Residential properties across Mapperley and Porchester benefit from prompt, fixed-price rodent and wasp callouts.",
    commonPests: ["Wasps", "Rats & Mice", "Flies", "Cockroaches", "Fleas"],
    propertyTypes: ["High-street Dining & Bars", "Semi-detached & Terraced Homes", "Care Facilities"],
    nearbyAreas: ["Arnold", "Sherwood", "Gedling", "Carlton"],
    coordinates: { lat: 52.9780, lng: -1.1200 },
    postcode: "NG3"
  },
  {
    slug: "bingham",
    name: "Bingham",
    isPopular: true,
    summary: "Market town pest control services for Bingham homes, farm borders, and retail premises.",
    description: "Located in the Rushcliffe borough, Bingham combines a historic market town center with modern developments and surrounding agricultural land. Field rodents often seek shelter in domestic cavities during harvest and winter months.",
    commonPests: ["Rats & Field Mice", "Wasps", "Cluster Flies", "Pigeons"],
    propertyTypes: ["Market Square Businesses", "New Build Developments", "Cottages & Rural Properties"],
    nearbyAreas: ["Radcliffe-on-Trent", "Whatton", "East Bridgford", "Cotgrave"],
    coordinates: { lat: 52.9510, lng: -0.9530 },
    postcode: "NG13"
  },
  {
    slug: "carlton",
    name: "Carlton",
    summary: "Comprehensive pest eradication for Carlton Hill businesses and surrounding residential areas.",
    description: "Serving Carlton, Netherfield, and Colwick, Pest Off resolves common pest issues with scheduled appointments, discrete vehicles, and long-term exclusion advice.",
    commonPests: ["Rats & Mice", "Wasps", "Fleas", "Ants"],
    propertyTypes: ["Terraced Homes", "Retail Shops on Carlton Hill", "Industrial Units in Colwick"],
    nearbyAreas: ["Netherfield", "Colwick", "Gedling", "Mapperley"],
    coordinates: { lat: 52.9680, lng: -1.0920 },
    postcode: "NG4"
  },
  {
    slug: "sherwood",
    name: "Sherwood",
    summary: "Prompt pest solutions for Sherwood high street venues, Mansfield Road, and local residences.",
    description: "Sherwood features vibrant food outlets and period residential properties along Mansfield Road. Pest Off delivers prompt pest exclusion and commercial compliance contracts.",
    commonPests: ["Rats & Mice", "Cockroaches", "Wasps", "Bed Bugs"],
    propertyTypes: ["Mansfield Road Restaurants & Shops", "Edwardian Family Houses", "Flats"],
    nearbyAreas: ["Mapperley", "Carrington", "Basford", "Woodthorpe"],
    coordinates: { lat: 52.9810, lng: -1.1480 },
    postcode: "NG5"
  },
  {
    slug: "bulwell",
    name: "Bulwell",
    summary: "Effective domestic and commercial pest eradication across Bulwell and Hall Lane.",
    description: "Pest Off provides dependable eradication of rodents, wasp nests, bed bugs, and fleas for homeowners, landlords, and commercial retailers in Bulwell.",
    commonPests: ["Rats & Mice", "Bed Bugs", "Wasps", "Fleas"],
    propertyTypes: ["Residential Housing", "Market Stalls & Shops", "Commercial Yards"],
    nearbyAreas: ["Hucknall", "Bestwood", "Basford", "Cinderhill"],
    coordinates: { lat: 53.0010, lng: -1.1960 },
    postcode: "NG6"
  },
  {
    slug: "ruddington",
    name: "Ruddington",
    summary: "Friendly, experienced pest contractor for Ruddington village homes and businesses.",
    description: "Ruddington blends charming village living with local pubs and businesses. We provide quiet, effective treatments for rodents, wasps, and seasonal pests.",
    commonPests: ["Mice & Rats", "Wasps", "Cluster Flies", "Squirrels"],
    propertyTypes: ["Village Cottages", "Modern Family Homes", "Country Pubs & Cafes"],
    nearbyAreas: ["West Bridgford", "Clifton", "Bradmore", "Keyworth"],
    coordinates: { lat: 52.8930, lng: -1.1500 },
    postcode: "NG11"
  },
  {
    slug: "long-eaton",
    name: "Long Eaton",
    summary: "Professional pest control across Long Eaton, Sawley, and bordering industrial corridors.",
    description: "Covering Long Eaton and surrounding areas, our BPCA technicians resolve pest infestations safely and effectively for residential and manufacturing clients.",
    commonPests: ["Rats & Mice", "Wasps", "Cockroaches", "Pigeons"],
    propertyTypes: ["Industrial Warehouses", "Residential Streets", "Town Centre Stores"],
    nearbyAreas: ["Beeston", "Sawley", "Chilwell", "Stapleford"],
    coordinates: { lat: 52.8970, lng: -1.2720 },
    postcode: "NG10"
  },
  {
    slug: "stapleford",
    name: "Stapleford",
    summary: "Reliable pest eradication for Stapleford homes, high street retail, and transport routes.",
    description: "Providing reliable callouts for rats, mice, wasp nests, and bed bugs across Stapleford and Bramcote borders.",
    commonPests: ["Rats & Mice", "Wasps", "Fleas", "Ants"],
    propertyTypes: ["Townhouses", "Local Retail Outlets", "Workshops"],
    nearbyAreas: ["Bramcote", "Beeston", "Sandiacre", "Trowell"],
    coordinates: { lat: 52.9310, lng: -1.2740 },
    postcode: "NG9"
  },
  {
    slug: "radcliffe-on-trent",
    name: "Radcliffe-on-Trent",
    summary: "Trusted pest services for Radcliffe riverside properties, village houses, and golf clubs.",
    description: "With proximity to the River Trent and extensive green spaces, Radcliffe properties occasionally experience rodent and insect pressures. Pest Off guarantees clean, pet-safe eradication.",
    commonPests: ["Rats & Mice", "Wasps", "Squirrels", "Cluster Flies"],
    propertyTypes: ["Riverside Residences", "Village Center Businesses", "Detached Properties"],
    nearbyAreas: ["Bingham", "Shelford", "Cotgrave", "Colwick"],
    coordinates: { lat: 52.9510, lng: -1.0400 },
    postcode: "NG12"
  },
  {
    slug: "gedling",
    name: "Gedling",
    summary: "Local pest control for Gedling Country Park surroundings, residential avenues, and schools.",
    description: "Pest Off provides full coverage across Gedling and Carlton, ensuring effective wasp nest treatment and rodent proofing for domestic properties.",
    commonPests: ["Wasps", "Mice & Rats", "Ants", "Silverfish"],
    propertyTypes: ["Suburban Residences", "Schools", "Local Shops"],
    nearbyAreas: ["Carlton", "Arnold", "Mapperley", "Netherfield"],
    coordinates: { lat: 52.9730, lng: -1.0770 },
    postcode: "NG4"
  },
  {
    slug: "keyworth",
    name: "Keyworth",
    summary: "Professional pest management for South Nottinghamshire village homes and research facilities.",
    description: "Keyworth residents and businesses rely on Pest Off for discreet, certified treatments that solve pest problems at the root.",
    commonPests: ["Rats & Mice", "Wasps", "Cluster Flies", "Moles"],
    propertyTypes: ["Village Properties", "Offices & Laboratories", "Equestrian & Rural Units"],
    nearbyAreas: ["Ruddington", "Plumtree", "Tollerton", "Widmerpool"],
    coordinates: { lat: 52.8680, lng: -1.0870 },
    postcode: "NG12"
  },
  {
    slug: "calverton",
    name: "Calverton",
    summary: "Experienced pest control for Calverton homes, farms, and industrial parks.",
    description: "Pest Off services rural and residential properties in Calverton, handling wasps, rodents, and seasonal agricultural pests effectively.",
    commonPests: ["Wasps", "Rats & Mice", "Flies", "Squirrels"],
    propertyTypes: ["Residential Housing", "Industrial Park Units", "Rural Properties"],
    nearbyAreas: ["Arnold", "Woodborough", "Oxton", "Lowdham"],
    coordinates: { lat: 53.0420, lng: -1.0820 },
    postcode: "NG14"
  },
  {
    slug: "ravenshead",
    name: "Ravenshead",
    summary: "Discreet pest eradication for Ravenshead woodland residences and local businesses.",
    description: "Set near Newstead Abbey and surrounding woodlands, Ravenshead properties often face gray squirrels in roof voids and seasonal wasps. We provide specialized loft exclusion and proofing.",
    commonPests: ["Squirrels", "Wasps & Hornets", "Mice & Rats", "Ants"],
    propertyTypes: ["Woodland Detached Homes", "Pubs & Restaurants", "Commercial Establishments"],
    nearbyAreas: ["Blidworth", "Newstead", "Hucknall", "Mansfield"],
    coordinates: { lat: 53.0850, lng: -1.1680 },
    postcode: "NG15"
  },
  {
    slug: "tollerton",
    name: "Tollerton",
    summary: "Reliable pest treatments for Tollerton village, airport perimeter, and countryside properties.",
    description: "Covering Tollerton and Nottingham City Airport surroundings with prompt, certified pest control for rodents, wasps, and birds.",
    commonPests: ["Mice & Rats", "Wasps", "Pigeons", "Flies"],
    propertyTypes: ["Village Homes", "Aviation & Industrial Units", "Farmhouses"],
    nearbyAreas: ["Edwalton", "Keyworth", "Gamston", "Ruddington"],
    coordinates: { lat: 52.9090, lng: -1.0990 },
    postcode: "NG12"
  },
  {
    slug: "gamston",
    name: "Gamston",
    summary: "Prompt pest solutions for Gamston residential closes, canal banks, and community shopping centers.",
    description: "Bordered by the Grantham Canal, Gamston properties often experience localized rodent pressure. Pest Off delivers dependable, pet-safe treatments.",
    commonPests: ["Rats & Mice", "Wasps", "Ants", "Spiders"],
    propertyTypes: ["Modern Family Developments", "Retail Complexes", "Community Buildings"],
    nearbyAreas: ["West Bridgford", "Edwalton", "Radcliffe-on-Trent", "Tollerton"],
    coordinates: { lat: 52.9340, lng: -1.1090 },
    postcode: "NG2"
  },
  {
    slug: "bramcote",
    name: "Bramcote",
    summary: "Dedicated pest control for Bramcote homes, Bramcote Hills, and business premises.",
    description: "Fast, discreet pest eradication for Bramcote residents. Certified BPCA treatments for rodent infestations, wasp nests, and loft squirrels.",
    commonPests: ["Rats & Mice", "Wasps", "Squirrels", "Ants"],
    propertyTypes: ["Detached Homes", "Bramcote Hills Residences", "Local Schools"],
    nearbyAreas: ["Wollaton", "Beeston", "Stapleford", "Chilwell"],
    coordinates: { lat: 52.9380, lng: -1.2460 },
    postcode: "NG9"
  },
  {
    slug: "kimberley",
    name: "Kimberley",
    summary: "Efficient pest eradication for Kimberley, Swingate, and surrounding towns.",
    description: "Pest Off eliminates pests quickly and thoroughly throughout Kimberley, ensuring homes and shops are kept hygienic and safe.",
    commonPests: ["Rats & Mice", "Wasps", "Bed Bugs", "Cockroaches"],
    propertyTypes: ["Hilltop Terraces", "Modern Estates", "Industrial Buildings"],
    nearbyAreas: ["Eastwood", "Watnall", "Nuthall", "Hucknall"],
    coordinates: { lat: 52.9990, lng: -1.2540 },
    postcode: "NG16"
  },
  {
    slug: "southwell",
    name: "Southwell",
    summary: "Heritage and domestic pest solutions for Southwell homes, hospitality, and independent businesses.",
    description: "Southwell’s historic architecture and hospitality sector require sympathetic, highly skilled pest management. Pest Off provides compliant, guaranteed solutions.",
    commonPests: ["Mice & Rats", "Wasps", "Cluster Flies", "Woodworm / Moths"],
    propertyTypes: ["Period & Listed Buildings", "Hospitality Venues", "Townhouses"],
    nearbyAreas: ["Farnsfield", "Oxton", "Lowdham", "Newark"],
    coordinates: { lat: 53.0760, lng: -0.9540 },
    postcode: "NG25"
  }
];

export interface PestService {
  id: string;
  name: string;
  slug: string;
  category: 'residential' | 'commercial' | 'both';
  shortDesc: string;
  fullDesc: string;
  commonSigns: string[];
  treatmentMethods: string[];
  responseTime: string;
  badge?: string;
}

export const allServices: PestService[] = [
  {
    id: "rats-mice",
    name: "Rats & Mice Control",
    slug: "rats-and-mice",
    category: "both",
    badge: "Most Common",
    shortDesc: "Complete rodent eradication, entry-point proofing, and tamper-resistant baiting for homes and business premises.",
    fullDesc: "Rodents cause significant structural damage by gnawing electrical cabling, water pipes, and floor joists, alongside posing severe health hazards through leptospirosis and salmonella. Our certified technicians locate access cavities, deploy safe, enclosed bait stations, and seal entry holes to stop re-entry permanently.",
    commonSigns: ["Droppings along skirting boards or in lofts", "Scratching sounds in wall cavities at night", "Gnaw marks on skirting or packaging", "Ammonia-like odour in enclosed spaces"],
    treatmentMethods: ["Thorough property survey & ingress mapping", "Tamper-resistant lockable bait units", "Targeted mechanical trapping", "Rodent-proof exclusion sealing"],
    responseTime: "Certified Local Service"
  },
  {
    id: "wasps-hornets",
    name: "Wasp Nest Removal",
    slug: "wasps-and-hornets",
    category: "both",
    badge: "Specialist Care",
    shortDesc: "Effective eradication of active wasp and hornet nests in eaves, lofts, wall cavities, and garden sheds.",
    fullDesc: "Wasps become aggressive when their nests are disturbed, presenting genuine medical risks to families and customers. We apply professional-grade insecticidal powders directly into nest entry points, neutralizing the colony safely and effectively. Proven results in a single visit.",
    commonSigns: ["High volume of wasps entering roof eaves or air bricks", "Visible papery spherical nest in loft or shed", "Loud persistent buzzing in wall or ceiling voids"],
    treatmentMethods: ["Direct aerosol & powder injection", "Protective equipment treatment", "Complete neutralization protocol", "Secondary nest prevention advice"],
    responseTime: "Guaranteed Treatment"
  },
  {
    id: "commercial-contracts",
    name: "Commercial Pest Contracts",
    slug: "commercial-pest-contracts",
    category: "commercial",
    badge: "EHO Compliant",
    shortDesc: "Scheduled inspections, detailed digital audit documentation, and complete HACCP/EHO compliance.",
    fullDesc: "A single pest sighting can destroy food hygiene ratings and corporate reputations. We offer custom preventative service agreements for restaurants, bars, food production facilities, warehouses, hotels, and care homes across Nottingham. Includes a dedicated pest log folder, trend analysis, and emergency support with response times structured around your agreed Service Level Agreement (SLA).",
    commonSigns: ["Upcoming Environmental Health Officer inspection", "Evidence in food storage areas", "Audit compliance requirements", "Supply chain specification demands"],
    treatmentMethods: ["Scheduled multi-point site inspections", "Digital reporting & compliance logbook", "Electronic fly killers (EFK) maintenance", "Staff hygiene & prevention training"],
    responseTime: "Dedicated Support"
  },
  {
    id: "bed-bugs",
    name: "Bed Bug Eradication",
    slug: "bed-bugs",
    category: "both",
    badge: "Discreet",
    shortDesc: "Thorough multi-stage insecticide and heat treatments to eliminate bed bugs and eggs completely.",
    fullDesc: "Bed bug infestations are notoriously resilient and cannot be resolved with supermarket sprays. Our discreet technicians perform deep structural treatments targeting mattresses, headboards, floor cracks, and skirting, eradicating both adult bugs and unhatched eggs.",
    commonSigns: ["Unexplained itchy red bites in lines or clusters", "Small blood spots on bedding and sheets", "Dark fecal spots on mattress seams", "Sweet, musty odor in severe cases"],
    treatmentMethods: ["Pre-treatment preparation guidance", "Dual-action residual insecticide spray", "Targeted crack and crevice micro-misting", "Professional eradication protocol"],
    responseTime: "Discreet Service"
  },
  {
    id: "cockroaches",
    name: "Cockroach Control",
    slug: "cockroaches",
    category: "both",
    badge: "Hygiene Critical",
    shortDesc: "Eradication of German and Oriental cockroaches in kitchens, food prep areas, and warm pipe voids.",
    fullDesc: "Cockroaches harbor dangerous pathogens and reproduce rapidly in warm, moist environments. We apply advanced professional bait gels that infect the entire harbor through transfer effect, eradicating hidden colonies safely around sensitive electrical and kitchen equipment.",
    commonSigns: ["Insects scattering when lights turn on", "Small pepper-like droppings behind appliances", "Egg cases (oothecae) in dark corners", "Unpleasant oily smell"],
    treatmentMethods: ["Pheromone monitoring traps", "Non-toxic insect growth regulators (IGR)", "Precision targeted gel baiting", "Sanitation & structural exclusion guidance"],
    responseTime: "Targeted Treatment"
  },
  {
    id: "bird-proofing",
    name: "Bird Proofing & Control",
    slug: "bird-control",
    category: "commercial",
    badge: "Long Term",
    shortDesc: "Anti-roosting netting, wire deterrent systems, and guano sanitization for Nottingham buildings.",
    fullDesc: "Pigeons and gulls damage stonework, block gutters, and create slip hazards with acidic guano. We install discreet physical deterrents such as tension wire systems and heavy-duty exclusion netting.",
    commonSigns: ["Pigeons roosting on rooflines and ledges", "Accumulated guano on pavements or fire escapes", "Debris clogging gutters and roof valleys", "Foul odors and bird mites"],
    treatmentMethods: ["Heavy-duty bird exclusion netting", "Tension wire deterrent systems", "Ledge and parapet exclusion", "Biocidal guano decontamination"],
    responseTime: "Comprehensive Survey"
  }
];

export interface ClientTestimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  pestType: string;
  rating: number;
  text: string;
  date: string;
}

export const placeholderTestimonials: ClientTestimonial[] = [];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'residential' | 'commercial' | 'safety';
}

export const faqs: FAQItem[] = [
  {
    question: "How do I arrange a visit to my property?",
    answer: "You can book an appointment by calling us directly or submitting an enquiry online. We coordinate with you to arrange a suitable visit for your home or business premises across Nottingham and the East Midlands.",
    category: "general"
  },
  {
    question: "Do you use unmarked vans for discretion?",
    answer: "Yes. We respect our clients' privacy. Unmarked vehicles are readily available on request for both residential homes and commercial business venues, so your neighbors or customers will not know we are there.",
    category: "safety"
  },
  {
    question: "Are your pest treatments safe for children and pets?",
    answer: "Yes, absolutely. The safety of your family and pets is our number one priority. We utilize tamper-proof, locked bait boxes that cannot be accessed by cats, dogs, or children, and we advise on safe re-entry periods whenever aerosol or spray treatments are applied.",
    category: "safety"
  },
  {
    question: "Which areas in Nottingham do you cover?",
    answer: "We cover all of Nottingham and surrounding Nottinghamshire towns, including West Bridgford, City Centre, Arnold, Edwalton, Hucknall, Compton Acres, Beeston, Wollaton, Mapperley, Bingham, Carlton, Long Eaton, and beyond.",
    category: "general"
  },
  {
    question: "What compliance documentation do you provide for businesses?",
    answer: "Every commercial client receives a complete Pest Management Logbook with site plans, bait station locations, chemical safety data sheets (COSHH), technician visit reports, and recommendations compliant with BPCA and Environmental Health Officer (EHO) audit standards.",
    category: "commercial"
  },
  {
    question: "What are your emergency response times?",
    answer: "We always aim to attend as fast as possible. For commercial contract customers, specific emergency response times depend on your agreed Service Level Agreement (SLA). For domestic properties, our local technicians arrange visits as fast as possible to tackle active infestations promptly.",
    category: "general"
  },
  {
    question: "Are your pest eradication services guaranteed?",
    answer: "Yes. Our rodent, bed bug, and insect treatments are delivered to strict BPCA guidelines. We carry out thorough eradication protocols and provide comprehensive proofing advice to ensure long-term pest exclusion.",
    category: "residential"
  }
];
