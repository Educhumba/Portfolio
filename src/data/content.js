export const profile = {
  name: 'Edwin Chumba',
  role: 'AI Engineer · Full Stack Developer · Data Scientist',
  location: 'Nairobi, Kenya',
  email: 'edudechumba6767@gmail.com',
  phone: '+254 011 014 6704',
  portfolio: 'https://educhumba.github.io/Portfolio/',
  github: 'https://github.com/Educhumba',
  linkedin: '',
  instagram: '',
  x: '',
  facebook: '',
};

const socialLabels = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  x: 'X',
  facebook: 'Facebook',
};

export function getVisibleSocialLinks(source = profile) {
  return Object.keys(socialLabels)
    .filter((key) => {
      const href = source[key];
      return typeof href === 'string' && href.trim() !== '' && href.trim() !== '#';
    })
    .map((key) => ({
      id: key,
      label: socialLabels[key],
      href: source[key].trim(),
    }));
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const heroData = {
  name: profile.name,
  role: profile.role,
  availability: 'Available for product, contract, and collaborative engineering work',
  title:
    'I design, build, deploy and optimize intelligent digital products — from AI systems and data-driven applications to production-ready web platforms.',
  subtitle:
    'The practice covers AI engineering, machine learning, and data science alongside Laravel, PHP, React, FastAPI, databases, hosting, SEO, and production web systems.',
  capabilityLine: 'From architecture to deployment.',
  portraitCaption: 'Full-stack platforms · AI & data · Production deployment',
  actions: [
    { label: "Let's Work Together", href: '#contact', variant: 'primary' },
    { label: 'View work', href: '#work', variant: 'secondary' },
    { label: 'Download CV', href: 'Edwin_Chumba_CV.pdf', variant: 'secondary', download: true },
  ],
  stats: [
    { value: 'Production', label: 'Projects' },
    { value: 'Full stack', label: 'Web engineering' },
    { value: 'AI & data', label: 'Intelligent systems' },
    { value: 'Live', label: 'Deployments' },
  ],
};

export const aboutData = {
  description:
    'I build complete digital products. The work combines software engineering, artificial intelligence, data science, web development, backend systems, databases, infrastructure, deployment, SEO, and product-oriented problem solving. I moved from learning individual technologies to taking a system from idea through architecture, implementation, interface, hosting, and maintenance. Through independent development, client-oriented work, collaborative projects, and production deployments, that practice now includes organizational websites, Laravel and JavaScript business systems, AI assistants, and analytical tools. Full-stack web engineering sits alongside AI and data science — not behind them.',
  education: {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Egerton University',
    specialization: 'Data Science & Artificial Intelligence',
  },
  highlights: [
    {
      icon: 'ai',
      title: 'AI & Data Science',
      description:
        'Machine learning workflows, conversational assistants, retrieval systems, data cleaning, and analytical applications.',
    },
    {
      icon: 'web',
      title: 'Full Stack Web Engineering',
      description:
        'Laravel, PHP, React, REST APIs, databases, authentication, and responsive interfaces for production web systems.',
    },
    {
      icon: 'infra',
      title: 'Infrastructure & Digital Engineering',
      description:
        'Hosting, domains, DNS, deployment, technical SEO, performance, and search-friendly information architecture.',
    },
  ],
};

export const capabilitiesData = [
  {
    number: '01',
    title: 'AI & Intelligent Systems',
    description:
      'Machine learning workflows, AI assistants, RAG systems, document analysis, automation, and intelligent applications.',
    icon: 'ai',
  },
  {
    number: '02',
    title: 'Full Stack Web Applications',
    description:
      'Production-ready web applications using Laravel, PHP, React, JavaScript, REST APIs, databases, and responsive UI systems.',
    icon: 'web',
  },
  {
    number: '03',
    title: 'Business & Management Systems',
    description:
      'Custom platforms for organizations, including management systems, booking flows, financial workflows, property-related systems, business platforms, and internal tools.',
    icon: 'business',
  },
  {
    number: '04',
    title: 'Data & Analytics',
    description:
      'Data cleaning, exploratory analysis, visualization, feature engineering, predictive modelling, and analytical workflows.',
    icon: 'data',
  },
  {
    number: '05',
    title: 'Deployment & Infrastructure',
    description:
      'Practical production deployment: domains, DNS, shared hosting, cPanel, Laravel environments, GitHub Pages, environment configuration, and application maintenance.',
    icon: 'infra',
  },
  {
    number: '06',
    title: 'SEO & Digital Engineering',
    description:
      'Technical SEO, metadata, indexing, structured content, performance, responsive design, and search-friendly website architecture.',
    icon: 'seo',
  },
];

export const engineeringData = [
  {
    title: 'Product Engineering',
    steps: ['Architecture', 'Development', 'Testing', 'Deployment'],
  },
  {
    title: 'Web Engineering',
    steps: ['Frontend', 'Backend', 'Database', 'API', 'Authentication'],
  },
  {
    title: 'AI Engineering',
    steps: ['Data', 'Model', 'API', 'Retrieval', 'Application'],
  },
  {
    title: 'Production Engineering',
    steps: ['Domain', 'Hosting', 'DNS', 'Server', 'Deployment', 'Monitoring'],
  },
  {
    title: 'Digital Engineering',
    steps: ['SEO', 'Performance', 'Accessibility', 'Responsive design'],
  },
];

export const skillsData = [
  {
    title: 'Programming',
    icon: 'code',
    core: true,
    items: [
      { name: 'Python', strong: true },
      { name: 'JavaScript', strong: true },
      { name: 'PHP', strong: true },
      { name: 'SQL', strong: true },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'frontend',
    core: true,
    items: [
      { name: 'React', strong: true },
      { name: 'JavaScript', strong: true },
      { name: 'Tailwind CSS', strong: true },
      { name: 'Bootstrap' },
      { name: 'Responsive Design', strong: true },
      { name: 'UI/UX' },
      { name: 'Framer Motion' },
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    core: true,
    items: [
      { name: 'Laravel', strong: true },
      { name: 'PHP', strong: true },
      { name: 'FastAPI', strong: true },
      { name: 'REST APIs', strong: true },
      { name: 'API Integration' },
      { name: 'Authentication' },
      { name: 'Backend Architecture' },
    ],
  },
  {
    title: 'Data & AI',
    icon: 'data',
    core: true,
    items: [
      { name: 'Machine Learning', strong: true },
      { name: 'Scikit-learn', strong: true },
      { name: 'Pandas', strong: true },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Exploratory Data Analysis', strong: true },
      { name: 'Data Cleaning' },
      { name: 'Feature Engineering' },
      { name: 'Model Training' },
      { name: 'Predictive Analytics' },
      { name: 'RAG' },
      { name: 'Conversational AI' },
    ],
  },
  {
    title: 'AI technologies',
    icon: 'ai',
    items: [
      { name: 'LangChain', strong: true },
      { name: 'ChromaDB', strong: true },
      { name: 'Groq API' },
      { name: 'HuggingFace Embeddings' },
      { name: 'Dialogflow' },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    items: [
      { name: 'MySQL', strong: true },
      { name: 'PostgreSQL', strong: true },
      { name: 'ChromaDB' },
    ],
  },
  {
    title: 'DevOps & infrastructure',
    icon: 'infra',
    items: [
      { name: 'Git', strong: true },
      { name: 'GitHub', strong: true },
      { name: 'Hosting', strong: true },
      { name: 'DNS' },
      { name: 'Domain Configuration' },
      { name: 'Server Management' },
      { name: 'Deployment', strong: true },
      { name: 'Environment Configuration' },
      { name: 'cPanel' },
      { name: 'Shared Hosting' },
      { name: 'GitHub Pages' },
      { name: 'SSL / HTTPS' },
    ],
  },
  {
    title: 'Digital engineering',
    icon: 'seo',
    items: [
      { name: 'Technical SEO', strong: true },
      { name: 'On-page SEO' },
      { name: 'Responsive Web Design', strong: true },
      { name: 'Performance Optimization' },
      { name: 'Web Analytics' },
      { name: 'Production Website Deployment', strong: true },
    ],
  },
];

export const projectFilters = [
  'All',
  'Full Stack',
  'Web Development',
  'Laravel',
  'AI & Machine Learning',
  'Data Science',
  'Business Systems',
  'Collaborative Projects',
  'Infrastructure / Digital',
];

export const projectsData = [
  {
    number: '01',
    slug: 'premier-learning-center',
    title: 'Premier Learning Center',
    description:
      'A professional education organization website built for Premier Learning Center, with a strong focus on trust, responsive design, structured information architecture, accessibility, SEO readiness, and conversion-focused presentation.',
    longDescription:
      'The site is a complete public web platform: responsive layout, structured content, semantic markup, metadata, sitemap and robots considerations, and a production deployment on its own domain. It shows organizational web engineering — presentation, search readiness, and hosting — rather than an internal dashboard.',
    category: 'Web Development',
    categories: ['Web Development', 'Laravel', 'Full Stack', 'Infrastructure / Digital'],
    technologies: [
      'Laravel',
      'Blade',
      'Tailwind CSS',
      'PHP',
      'HTML',
      'CSS',
      'JavaScript',
      'SEO',
      'Responsive Web Design',
    ],
    image: 'premierlearning_preview.png',
    liveUrl: 'https://premierlearningcenter.co.ke/',
    githubUrl: '',
    status: 'Live',
    role: 'Independent Developer',
    featured: true,
    year: null,
    type: 'Web Platform',
  },
  {
    number: '02',
    slug: 'carhire-pro',
    title: 'CarHire-Pro',
    description:
      'A full-stack Laravel car hire management platform combining vehicle management, booking workflows, authentication, database integration, administrative functionality, and responsive user interfaces.',
    longDescription:
      'Featured Laravel project. The application brings fleet management, booking, authentication, and an administrative interface together in one database-backed product.',
    category: 'Full Stack',
    categories: ['Full Stack', 'Laravel', 'Business Systems'],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    image: 'carhirepro-preview.png',
    liveUrl: 'https://carhirepro.kesug.com/',
    githubUrl: 'https://github.com/Educhumba/CarHire-Pro',
    status: 'Live',
    role: 'Independent Developer',
    featured: true,
    featuredLabel: 'Featured Laravel',
    year: null,
    type: 'Business System',
  },
  {
    number: '03',
    slug: 'iccdk-website',
    title: 'ICCDK Website',
    description:
      'A modern organizational web platform designed with a strong focus on professional presentation, responsive UI/UX, structured content, accessibility, and production-ready frontend architecture.',
    longDescription:
      'A public organizational website for ICCDK, structured for membership, services, and institutional presentation rather than a single-page demo.',
    category: 'Web Development',
    categories: ['Web Development'],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    image: 'iccdk-preview.png',
    liveUrl: 'https://educhumba.github.io/ICCDK-Website/',
    githubUrl: 'https://github.com/Educhumba/ICCDK-Website',
    status: 'Live',
    role: 'Independent Developer',
    featured: true,
    year: null,
    type: 'Web Platform',
  },
  {
    number: '04',
    slug: 'ummabot',
    title: 'UmmaBot AI Insurance Assistant',
    description:
      'An AI-powered insurance assistant combining conversational AI, document retrieval, contextual interactions, and automated workflows.',
    longDescription:
      'The system connects a conversational interface to retrieval over documents, a FastAPI backend, and workflow automation. The engineering emphasis is RAG, document retrieval, model integration, and API-backed assistance.',
    category: 'AI & Machine Learning',
    categories: ['AI & Machine Learning', 'Full Stack'],
    technologies: [
      'Python',
      'FastAPI',
      'LangChain',
      'ChromaDB',
      'Groq API',
      'HuggingFace Embeddings',
      'Google Sheets API',
    ],
    image: 'ummabot-preview.png',
    liveUrl: 'https://educhumba.github.io/UmmaBot/',
    githubUrl: '',
    status: 'Live',
    role: 'Independent Developer',
    featured: true,
    year: null,
    type: 'AI System',
  },
  {
    number: '05',
    slug: 'finsight',
    title: 'FinSight',
    description:
      'A financial document analysis platform designed to process and analyze financial statement data, providing structured insights through a modern analytical interface.',
    longDescription:
      'FinSight ingests statement files, normalizes transactions, and presents cash-flow, spending, and reconciliation views. The implementation is deterministic data processing and backend architecture — document parsing, transformation, and analytical dashboards — not an AI or NLP product.',
    category: 'Data Science',
    categories: ['Data Science', 'Full Stack', 'Business Systems'],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vite'],
    image: 'finsight_preview.png',
    liveUrl: '',
    githubUrl: '',
    status: 'Private',
    role: 'Independent Developer',
    featured: true,
    year: null,
    type: 'Financial System',
  },
  {
    number: '06',
    slug: 'jana-prints',
    title: 'Jana Prints',
    description:
      'A professional commercial printing and branding platform developed collaboratively, combining business presentation, service discovery, product information, quote-request workflows, and responsive digital experiences.',
    longDescription:
      'Collaborative contribution to the Jana Prints platform. The live site presents corporate printing, marketing materials, packaging, large-format printing, branding, and promotional merchandise. This entry does not claim sole authorship of every part of the product.',
    category: 'Web Development',
    categories: ['Web Development', 'Collaborative Projects'],
    technologies: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Alpine.js'],
    image: 'janaprints_preview.png',
    liveUrl: 'https://janaprints.co.ke/',
    githubUrl: '',
    status: 'Live',
    role: 'Collaborative Developer',
    featured: true,
    year: null,
    type: 'Web Platform',
  },
  {
    number: '07',
    slug: 'amprovans-motors',
    title: 'Amprovans Motors',
    description:
      'A business-oriented vehicle management platform designed to support vehicle operations, administrative workflows, responsive dashboards, and database-backed management functionality.',
    longDescription:
      'The application covers a public vehicle catalogue and an administrative side for vehicle records, with authentication and a MySQL-backed API. The verified codebase for this interface is JavaScript with Node.js and Express.',
    category: 'Business Systems',
    categories: ['Business Systems', 'Full Stack'],
    technologies: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'HTML', 'CSS'],
    image: 'amprovans-preview.png',
    liveUrl: '',
    githubUrl: '',
    status: 'Completed',
    role: 'Independent Developer',
    featured: true,
    year: null,
    type: 'Business System',
  },
  {
    number: '08',
    slug: 'spareme',
    title: 'SpareMe',
    description:
      'A multi-vendor automotive parts marketplace with vehicle-aware search, seller and mechanic pathways, and a responsive storefront, published as a live product demo.',
    longDescription:
      'Local work for SpareMe includes a Laravel and Blade application and a React / Next.js interface. The live demo is linked; a public GitHub repository is not listed here.',
    category: 'Full Stack',
    categories: ['Full Stack', 'Laravel', 'Business Systems'],
    technologies: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'React', 'Next.js'],
    image: 'spareme-preview.png',
    liveUrl: 'https://demo.spareme.co.ke/',
    githubUrl: '',
    status: 'Live',
    role: 'Independent Developer',
    featured: false,
    year: null,
    type: 'Web Platform',
  },
  {
    number: '09',
    slug: 'microfinance-systems',
    title: 'Microfinance Systems',
    description:
      'Collaborative software engineering on database-driven systems for microfinance operations, spanning business and financial workflows and administrative interfaces.',
    longDescription:
      'Shared engineering work on Laravel systems used for microfinance operations, including client records, lending workflows, payments, collections, and administrative interfaces. Organization names are omitted. This entry describes participation in the systems, not sole authorship of every module.',
    category: 'Business Systems',
    categories: ['Business Systems', 'Collaborative Projects', 'Laravel', 'Full Stack'],
    technologies: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Alpine.js'],
    image: '',
    liveUrl: '',
    githubUrl: '',
    status: 'Collaborative',
    role: 'Collaborative Developer',
    featured: false,
    year: null,
    type: 'Business System',
  },
  {
    number: '10',
    slug: 'property-management',
    title: 'Property Management Systems',
    description:
      'Collaborative work on database-driven property management software covering property operations, management workflows, business data, and administrative interfaces.',
    longDescription:
      'The local system includes property operations together with financial workflows such as invoicing and payment records. No organization name is attached. The entry reflects collaborative engineering rather than an independent product launch.',
    category: 'Business Systems',
    categories: ['Business Systems', 'Collaborative Projects', 'Laravel', 'Full Stack'],
    technologies: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'JavaScript', 'Alpine.js'],
    image: '',
    liveUrl: '',
    githubUrl: '',
    status: 'Collaborative',
    role: 'Collaborative Developer',
    featured: false,
    year: null,
    type: 'Business System',
  },
  {
    number: '11',
    slug: 'chamaa',
    title: 'Chamaa / Merry-Go-Round System',
    description:
      'Collaborative work toward a digital platform for organizing Chamaa and merry-go-round operations and related administrative processes.',
    longDescription: '',
    category: 'Business Systems',
    categories: ['Business Systems', 'Collaborative Projects'],
    technologies: [],
    image: '',
    liveUrl: '',
    githubUrl: '',
    status: 'Private',
    role: 'Collaborative Developer',
    featured: false,
    year: null,
    type: 'Business System',
  },
  {
    number: '12',
    slug: 'quickdelicacies',
    title: 'QuickDelicacies',
    description:
      'A food-ordering system with menu, cart, and order flows, used here as evidence of application structure, interface work, and database-backed design.',
    longDescription:
      'An earlier full-stack build covering a public ordering interface and a Node.js API with MySQL tables for users, menu items, carts, and orders. It is kept in the library at a lower visual priority.',
    category: 'Full Stack',
    categories: ['Full Stack', 'Business Systems'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    image: '',
    liveUrl: '',
    githubUrl: '',
    status: 'Completed',
    role: 'Independent Developer',
    featured: false,
    year: null,
    type: 'Web Platform',
  },
  {
    number: '13',
    slug: 'machine-learning-data-science',
    title: 'Machine Learning & Data Science',
    description:
      'A collection of practical data work — not a single product — covering cleaning, exploration, visualization, feature engineering, and predictive modeling.',
    longDescription:
      'The body of work includes data cleaning, exploratory data analysis, visualization, feature engineering, classification, regression, model training, model evaluation, and predictive analytics with the Python data stack.',
    category: 'Data Science',
    categories: ['Data Science', 'AI & Machine Learning'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    image: '',
    liveUrl: '',
    githubUrl: '',
    status: 'Completed',
    role: 'Independent Developer',
    featured: false,
    year: null,
    type: 'Data Science Work',
  },
];

export const githubNote =
  'More projects are available on GitHub, including private and client work that cannot be publicly displayed. Public repositories are linked only where a specific project repository exists. Not every repository is a production system.';

export const certificationsData = {
  credentials: [
    {
      issuer: 'Kaggle',
      credential: 'Data Science Learning & Certification',
      year: null,
      url: '',
    },
  ],
  learning: [
    'Machine learning practice projects',
    'Python for data analysis',
    'Exploratory data analysis',
    'Frontend and backend development',
    'REST API engineering',
  ],
};

export const experienceData = [
  {
    title: 'Web Development Foundations',
    period: '2022–2023',
    description:
      'Built responsive pages and interactive interfaces with HTML, CSS, and JavaScript, and learned how structure, layout, and usability hold a site together.',
  },
  {
    title: 'Data Science & Machine Learning',
    period: '2023',
    description:
      'Moved into Python analytics: data cleaning, exploratory analysis, visualization, feature engineering, and predictive modeling.',
  },
  {
    title: 'Full Stack Application Development',
    period: '2023–2024',
    description:
      'Developed database-backed applications with authentication, APIs, and responsive interfaces, including booking, management, and organizational web systems.',
  },
  {
    title: 'AI Engineering & Intelligent Systems',
    period: '2024',
    description:
      'Built conversational assistants that combine language models, document retrieval, and backend APIs.',
  },
  {
    title: 'Production Systems, Laravel, Deployment & Digital Engineering',
    period: '2024–Present',
    description:
      'Shipped Laravel and public websites through domain setup, hosting, DNS, environment configuration, and technical SEO for live sites.',
  },
  {
    title: 'Professional & Collaborative Software Projects',
    period: '2025–Present',
    description:
      'Contributed to independent and collaborative software for organizations: education and commercial websites, business systems, and financial operations platforms.',
  },
];

export const contactData = {
  description:
    'If you need a web platform, a business system, an AI feature, or help taking a product through to deployment, send a note. I read every message.',
  // Optional: free access key from https://web3forms.com (enter edudechumba6767@gmail.com).
  // When set, the contact form sends via Web3Forms without a page redirect.
  // Leave empty to use FormSubmit (native POST — works on GitHub Pages).
  web3formsAccessKey: '',
};
