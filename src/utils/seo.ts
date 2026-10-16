import { allNottinghamLocations } from '../config/siteConfig';

export function updatePageSEO(page: string, slug?: string) {
  let title = 'Pest Off East Midlands | Nottingham Pest Control Contractor';
  let description =
    'Professional pest control contractor across Nottingham and East Midlands. Fast response, all hours service, BPCA & RSPH certified. Established 2017.';

  switch (page) {
    case 'residential':
      title = 'Residential Pest Control Nottingham & East Midlands | Pest Off';
      description =
        'Prompt, dependable home pest eradication for rodents, wasps, bed bugs, fleas, and insects. Family and pet safe treatments across Nottinghamshire.';
      break;
    case 'commercial':
      title = 'Commercial Pest Control & Compliance Contracts | Pest Off East Midlands';
      description =
        'BPCA certified pest prevention contracts for Nottingham businesses, restaurants, warehouses, and property managers. Audit-ready compliance.';
      break;
    case 'locations':
      title = 'Areas Covered Across Nottingham & East Midlands | Pest Off';
      description =
        'Fast response pest control across West Bridgford, Beeston, Wollaton, Arnold, Hucknall, Bingham, Edwalton, and the wider East Midlands.';
      break;
    case 'location-detail': {
      const loc = allNottinghamLocations.find((l) => l.slug === slug);
      if (loc) {
        title = `${loc.name} Pest Control (${loc.postcode || 'Nottingham'}) | Pest Off East Midlands`;
        description =
          loc.summary ||
          `Expert pest control and eradication services in ${loc.name} and surrounding areas. Fast response and certified technicians.`;
      }
      break;
    }
    case 'contact':
      title = 'Contact Pest Off East Midlands | Free Estimate & Callout';
      description =
        'Get in touch with Nottingham pest control specialists. Available all hours, every day of the week on 07401 555142 for free estimates.';
      break;
    default:
      break;
  }

  document.title = title;

  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Update og:title and twitter:title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', title);

  // Update og:description and twitter:description
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', description);
}
