// Open roles shown on /careers.
// These are SAMPLE roles based on the kind of work Agentosys does. Edit, add or delete them to match
// what you are actually hiring for. If the list is empty, the page shows a "no openings right now"
// message with a general-application option instead.
export const HIRING_EMAIL = 'bnst17042006@gmail.com'

export const departments = ['Engineering', 'AI & Data', 'Design']
export const jobTypes = ['Full-time', 'Internship']

export const roles = [
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hyderabad, India',
    summary: 'Build fast, polished interfaces for client products using React and Tailwind CSS.',
    responsibilities: [
      'Turn designs into responsive, accessible React interfaces',
      'Own features from first sketch to production release',
      'Review code and keep performance and quality high',
    ],
    requirements: [
      'Solid JavaScript and React fundamentals',
      'Good eye for layout, spacing and detail',
      'Comfortable working directly with clients and teammates',
    ],
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hyderabad, India',
    summary: 'Design APIs, data models and services that stay reliable under real traffic.',
    responsibilities: [
      'Build and maintain APIs and background services',
      'Model data and keep databases fast and safe',
      'Monitor, debug and improve production systems',
    ],
    requirements: [
      'Strong in at least one backend language (Python, Node.js or similar)',
      'Experience with SQL databases',
      'Care about clean, testable code',
    ],
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI / ML Engineer',
    department: 'AI & Data',
    type: 'Full-time',
    location: 'Hyderabad, India',
    summary: 'Ship practical machine-learning features, from data pipelines to deployed models.',
    responsibilities: [
      'Prototype and productionise ML and computer-vision models',
      'Build data pipelines and evaluation tooling',
      'Explain results clearly to non-technical teammates',
    ],
    requirements: [
      'Hands-on Python with ML tooling (TensorFlow, PyTorch or scikit-learn)',
      'Understanding of model evaluation and data quality',
      'Curiosity about applying AI to real business problems',
    ],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI / UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Hyderabad, India',
    summary: 'Shape clean, usable product experiences from research through to final visuals.',
    responsibilities: [
      'Create flows, wireframes and high-fidelity designs',
      'Work with engineers to ship what you design',
      'Maintain a consistent visual system across products',
    ],
    requirements: [
      'A portfolio showing real product or web design work',
      'Proficiency in Figma or a similar tool',
      'Clear thinking about users and usability',
    ],
  },
  {
    id: 'software-intern',
    title: 'Software Engineering Intern',
    department: 'Engineering',
    type: 'Internship',
    location: 'Hyderabad, India',
    summary: 'Learn by building. Work on real projects alongside the founding team.',
    responsibilities: [
      'Contribute to live client and product work',
      'Get code reviews and mentoring from senior engineers',
      'Present what you built to the team',
    ],
    requirements: [
      'Studying or recently graduated in a technical field',
      'Basics of programming in any language',
      'Eagerness to learn and ask questions',
    ],
  },
]

export const reasons = [
  {
    title: 'Real ownership',
    body: 'A small team means your work ships and your decisions matter, from the first week.',
  },
  {
    title: 'Projects across industries',
    body: 'Healthcare, finance, logistics, education and more. You will not get bored.',
  },
  {
    title: 'Any language, right tool',
    body: 'We pick the best tool for the problem, so you keep learning instead of repeating one stack.',
  },
  {
    title: 'Direct access',
    body: 'Work side by side with the founders. No layers of management between you and the product.',
  },
]

export const process = [
  { step: 'Apply', body: 'Send your CV, portfolio or GitHub. A short note about yourself helps.' },
  { step: 'Intro chat', body: 'A relaxed conversation about your work, interests and what you want next.' },
  { step: 'Practical round', body: 'A focused task or discussion that reflects the real work of the role.' },
  { step: 'Offer', body: 'We decide quickly and tell you either way.' },
]
