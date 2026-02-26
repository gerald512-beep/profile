// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'gerald512-beep', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repos',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [
            'gerald512-beep/profile',
            'gerald512-beep/chatapp_section_02',
            'gerald512-beep/mill-river-redevelopment',
            'gerald512-beep/calisthenicstutor',
          ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AI Calisthenics Tutor (2026)',
          description:
            'An AI powered coaching app that helps people improve bodyweight skills like pull ups, push ups, dips, and progressions by turning a simple phone video into actionable feedback (Yale Tsai CITY Launch Pad program)',
          imageUrl: 'img/8c43624b-1cab-46d6-8ae0-178ccfe4616a.png',
          link: 'https://gerald512-beep.github.io/calisthenicstutor/',
        },
        {
          title: 'Mill River Municipal Development Plan (2026)',
          description:
            'The Mill River Development in New Haven is a major initiative to transform a formerly industrial, contaminated waterfront into a vibrant, mixed-use district, supported by $5 million in 2024 state funding. (Yale Inclusive Fellowship Program)',
          imageUrl: 'img/THC-L-English-Station_01_b0da68.jpg',
          link: 'https://som.yale.edu/story/2025/inclusive-growth-fellowship-welcomes-third-cohort',
        },
      ],
    },
  },
  rightColumnOrder: ['projects', 'github', 'publications', 'blog'],
  seo: {
    title: 'Portfolio of Gerald Velasquez',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'gerald512',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'gerald.velasquez@yale.edu',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'AI Engineering',
    'RAG',
    'Agentic Systems',
    'System Architecture',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Agile',
  ],
  experiences: [
    {
      company: 'AMAZON.COM, INC',
      position: 'Sr. Product Manager Technical Intern ',
      from: 'Jun 2025',
      to: 'Aug 2025',
      companyLink: 'https://amazon.com',
    },
    {
      company: 'ENTEL PERU ',
      position: 'Head of Multichannel Strategy ',
      from: 'July 2024',
      to: 'January 2021',
      companyLink: 'https://entel.pe',
    },
    {
      company: 'ENTEL PERU ',
      position: 'Quality Manager – B2B Customers',
      from: 'July 2014',
      to: 'December 2020',
      companyLink: 'https://entel.pe',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'YALE SCHOOL OF MANAGEMENT',
      degree: 'MBA',
      from: '2024',
      to: '2026',
    },
    {
      institution: 'UNIVERSIDAD NACIONAL DE INGENIERIA',
      degree: 'Systems Engineering',
      from: '2006',
      to: '2011',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
