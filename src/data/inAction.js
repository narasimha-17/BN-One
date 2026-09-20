// Content for the "How we help, in practice" section on the home page.
// Each area has 4 sections, and each section has 3 scenarios. These are general descriptions of the kind of
// work we do. Edit freely to match your real offerings.
const s = (title, gaps, solution) => ({ title, gaps, solution })

export const actionTabs = [
  {
    id: 'web',
    label: 'Web & Product Engineering',
    groups: [
      {
        name: 'Websites & Web Apps',
        items: [
          s('Launching a fast, modern website', ['Is your current site slow or hard to update?', 'Does it look different on phones than on desktops?', 'Are visitors leaving before they contact you?'], 'We design and build a responsive site that loads quickly, is easy to manage and turns visitors into enquiries, with clear next steps on every page.'),
          s('Turning an idea into a working web app', ['Do you have an idea but no technical team?', 'Is the scope growing faster than the plan?'], 'We scope the smallest useful version, build it in short cycles you can review, and launch it, then grow it based on real usage.'),
          s('Rebuilding an outdated site', ['Is the old site built on tools nobody supports?', 'Would a redesign risk your search rankings?'], 'We migrate content carefully, keep your important addresses working and move you to a modern, maintainable foundation.'),
        ],
      },
      {
        name: 'Design & Experience',
        items: [
          s('A consistent, usable interface', ['Do screens look different from page to page?', 'Are users confused by how your product works?'], 'We create a simple design system and clear flows so every screen feels familiar and easy to use.'),
          s('Simplifying a complicated workflow', ['Do users need training to complete basic tasks?', 'Are support requests full of "how do I" questions?'], 'We map the journey, remove unnecessary steps and redesign the screens around what people are trying to get done.'),
          s('Making products accessible to everyone', ['Can people with disabilities use your product?', 'Is text hard to read on some screens?'], 'We apply accessibility practices such as clear contrast, keyboard support and readable structure from the start.'),
        ],
      },
      {
        name: 'Performance & Quality',
        items: [
          s('Making an existing product faster', ['Is the product slowing down as it grows?', 'Do pages take too long to load?'], 'We measure where time is lost, fix the biggest bottlenecks and set performance targets so speed does not slip again.'),
          s('Making releases routine, not risky', ['Do releases feel stressful?', 'Do bugs reach users before you find them?'], 'We add automated tests and a repeatable release process so changes ship with confidence.'),
          s('Cleaning up technical debt', ['Is every change slower than the last?', 'Is the code hard for new people to understand?'], 'We refactor the riskiest areas in small steps, document what remains and leave the codebase easier to work in.'),
        ],
      },
      {
        name: 'Integrations & APIs',
        items: [
          s('Connecting your product to other services', ['Do you need payments, email or maps in your product?', 'Is each integration a one-off hack?'], 'We integrate third-party services cleanly behind a stable interface, with error handling and monitoring.'),
          s('Building an API others can rely on', ['Do partners need to connect to your data?', 'Do changes keep breaking the apps that use it?'], 'We design a clear, versioned API with documentation, so other teams can build on it safely.'),
          s('Syncing data between systems', ['Do systems show different numbers for the same thing?', 'Is data copied by hand?'], 'We build reliable syncing that keeps records consistent and flags conflicts instead of hiding them.'),
        ],
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Data',
    groups: [
      {
        name: 'AI Integration',
        items: [
          s('Adding AI to a repetitive task', ['Does your team spend hours sorting or reading documents?', 'Are simple requests taking too long to answer?'], 'We pick one well-defined task, build an AI-assisted workflow with a person in the loop, and measure the time it saves before expanding.'),
          s('An assistant that knows your content', ['Do people search long documents for answers?', 'Do the same questions come up again and again?'], 'We build an assistant grounded in your own documents, with sources shown so answers can be checked.'),
          s('Automating classification and routing', ['Is incoming work sorted by hand?', 'Do items reach the wrong team?'], 'We train a classifier on your examples to tag and route items automatically, with a review step for uncertain cases.'),
        ],
      },
      {
        name: 'Computer Vision',
        items: [
          s('Computer vision for your images', ['Are inspections or checks done by eye?', 'Do you have images but no way to use them?'], 'We train and deploy a model for your specific images, wrapped in a simple tool your team can use every day.'),
          s('Reading and extracting from documents', ['Is data typed in from paper or scans?', 'Do forms arrive in many formats?'], 'We extract the fields you need from scans and PDFs, validate them and send them straight to your systems.'),
          s('Detecting defects or anomalies', ['Are faults found too late?', 'Do results vary from person to person?'], 'We build a model that flags likely problems consistently and shows why, so people can confirm quickly.'),
        ],
      },
      {
        name: 'Data & Analytics',
        items: [
          s('Turning scattered data into decisions', ['Is your data spread across spreadsheets and tools?', 'Do reports take days to prepare?'], 'We connect your sources, clean the data and build live dashboards so the numbers you need are always current.'),
          s('Forecasting demand and trends', ['Do you plan on gut feel?', 'Are you over or under stocked?'], 'We build forecasts from your history and show the range of likely outcomes, not just one number.'),
          s('Finding what drives results', ['Do you know what works, but not why?', 'Are you unsure which metrics matter?'], 'We analyse your data to identify the factors that move your outcomes and turn them into simple recommendations.'),
        ],
      },
      {
        name: 'Data Foundations',
        items: [
          s('Cleaning and organising messy data', ['Are there duplicates and missing values?', 'Do teams define the same term differently?'], 'We clean, standardise and document your data so everyone works from one trustworthy source.'),
          s('Building a reliable data pipeline', ['Do reports break when data changes?', 'Are updates done by hand?'], 'We automate collecting and preparing data on a schedule, with checks that alert you when something looks wrong.'),
          s('Getting data ready for AI', ['Is your data too limited or inconsistent for AI?', 'Are you unsure where to start?'], 'We assess what you have, close the gaps and prepare it so future AI projects start on solid ground.'),
        ],
      },
    ],
  },
  {
    id: 'business',
    label: 'Business Systems',
    groups: [
      {
        name: 'Automation & Operations',
        items: [
          s('Replacing manual, error-prone processes', ['Is important work tracked in spreadsheets or email?', 'Do handoffs between teams get lost?'], 'We build a purpose-made internal tool that follows your process, with roles, approvals and a clear record of what happened.'),
          s('Connecting the tools you already use', ['Are you copying data between systems by hand?', 'Do your tools disagree with each other?'], 'We integrate your existing systems so information flows automatically and stays consistent.'),
          s('Automating reports and reminders', ['Does someone compile the same report every week?', 'Do deadlines get missed?'], 'We automate recurring reports and notifications so they arrive on time without anyone remembering to send them.'),
        ],
      },
      {
        name: 'Customer Portals & Commerce',
        items: [
          s('A portal for your customers', ['Do customers email you for every status update?', 'Is information shared by attachment?'], 'We build a secure portal where customers can see their orders, documents and requests in one place.'),
          s('Online booking and payments', ['Are bookings taken by phone and message?', 'Is taking payment slow or manual?'], 'We build simple booking and payment flows that confirm automatically and update your records.'),
          s('An inventory or catalogue system', ['Is stock tracked in different places?', 'Do you sell items you no longer have?'], 'We centralise products and stock levels so what customers see always matches what you have.'),
        ],
      },
      {
        name: 'Security & Reliability',
        items: [
          s('Protecting access and keeping systems running', ['Is access to sensitive data too broad?', 'What happens if a system goes down?'], 'We add proper authentication and roles, backups and monitoring, so problems are prevented or caught early.'),
          s('Preparing for growth in traffic', ['Does the system slow down at busy times?', 'Have outages cost you customers?'], 'We test under load, remove the weak points and set up scaling so busy periods stay smooth.'),
          s('Meeting compliance expectations', ['Do customers ask about your data handling?', 'Is there a record of who changed what?'], 'We add audit trails, access controls and documentation that make it straightforward to answer those questions.'),
        ],
      },
      {
        name: 'Support & Continuous Improvement',
        items: [
          s('Ongoing care after launch', ['Who fixes issues once the project ends?', 'Are updates being neglected?'], 'We provide monitoring, fixes and regular updates with clear response times, so the system stays healthy.'),
          s('Improving from real usage', ['Do you know how people actually use your product?', 'Are you guessing what to build next?'], 'We track meaningful usage, review it with you and prioritise improvements that deliver the most value.'),
          s('Handing over and training your team', ['Are you dependent on outside people to change anything?', 'Is there no documentation?'], 'We document the system and train your team so you can run and extend it with confidence.'),
        ],
      },
    ],
  },
]
