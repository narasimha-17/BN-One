// Blog posts shown on /blog and /blog/:slug.
// These are STARTER articles written as general guidance. Review and edit them, or replace them with your
// own writing. To add a post, copy an entry, give it a unique slug, and add it to the list (newest first).
// body blocks: { type: 'p', text } | { type: 'h2', text } | { type: 'ul', items: [...] }
export const categories = ['Engineering', 'AI & Data', 'Product', 'Business']

export const posts = [
  {
    slug: 'choosing-the-right-tech-stack',
    title: 'How to choose the right tech stack for your project',
    excerpt: 'Start with the problem, not the tool. A practical way to pick a language and stack you will not regret.',
    category: 'Engineering',
    date: '2026-09-15',
    readTime: 5,
    author: 'Agentosys Team',
    body: [
      { type: 'p', text: 'Every project starts with the same tempting question: which framework should we use? It is the wrong first question. The right one is: what does this product need to do, for whom, and under what constraints?' },
      { type: 'h2', text: 'Start with constraints' },
      { type: 'p', text: 'Write down what is fixed before you compare tools. Team skills, hiring market, deadlines, budget, compliance needs and existing systems all narrow the field quickly. A stack your team already knows will usually beat a fashionable one they have to learn under pressure.' },
      { type: 'h2', text: 'Questions worth asking' },
      { type: 'ul', items: ['How much traffic and data do we expect in the first year?', 'Does it need real-time updates, offline use or heavy computation?', 'Who will maintain it after launch, and what do they know?', 'What does it have to integrate with?'] },
      { type: 'h2', text: 'Prefer boring where it counts' },
      { type: 'p', text: 'Use well-supported, widely understood tools for the parts that must not fail, such as databases and authentication. Save experimentation for the places where a wrong choice is cheap to reverse.' },
      { type: 'p', text: 'This is why we stay language agnostic. The best stack is the one that fits your problem and your team, and we choose it with you rather than for you.' },
    ],
  },
  {
    slug: 'practical-ai-for-small-businesses',
    title: 'Practical AI for small businesses: where to start',
    excerpt: 'You do not need a research team. Here is how to find the first AI project that actually pays off.',
    category: 'AI & Data',
    date: '2026-09-08',
    readTime: 6,
    author: 'Agentosys Team',
    body: [
      { type: 'p', text: 'AI can feel like a big, expensive bet. In practice, the most useful first projects are small, specific and tied to a task people already do every day.' },
      { type: 'h2', text: 'Look for repetitive, rules-light work' },
      { type: 'p', text: 'Good candidates are tasks that are repetitive, involve reading or classifying information, and where a first draft from a machine saves real time: sorting support requests, extracting details from documents, summarising long text, or flagging unusual records.' },
      { type: 'h2', text: 'A simple starting checklist' },
      { type: 'ul', items: ['Pick one task, not a whole department.', 'Measure how long it takes today, so you can prove the gain.', 'Keep a person in the loop until you trust the results.', 'Check the quality of your data before you build anything.'] },
      { type: 'h2', text: 'Data quality comes first' },
      { type: 'p', text: 'Most disappointing AI projects fail because of messy or missing data, not because of the model. Time spent cleaning and organising your data is rarely wasted, and it improves everything you build later.' },
    ],
  },
  {
    slug: 'what-makes-a-fast-website',
    title: 'What actually makes a website feel fast',
    excerpt: 'Speed is a product feature. The handful of habits that matter most for real users.',
    category: 'Engineering',
    date: '2026-08-28',
    readTime: 4,
    author: 'Agentosys Team',
    body: [
      { type: 'p', text: 'Visitors do not measure milliseconds. They notice whether a page responds immediately and whether it jumps around while loading. Both are within your control.' },
      { type: 'h2', text: 'The habits that matter most' },
      { type: 'ul', items: ['Compress and correctly size every image.', 'Ship less JavaScript and load the rest only when needed.', 'Reserve space for images and embeds so the layout does not shift.', 'Cache what does not change, and serve it close to the user.'] },
      { type: 'h2', text: 'Measure on real devices' },
      { type: 'p', text: 'A fast laptop on office wifi hides problems. Test on a mid-range phone with a slower connection, because that is closer to what many of your customers use.' },
    ],
  },
  {
    slug: 'from-idea-to-launch-in-weeks',
    title: 'From idea to launch: how a focused build works',
    excerpt: 'How short, well-scoped cycles help small teams ship real products without losing control.',
    category: 'Product',
    date: '2026-08-19',
    readTime: 5,
    author: 'Agentosys Team',
    body: [
      { type: 'p', text: 'Big launches usually slip because the scope keeps growing. A focused build keeps the scope small enough to finish and learn from.' },
      { type: 'h2', text: 'Our usual rhythm' },
      { type: 'ul', items: ['Discovery: agree the problem, users and what success looks like.', 'Design: sketch the flow and data before writing code.', 'Build: short cycles with something reviewable every few days.', 'Launch and support: release carefully, then watch and improve.'] },
      { type: 'h2', text: 'Cut ruthlessly, then add' },
      { type: 'p', text: 'The first version should do one thing well. Once real people use it, you learn what to add next, and you add it with evidence instead of guesses.' },
    ],
  },
  {
    slug: 'build-vs-buy-software',
    title: 'Build or buy? A simple way to decide',
    excerpt: 'Off-the-shelf tools are great until they are not. How to tell when custom software is worth it.',
    category: 'Business',
    date: '2026-08-05',
    readTime: 4,
    author: 'Agentosys Team',
    body: [
      { type: 'p', text: 'Buying software is faster and cheaper to start. Building gives you a perfect fit and full control. Neither is always right.' },
      { type: 'h2', text: 'Buy when' },
      { type: 'ul', items: ['The problem is common and a good product already solves it.', 'You need to be running quickly.', 'The tool is not a source of competitive advantage.'] },
      { type: 'h2', text: 'Build when' },
      { type: 'ul', items: ['Your process is unusual and tools force awkward workarounds.', 'You are stitching several products together with manual effort.', 'The system is central to how you win customers.'] },
      { type: 'p', text: 'A good middle path is to start with an existing tool, note where it hurts, and build only the parts that truly need to be yours.' },
    ],
  },
]

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
