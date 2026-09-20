// Interactive checklists shown on /resources. Edit or add more; ticks are saved in the visitor's browser.
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
