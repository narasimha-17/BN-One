// Content for /resources. Edit or add entries here; the page builds itself from this file, the blog posts,
// the service catalogue and the product list.

// Interactive checklists. Ticks are saved in the visitor's browser.
export const checklists = [
  {
    id: 'project-brief',
    title: 'Project brief checklist',
    blurb: 'Everything worth writing down before you talk to a software team.',
    items: [
      'The problem you want to solve, in one or two sentences',
      'Who will use it, and what they do today instead',
      'What success looks like, and how you will measure it',
      'Must-have features versus nice-to-haves',
      'Systems it must connect to (payments, CRM, email, etc.)',
      'Any legal, security or compliance requirements',
      'Your ideal launch date and any fixed deadlines',
      'Your budget range and who approves decisions',
      'Examples of products you like (and dislike)',
    ],
  },
  {
    id: 'launch',
    title: 'Website launch checklist',
    blurb: 'A final pass to run before you go live.',
    items: [
      'All pages checked on phone, tablet and desktop',
      'Forms tested end to end, including the confirmation email',
      'Page titles and descriptions written for each page',
      'Images compressed and given descriptive alt text',
      'Privacy Policy, Terms and Cookie pages live',
      'Contact details and links checked',
      'A custom 404 page in place',
      'Backups and monitoring switched on',
      'HTTPS working and the old site redirected if replacing one',
    ],
  },
  {
    id: 'vendor',
    title: 'Choosing a software partner',
    blurb: 'Questions to ask any team you are thinking of hiring.',
    items: [
      'Who exactly will work on my project, and will they stay on it?',
      'Can I see similar work and speak to a past client?',
      'How do you handle changes to scope and price?',
      'Who owns the code and the data when we finish?',
      'How will you report progress, and how often?',
      'What happens after launch: support, fixes and hosting?',
      'How do you decide which technology to use?',
    ],
  },
]

// The three questions the page answers. Each one is a section on /resources and a jump card in the hero.
export const pillars = [
  {
    id: 'know',
    question: 'What we know',
    blurb: 'The areas we build in every day, and the lessons we share from real projects.',
    cta: 'See our expertise',
  },
  {
    id: 'learn',
    question: 'What you can learn',
    blurb: 'Learning paths, checklists and plain-language explainers you can use on your own.',
    cta: 'Start learning',
  },
  {
    id: 'use',
    question: 'How to use what we offer',
    blurb: 'Find the right product or service, and the quickest way to get started.',
    cta: 'Find your fit',
  },
]

// Learning paths: short, ordered routes through our own material, grouped by what the visitor is trying to do.
// Step kinds: 'article' (slug of a blog post), 'checklist' (id of a checklist above), 'service' (service slug),
// 'product' (product slug). note = one line on why the step matters.
export const learningPaths = [
  {
    id: 'plan',
    label: 'Planning a project',
    intro: 'Go from a rough idea to a clear brief any software team can quote against.',
    steps: [
      { kind: 'article', slug: 'build-vs-buy-software', note: 'Decide whether to build something custom at all.' },
      { kind: 'article', slug: 'choosing-the-right-tech-stack', note: 'Understand the constraints that should shape your technology.' },
      { kind: 'checklist', id: 'project-brief', note: 'Write everything down before your first call.' },
      { kind: 'article', slug: 'from-idea-to-launch-in-weeks', note: 'See how a focused build runs once you start.' },
    ],
  },
  {
    id: 'ai',
    label: 'Exploring AI',
    intro: 'Find a first AI project that pays off, and learn what it takes to run one.',
    steps: [
      { kind: 'article', slug: 'practical-ai-for-small-businesses', note: 'Where small teams should start, and what to skip.' },
      { kind: 'service', slug: 'ai-solutions', note: 'How we scope and prove a first use case.' },
      { kind: 'service', slug: 'rag-and-llm', note: 'Language-model tools that answer from your own documents.' },
      { kind: 'product', slug: 'agentcloud', note: 'See AI agents working with the tools you already use.' },
    ],
  },
  {
    id: 'web',
    label: 'Launching a website',
    intro: 'Build it fast, check it properly and go live with confidence.',
    steps: [
      { kind: 'article', slug: 'what-makes-a-fast-website', note: 'The few things that decide how fast a site feels.' },
      { kind: 'service', slug: 'web-applications', note: 'What we build, and how we approach it.' },
      { kind: 'checklist', id: 'launch', note: 'A final pass to run before you go live.' },
    ],
  },
  {
    id: 'student',
    label: 'Students and researchers',
    intro: 'Practise, study and publish with tools built for learners.',
    steps: [
      { kind: 'product', slug: 'exam-plus', note: 'Timed practice exams and coding problems, with progress by subject.' },
      { kind: 'product', slug: 'paperlabs', note: 'From literature discovery to a finished manuscript.' },
    ],
  },
]

// Plain-language explainers for terms visitors meet when talking to a software team.
export const glossary = [
  { term: 'AI agent', meaning: 'Software that uses an AI model and your tools to complete a multi-step task, and asks a person when it is unsure.' },
  { term: 'LLM', meaning: 'A large language model: an AI system trained on large amounts of text so it can understand and write language.' },
  { term: 'RAG', meaning: 'Retrieval-augmented generation. A language model looks up your own documents first and answers from them, so answers can be checked against sources.' },
  { term: 'Computer vision', meaning: 'Models that read images and video to inspect, detect or extract information, such as spotting a defect on a production line.' },
  { term: 'API', meaning: 'A set of rules that lets one piece of software talk to another, for example your website talking to a payment provider.' },
  { term: 'ERP', meaning: 'Enterprise resource planning: one connected system for finance, inventory, sales and people operations.' },
  { term: 'MVP', meaning: 'Minimum viable product. The smallest version that solves the core problem, released early so you can learn from real users.' },
  { term: 'CI/CD', meaning: 'Automated checks and releases, so every code change is tested and shipped in a repeatable, safe way.' },
]

// Who each product is for. Used by the service finder when it suggests a product.
export const productGuides = {
  agentcloud: {
    bestFor: 'Teams that want routine work handled by AI agents',
  },
  powerlens: {
    bestFor: 'Leaders who need one clear view of operational data',
  },
  'optiva-erp': {
    bestFor: 'Businesses running finance, inventory and sales in separate tools',
  },
  vibe: {
    bestFor: 'Brands that want a more engaging digital experience',
  },
  raftor: {
    bestFor: 'Engineering teams preparing a release',
  },
  'exam-plus': {
    bestFor: 'Engineering students preparing for exams',
  },
  paperlabs: {
    bestFor: 'Researchers going from idea to published paper',
  },
}

// "What are you trying to do?" finder: each goal points to the services (and optionally a product) that fit.
export const serviceGoals = [
  {
    id: 'automate',
    label: 'Automate repetitive work',
    services: ['business-automation', 'ai-workflows', 'data-automation'],
    product: 'agentcloud',
  },
  {
    id: 'ai',
    label: 'Add AI to my product or team',
    services: ['ai-solutions', 'ai-agents', 'rag-and-llm'],
    product: 'agentcloud',
  },
  {
    id: 'build',
    label: 'Build a website or app',
    services: ['web-applications', 'mobile-apps', 'custom-software'],
  },
  {
    id: 'connect',
    label: 'Connect my systems and data',
    services: ['apis-and-integrations', 'data-engineering', 'analytics'],
    product: 'powerlens',
  },
  {
    id: 'cloud',
    label: 'Move to the cloud',
    services: ['cloud-and-devops', 'data-engineering'],
  },
  {
    id: 'secure',
    label: 'Make it secure and reliable',
    services: ['cybersecurity', 'software-testing', 'code-analysis'],
    product: 'raftor',
  },
]

// How a visitor typically starts working with us.
export const startSteps = [
  { title: 'Write your brief', text: 'Use the project brief checklist to put the problem, users and deadline on one page.' },
  { title: 'Talk it through', text: 'Book a free consultation. We review the brief with you and suggest the simplest route.' },
  { title: 'We build, you review', text: 'Work moves in short steps with something to review every few days.' },
]
