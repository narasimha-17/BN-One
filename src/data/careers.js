// Open roles shown on /careers.
// If the list is empty, the page shows a "no openings right now" message with a general-application option.
//
// APPLICATION_FORM_URL: paste the application form link here once you have it. While it is empty,
// every "Apply" button falls back to emailing HIRING_EMAIL.
export const HIRING_EMAIL = 'contact@agentosys.in'
export const APPLICATION_FORM_URL = ''

export const LOCATION = 'Rajahmundry, Andhra Pradesh'

export const internshipInfo = {
  stipend: '₹11,000 / month',
  duration: '6 months',
}

export const departments = ['Engineering', 'AI & Data', 'Cloud & DevOps', 'Design']
export const jobTypes = ['Full-time', 'Internship']

export const roles = [
  {
    id: 'forward-deployed-engineer',
    title: 'Forward Deployed Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: LOCATION,
    openings: 1,
    pay: '₹4 LPA',
    summary:
      'Work closely with clients to understand business requirements and turn them into practical technology solutions. Build, integrate and deploy AI-powered applications and custom software.',
    responsibilities: [
      'Understand client requirements and translate them into technical solutions',
      'Develop backend applications and REST APIs using Python, FastAPI or Flask',
      'Integrate LLMs, AI models, databases and third-party APIs',
      'Build AI agents, chatbots and business automation workflows',
      'Prototype, test, deploy and troubleshoot applications',
      'Collaborate with engineering teams and explain technical solutions to clients',
    ],
    requirements: [
      'Strong Python programming',
      'FastAPI / Flask and REST APIs',
      'SQL and database fundamentals',
      'Git and software development fundamentals',
      'Understanding of LLMs, RAG and AI integrations',
      'Strong analytical and communication skills',
    ],
    niceToHave: ['LangChain', 'LangGraph', 'MCP', 'Docker', 'React', 'Cloud platforms'],
  },
  {
    id: 'ai-native-developer',
    title: 'AI-Native Developer',
    department: 'AI & Data',
    type: 'Full-time',
    location: LOCATION,
    openings: 1,
    pay: '₹3.7 LPA',
    summary:
      'Design and develop modern full-stack applications with AI capabilities. Work on intelligent products, agentic workflows, SaaS platforms and AI-powered business solutions.',
    responsibilities: [
      'Develop responsive frontend and backend applications',
      'Build LLM-powered applications and agentic workflows',
      'Implement RAG pipelines, tool calling and AI integrations',
      'Develop APIs, dashboards, authentication and database integrations',
      'Work on scalable and reusable software components',
      'Test, debug and optimise application performance',
    ],
    requirements: [
      'Python and/or JavaScript / TypeScript',
      'React / Next.js fundamentals',
      'FastAPI / Flask or an equivalent backend framework',
      'SQL and database management',
      'REST APIs and Git',
      'Understanding of AI / LLMs and application development',
    ],
    niceToHave: ['LangChain', 'LangGraph', 'Vector databases', 'FAISS', 'Docker', 'Prompt engineering'],
  },
  {
    id: 'ai-ml-intern',
    title: 'AI / ML Intern',
    department: 'AI & Data',
    type: 'Internship',
    location: LOCATION,
    openings: 2,
    summary: 'Learn by building real machine-learning and AI features alongside the engineering team.',
    responsibilities: [
      'Develop and experiment with machine learning and deep learning models',
      'Perform data preprocessing, EDA and feature engineering',
      'Work with LLMs, RAG pipelines and AI applications',
      'Evaluate models and improve their performance',
      'Assist in building intelligent, AI-powered solutions',
    ],
    requirements: ['Python', 'NumPy and Pandas', 'scikit-learn', 'Machine learning fundamentals'],
    niceToHave: ['PyTorch', 'TensorFlow', 'Transformers', 'LangChain'],
  },
  {
    id: 'full-stack-intern',
    title: 'Full-Stack Developer Intern',
    department: 'Engineering',
    type: 'Internship',
    location: LOCATION,
    openings: 2,
    summary: 'Build real features across the frontend and backend of client and product work.',
    responsibilities: [
      'Develop frontend and backend components',
      'Build responsive web applications and dashboards',
      'Integrate REST APIs and databases',
      'Implement authentication and application workflows',
      'Debug, test and maintain applications',
    ],
    requirements: ['HTML, CSS and JavaScript', 'React', 'Python or Node.js', 'SQL and Git'],
    niceToHave: ['Next.js', 'FastAPI', 'Flask', 'Docker'],
  },
  {
    id: 'cloud-devops-intern',
    title: 'Cloud / DevOps Intern',
    department: 'Cloud & DevOps',
    type: 'Internship',
    location: LOCATION,
    openings: 1,
    summary: 'Learn how production software is deployed, monitored and kept running in the cloud.',
    responsibilities: [
      'Assist with application deployment and cloud infrastructure',
      'Work with Linux servers and cloud services',
      'Build and maintain CI/CD pipelines',
      'Work with Docker and deployment automation',
      'Monitor applications and troubleshoot infrastructure issues',
    ],
    requirements: ['Linux', 'Git', 'Networking fundamentals', 'Basic cloud knowledge'],
    niceToHave: ['AWS', 'Docker', 'GitHub Actions', 'Kubernetes', 'Terraform'],
  },
  {
    id: 'ui-ux-intern',
    title: 'UI / UX Developer Intern',
    department: 'Design',
    type: 'Internship',
    location: LOCATION,
    openings: 1,
    summary: 'Design and build clean, usable interfaces, taking ideas from sketch to working code.',
    responsibilities: [
      'Design modern, user-friendly web interfaces',
      'Create wireframes, prototypes and design systems',
      'Develop responsive layouts and reusable UI components',
      'Collaborate with developers to implement designs',
      'Improve user experience through usability and visual consistency',
    ],
    requirements: ['Figma', 'UI / UX fundamentals', 'Wireframing', 'Responsive design', 'Basic HTML / CSS'],
    niceToHave: ['React', 'Design systems', 'Prototyping'],
  },
]

export const reasons = [
  {
    title: 'A path to full-time',
    body: 'High-performing interns may be considered for full-time employment, based on performance and business requirements.',
  },
  {
    title: 'Real-world projects',
    body: 'Work on real products and client projects, not practice exercises.',
  },
  {
    title: 'AI, software and cloud',
    body: 'Hands-on experience across AI, software engineering and cloud technologies.',
  },
  {
    title: 'Mentorship and startup exposure',
    body: 'A collaborative engineering culture, with exposure to product development in a startup environment.',
  },
]

export const eligibility = [
  'Final-year students and recent graduates in CSE, IT, AI/ML or related disciplines are encouraged to apply for internships',
  'Practical project experience and a GitHub portfolio are an advantage',
  'Strong problem-solving and learning ability',
  'Full-time candidates should have the relevant technical skills and be available for the role',
]

export const process = [
  { step: 'Apply', body: 'Send your CV, portfolio or GitHub. A short note about yourself helps.' },
  { step: 'Intro chat', body: 'A relaxed conversation about your work, interests and what you want next.' },
  { step: 'Practical round', body: 'A focused task or discussion that reflects the real work of the role.' },
  { step: 'Offer', body: 'We decide quickly and tell you either way.' },
]
