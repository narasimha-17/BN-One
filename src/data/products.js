import { productUrls } from './productLinks.js'

export const products = [
  {
    name: 'AgentCloud',
    slug: 'agentcloud',
    href: productUrls.AgentCloud,
    category: 'AI AGENTS / AUTOMATION',
    body: 'An AI agent marketplace and team builder. Describe a goal, and AgentCloud assembles ready-to-deploy agents, connects them to the tools you already use, and keeps every action permissioned, approved where needed, and logged.',
    tags: ['10,000+ ready-to-deploy agents', '100+ integrations, from Gmail to Salesforce', 'Human approvals and full audit logs', 'Managed cloud, self-hosted or air-gapped'],
  },
  {
    name: 'PowerLens',
    slug: 'powerlens',
    href: productUrls.PowerLens,
    category: 'INTELLIGENCE / ANALYTICS',
    body: 'Turn complex operational data into clear decisions with a live command view built around your business.',
    tags: ['Live Insights', 'Signal Mapping', 'Decision Tools'],
  },
  {
    name: 'Optiva ERP',
    slug: 'optiva-erp',
    href: productUrls['Optiva ERP'],
    category: 'OPERATIONS / ERP',
    body: 'An ERP that brings finance, inventory, sales and people operations into one connected system, so every team works from the same live numbers.',
    tags: ['Finance and Accounting', 'Inventory and Procurement', 'Sales and Customer Orders', 'Real-time Reporting'],
  },
  {
    name: 'VIBE',
    slug: 'vibe',
    href: productUrls.VIBE,
    category: 'EXPERIENCE / ENGAGEMENT',
    body: 'A high-energy digital experience system for brands that need attention, movement, and measurable connection.',
    tags: ['Brand Systems', 'Interactive UI', 'Conversion Flow'],
  },
  {
    name: 'Code Check',
    slug: 'code-check',
    category: 'ENGINEERING / QUALITY',
    body: 'Bring confidence to every release with structured code review, performance checks, and practical fixes.',
    tags: ['Code Review', 'Runtime Health', 'Release Ready'],
  },
  {
    name: 'Exam+',
    slug: 'exam-plus',
    href: productUrls['Exam+'],
    category: 'LEARNING / PERFORMANCE',
    body: 'An engineering practice platform with timed exams, coding problems, study PDFs and peer discussion in one place, so students can see exactly where to focus before the exam begins.',
    tags: ['Timed Practice Exams', 'Coding in Python, Java or C++', 'PDF Library and Discussion', 'Progress Tracking by Subject'],
  },
]
