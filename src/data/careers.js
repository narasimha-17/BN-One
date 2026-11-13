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
    summary: 'Work directly with clients to turn their problems into working software, from first call to production.',
    responsibilities: [
      'Understand client needs and shape them into technical solutions',
      'Build, integrate and deploy features on real client projects',
      'Stay close to users after launch and keep improving what you shipped',
    ],
    requirements: [
      'Solid programming fundamentals and the habit of building things',
      'Clear communication with both technical and non-technical people',
      'Comfortable learning new tools and domains quickly',
    ],
  },
  {
    id: 'ai-native-developer',
    title: 'AI-Native Developer',
    department: 'AI & Data',
    type: 'Full-time',
    location: LOCATION,
    openings: 1,
    pay: '₹3.7 LPA',
    summary: 'Build AI-powered applications and intelligent automation, using AI tools as part of how you work every day.',
    responsibilities: [
      'Build applications and automations on top of modern AI models and APIs',
      'Use AI-assisted development to ship faster without lowering quality',
      'Test, evaluate and improve AI features for real-world reliability',
    ],
    requirements: [
      'Good grounding in programming (Python or JavaScript preferred)',
      'Hands-on experience building with LLMs or AI APIs, even on personal projects',
      'Curiosity and a bias for shipping working products',
    ],
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
      'Prototype AI and ML features on live projects',
      'Prepare data and help evaluate model results',
      'Present what you built and learned to the team',
    ],
    requirements: [
      'Basics of Python and machine learning concepts',
      'Studying or recently graduated in a technical field',
      'Eagerness to learn, ask questions and build',
    ],
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
      'Contribute to web applications, from interface to API',
      'Get code reviews and mentoring from senior engineers',
      'Ship work that real users will see',
    ],
    requirements: [
      'Basics of web development (HTML, CSS, JavaScript; React or Node.js is a plus)',
      'Studying or recently graduated in a technical field',
      'A project or two you built yourself',
    ],
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
      'Help set up deployments, CI/CD pipelines and environments',
      'Work with cloud services and monitoring tools',
      'Document and improve how the team ships software',
    ],
    requirements: [
      'Basic understanding of Linux, Git and cloud concepts',
      'Studying or recently graduated in a technical field',
      'Interest in automation and infrastructure',
    ],
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
      'Create wireframes and designs, and turn them into front-end code',
      'Work with engineers to ship what you design',
      'Help keep a consistent visual system across products',
    ],
    requirements: [
      'Working knowledge of HTML and CSS, and a design tool such as Figma',
      'A few design or front-end samples to show',
      'Attention to detail and care about users',
    ],
  },
]

export const reasons = [
  {
    title: 'A path to full-time',
    body: 'High-performing interns are considered for full-time roles with the team.',
  },
  {
    title: 'Real-world projects',
    body: 'Work on live client and product projects, not practice exercises.',
  },
  {
    title: 'AI, software and cloud',
    body: 'Hands-on experience across AI, software engineering and cloud technologies.',
  },
  {
    title: 'Mentorship',
    body: 'Learn directly from the founders and senior engineers, with regular code reviews and feedback.',
  },
]

export const process = [
  { step: 'Apply', body: 'Send your CV, portfolio or GitHub. A short note about yourself helps.' },
  { step: 'Intro chat', body: 'A relaxed conversation about your work, interests and what you want next.' },
  { step: 'Practical round', body: 'A focused task or discussion that reflects the real work of the role.' },
  { step: 'Offer', body: 'We decide quickly and tell you either way.' },
]
