// Customer reviews shown on the /customers page.
// Replace the placeholder entries (placeholder: true) with real customer feedback.
// Optional: add logo: '/clients/your-file.svg' to show a client's logo on the card.
export const industries = ['Healthcare', 'Commerce', 'Travel', 'Finance', 'Education', 'Logistics']
export const products = ['PowerLens', 'VIBE', 'Code Check', 'Exam+']

const SAMPLE = "Sample review. Replace this with your customer's real feedback in src/data/customerStories.js."

export const customerStories = [
  {
    id: 1,
    size: 'tall',
    company: 'Client name',
    person: 'Client name',
    role: 'Role, Company',
    industry: 'Commerce',
    product: 'PowerLens',
    tone: 'bg-[#F3EEFA]',
    quote: 'Our user engagement matrices scaled instantly within one deployment sprint cycle using INFOLCON.',
  },
  {
    id: 2,
    size: 'short',
    company: 'Client name',
    person: 'Client name',
    role: 'Role, Company',
    industry: 'Travel',
    product: 'VIBE',
    tone: 'bg-[#EAE2F7]',
    quote: 'Stunning attention to visual spacing combined with exceptionally professional asset compression metrics.',
  },
  {
    id: 3,
    size: 'text',
    company: 'Client name',
    person: 'Client name',
    role: 'Role, Company',
    industry: 'Finance',
    product: 'Code Check',
    tone: 'bg-[#F3EEFA]',
    quote:
      'An absolute anomaly in web engineering. Clean architecture, transparent delivery targets, and unmatched ongoing support models.',
  },
  {
    id: 4,
    size: 'medium',
    company: 'Your client',
    person: 'Client name',
    role: 'Role, Company',
    industry: 'Healthcare',
    product: 'PowerLens',
    tone: 'bg-[#EAE2F7]',
    placeholder: true,
    quote: SAMPLE,
  },
  {
    id: 5,
    size: 'tall',
    company: 'Your client',
    person: 'Client name',
    role: 'Role, Company',
    industry: 'Education',
    product: 'Exam+',
    tone: 'bg-[#F3EEFA]',
    placeholder: true,
    quote: SAMPLE,
  },
  {
    id: 6,
    size: 'short',
    company: 'Your client',
    person: 'Client name',
    role: 'Role, Company',
    industry: 'Logistics',
    product: 'Code Check',
    tone: 'bg-[#EAE2F7]',
    placeholder: true,
    quote: SAMPLE,
  },
]
