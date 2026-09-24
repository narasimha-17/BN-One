// Customer reviews shown on the /customers page.
// The Industry and Product filters are built from these entries, so a new industry or product appears automatically.
// featured: true also shows the review on the home page (up to three).
// Optional: add logo: '/clients/your-file.svg' to show a client's logo on the card.
// Use summary (instead of quote) to describe a project in our own words until the client sends a review.

export const customerStories = [
  {
    id: 7,
    size: 'medium',
    company: 'Lakshmi Agency',
    featured: true,
    logo: '/clients/lakshmi-agency.png',
    showName: true,
    iconClass: 'max-h-24',
    industry: 'Agriculture',
    product: 'E-commerce',
    tone: 'bg-[#FFF4E8]',
    person: 'Lakshmi Agency',
    role: 'Agri products supplier',
    quote: 'Our customers now order agri products online and get them delivered. Agentosys built us an e-commerce site that is easy to use.',
  },
  {
    id: 4,
    size: 'medium',
    company: 'LVS Mobiles',
    logo: '/clients/lvs-mobiles.png',
    showName: true,
    industry: 'Commerce',
    product: 'Website',
    tone: 'bg-[#EAE2F7]',
    person: 'LVS Mobiles',
    role: 'Mobile store',
    quote: 'Agentosys built our website, and now customers can find LVS Mobiles online and reach us easily.',
  },
  {
    id: 5,
    size: 'medium',
    company: 'Quick Prints',
    featured: true,
    logo: '/clients/quick-prints.png',
    showName: true,
    industry: 'Commerce',
    product: 'Website',
    tone: 'bg-[#F3EEFA]',
    person: 'Quick Prints',
    role: 'Printing services',
    quote: 'Agentosys built us a clean, simple website. Customers can now find Quick Prints online and get in touch in seconds.',
  },
  {
    id: 6,
    size: 'short',
    company: 'SRJ',
    logo: '/clients/srj.png',
    industry: 'Commerce',
    product: 'Website',
    tone: 'bg-[#EAE2F7]',
    person: 'SRJ',
    quote: 'Agentosys built our website and gave our collections a clean, elegant home online.',
  },
  {
    id: 8,
    size: 'short',
    company: 'Prasad Sportszone',
    industry: 'Commerce',
    product: 'Website',
    tone: 'bg-[#F3EEFA]',
    person: 'Prasad Sportszone',
    role: 'Sports store',
    quote: 'Agentosys built our website, and now customers can find Prasad Sportszone online and reach us easily.',
  },
  {
    id: 9,
    size: 'short',
    company: 'Torfin',
    featured: true,
    logo: '/clients/torfin.png',
    person: 'Torfin',
    role: 'Game development company',
    industry: 'Gaming',
    product: 'Partnership',
    tone: 'bg-[#EAE2F7]',
    quote: 'Agentosys is a dependable technology partner for our game development work.',
  },
]

const unique = (key) => [...new Set(customerStories.map((s) => s[key]))]
export const industries = unique('industry')
export const products = unique('product')
