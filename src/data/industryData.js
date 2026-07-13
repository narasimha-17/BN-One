export const services = [
  'Cloud Architecture',
  'Security Hardening',
  'AI Integration',
  'High-Concurrency',
  'UI/UX Engineering',
  'Digital Auditing',
  'Database Modeling',
  'API Development',
  'SLA Monitoring',
  'Load Balancing',
  'Edge Computing',
  'Auth Systems',
]

export const serviceIcons = {
  'Cloud Architecture': '<path d="M7 18a4.5 4.5 0 0 1-.5-8.98A5.5 5.5 0 0 1 17.2 8.02 4 4 0 0 1 17 18H7z" fill="none"/>',
  'Security Hardening':
    '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" fill="none"/><path d="M9 12l2 2 4-4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  'AI Integration':
    '<rect x="7" y="7" width="10" height="10" rx="1.5" fill="none"/><circle cx="10.5" cy="10.5" r="1.1"/><circle cx="13.5" cy="13.5" r="1.1"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" fill="none" stroke-linecap="round"/>',
  'High-Concurrency': '<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>',
  'UI/UX Engineering':
    '<rect x="3" y="4" width="18" height="14" rx="1.5" fill="none"/><path d="M3 8.5h18" fill="none"/><path d="M15.5 13.5l2.2 2.2-2.2 2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  'Digital Auditing':
    '<circle cx="10.5" cy="10.5" r="6.5" fill="none"/><path d="M15.3 15.3L21 21" fill="none" stroke-linecap="round"/><path d="M7.5 10.5l2 2 4-4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  'Database Modeling':
    '<ellipse cx="12" cy="6" rx="7" ry="3" fill="none"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" fill="none"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" fill="none"/>',
  'API Development':
    '<path d="M8 4L3 12l5 8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 4l5 8-5 8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 6l-3 12" fill="none" stroke-linecap="round"/>',
  'SLA Monitoring':
    '<path d="M4 13a8 8 0 1 1 16 0" fill="none"/><path d="M12 13l4-5" fill="none" stroke-linecap="round"/><circle cx="12" cy="13" r="1.3"/><path d="M4 13h1.5M18.5 13H20" fill="none" stroke-linecap="round"/>',
  'Load Balancing':
    '<path d="M12 3v4" fill="none" stroke-linecap="round"/><path d="M4 7h16" fill="none" stroke-linecap="round"/><path d="M6 7l-3 6a3 3 0 0 0 6 0L6 7z" fill="none" stroke-linejoin="round"/><path d="M18 7l-3 6a3 3 0 0 0 6 0l-3-6z" fill="none" stroke-linejoin="round"/><path d="M8 21h8" fill="none" stroke-linecap="round"/><path d="M12 7v14" fill="none" stroke-linecap="round"/>',
  'Edge Computing':
    '<circle cx="12" cy="4.5" r="2" fill="none"/><circle cx="5" cy="18" r="2" fill="none"/><circle cx="19" cy="18" r="2" fill="none"/><path d="M12 6.5v5M12 11.5L6.3 16.4M12 11.5l5.7 4.9" fill="none" stroke-linecap="round"/>',
  'Auth Systems':
    '<rect x="5" y="11" width="14" height="9" rx="1.5" fill="none"/><path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none"/><circle cx="12" cy="15.5" r="1.4"/>',
}

export const stack = ['Python', 'Flask', 'React.js', 'Tailwind', 'PostgreSQL', 'AWS']

export const projects = [
  { t: 'VULCAN', s: 'FinTech', d: 'High-frequency trading engine.' },
  { t: 'ORION', s: 'Healthcare', d: 'Automated diagnostic portal.' },
  { t: 'AETHER', s: 'Logistics', d: 'Global supply chain monitor.' },
]

export const industryIcons = {
  healthcare:
    '<path d="M12 21s-7-4.35-9.5-8.5C.5 8.9 2.7 5 6.3 5c2 0 3.3 1.1 4 2.2C11 6.1 12.3 5 14.3 5c3.6 0 5.8 3.9 3.8 7.5C19 16.65 12 21 12 21z"/><path d="M6 12h2.5l1.2-2.3L11 15l1.6-4.5L14 12h4" fill="none" stroke-linejoin="round"/>',
  ecommerce:
    '<path d="M4 8h16l-1.5 11.2a1 1 0 0 1-1 .8H6.5a1 1 0 0 1-1-.8L4 8z"/><path d="M8 8V6a4 4 0 0 1 8 0v2" fill="none"/>',
  travel: '<path d="M3 13l7-2 4-9 2 1-2.4 8.4L20 10l1 2-6.4 3.6L14 21l-2-1 .6-5.4L7 16l-1.6-1.6L8 12z"/>',
  fintech:
    '<circle cx="12" cy="12" r="9" fill="none"/><path d="M12 7v10M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.2c0 3 6 1.6 6 4.6 0 1.3-1.4 2.2-3 2.2s-3-1-3-2.4" fill="none" stroke-linecap="round"/>',
  logistics:
    '<rect x="2" y="8" width="12" height="9" rx="1"/><path d="M14 11h4l3 3v3h-7z" fill="none"/><circle cx="6.5" cy="19" r="1.6" fill="#0a0a0a"/><circle cx="17" cy="19" r="1.6" fill="#0a0a0a"/>',
  edtech:
    '<path d="M2 8l10-4.5L22 8l-10 4.5L2 8z"/><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" fill="none"/><path d="M22 8v6" fill="none" stroke-linecap="round"/>',
  realestate: '<path d="M4 21V10l8-6 8 6v11h-6v-6h-4v6H4z"/>',
  manufacturing:
    '<path d="M3 21l1.5-8h3L9 21H3z"/><path d="M11 21l1.7-11h3L17 21h-6z"/><circle cx="12.5" cy="6" r="2.6" fill="none"/><path d="M19 21l1-6h2l1 6h-4z"/>',
}

export const industries = [
  {
    key: 'healthcare',
    title: 'Healthcare & MedTech',
    blurb: 'Patient-facing portals and diagnostic tooling built around clinical accuracy.',
    items: ['Diagnostic imaging pipelines', 'Telemedicine systems', 'Patient record dashboards'],
  },
  {
    key: 'ecommerce',
    title: 'E-Commerce & Retail',
    blurb: 'Storefronts and back-office tooling engineered for conversion.',
    items: ['Headless storefronts', 'Inventory-sync management', 'Recommendation engines'],
  },
  {
    key: 'travel',
    title: 'Travel & Hospitality',
    blurb: 'Booking and itinerary systems that stay accurate across time zones.',
    items: ['Real-time availability engines', 'Itinerary planners', 'Multi-currency payment rails'],
  },
  {
    key: 'fintech',
    title: 'FinTech & Banking',
    blurb: 'Transaction-critical systems where correctness and latency matter.',
    items: ['Secure transaction pipelines', 'Fraud-detection models', 'KYC onboarding workflows'],
  },
  {
    key: 'logistics',
    title: 'Logistics',
    blurb: 'Visibility tooling for goods in motion in real time.',
    items: ['Live fleet tracking maps', 'Warehouse optimization', 'Telemetry dashboards'],
  },
  {
    key: 'edtech',
    title: 'EdTech',
    blurb: 'Learning platforms that hold up under concurrent live sessions.',
    items: ['Learning management portals', 'Adaptive assessment engines', 'Live-class infrastructure'],
  },
  {
    key: 'realestate',
    title: 'PropTech',
    blurb: 'Listing and lead systems built to move prospects.',
    items: ['Property listing platforms', 'CRM-linked lead capture', 'Affordability calculators'],
  },
  {
    key: 'manufacturing',
    title: 'Industry 4.0',
    blurb: 'Shop-floor visibility and predictive tooling.',
    items: ['IoT telemetry dashboards', 'Predictive maintenance models', 'Vision-based quality-control'],
  },
]
