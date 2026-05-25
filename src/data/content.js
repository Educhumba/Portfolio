export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const heroData = {
  name: 'Edwin Chumba',
  title: 'I design and ship intelligent products that feel premium and perform at scale.',
  subtitle:
    'Full-stack engineer and AI builder based in Nairobi — from multi-vendor marketplaces and Laravel platforms to RAG chatbots and data pipelines.',
  role: 'AI Engineer · Full Stack Developer · Data Scientist',
  availability: 'Open to freelance, contract & full-time roles',
  actions: [
    { label: 'View selected work', href: '#projects', variant: 'primary' },
    { label: 'Download CV', href: 'Edwin_Chumba_CV.pdf', variant: 'secondary' }
  ],
  stats: [
    { value: '10+', label: 'Live deployments' },
    { value: '50+', label: 'Projects delivered' },
    { value: '3+', label: 'Years building' }
  ]
};

export const aboutData = {
  description:
    'I am a passionate web developer and aspiring AI engineer focused on building impactful solutions using artificial intelligence, data science, backend systems, and modern frontend technologies. I combine machine learning knowledge with full stack development skills to create scalable intelligent systems and visually engaging digital experiences.',
  stats: [
    { value: '3+', label: 'Years learning' },
    { value: '25+', label: 'Real world projects' },
    { value: 'AI & ML', label: 'Specializations' }
  ],
  highlights: [
    { title: 'AI Engineering', description: 'Built conversational AI systems with retrieval, memory, embeddings, and automation workflows.' },
    { title: 'Modern Web', description: 'Designed modern full-stack applications using Laravel, React, JavaScript, APIs, and responsive UI systems.' },
    { title: 'Data Science', description: 'Performed data cleaning, visualization, EDA, feature engineering, and predictive ML workflows.' }
  ]
};

export const skillsData = [
  {
    title: 'Languages & Backend',
    items: ['Python', 'JavaScript', 'PHP', 'SQL', 'FastAPI', 'Laravel', 'REST APIs']
  },
  {
    title: 'Frontend & UI',
    items: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design', 'UX/UI']
  },
  {
    title: 'Data & AI',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Machine Learning', 'EDA']
  },
  {
    title: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'VS Code', 'Google Sheets API', 'Dialogflow', 'LangChain']
  }
];

export const projectsData = [
  {
    title: 'SpareMe',
    description:
      'Pan-African automotive parts marketplace with multi-vendor seller, mechanic, and supplier profiles, integrated POS, AI diagnostics and image search, vehicle fitment tools, secure M-Pesa checkout, and a full admin dashboard.',
    stack: ['Laravel', 'Blade', 'Tailwind CSS', 'React', 'Vite', 'MySQL', 'JavaScript'],
    category: 'Full Stack',
    liveUrl: 'https://demo.spareme.co.ke/',
    previewImage: 'spareme-preview.png',
    featured: true
  },
  {
    title: 'CarHire-Pro',
    description:
      'A professional full-stack Laravel car hire management system with booking workflows, dashboard controls, authentication, and modern responsive design.',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    category: 'Full Stack',
    github: 'https://github.com/Educhumba/CarHire-Pro',
    liveUrl: 'https://carhirepro.kesug.com/',
    previewImage: 'carhirepro-preview.png',
    featured: true
  },
  {
    title: 'ICCDK Organizational Website',
    description:
      'A modern website for ICCDK with responsive UI, brand-driven presentation, and scalable structure for a global organization.',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    category: 'Web',
    github: 'https://github.com/Educhumba/ICCDK-Website',
    liveUrl: 'https://educhumba.github.io/ICCDK-Website/',
    previewImage: 'iccdk-preview.png',
    featured: true
  },
  {
    title: 'UmmaBot AI Insurance Assistant',
    description:
      'An AI-powered chatbot for insurance support, with document retrieval, context-aware conversations, and escalation workflows.',
    stack: ['FastAPI', 'LangChain', 'ChromaDB', 'Groq API', 'Python'],
    category: 'AI',
    github: 'https://github.com/Educhumba',
    liveUrl: 'https://educhumba.github.io/UmmaBot/',
    previewImage: 'ummabot-preview.png',
    featured: true
  },
  {
    title: 'QuickDelicacies Platform',
    description:
      'A structured food ordering platform built for responsive frontend workflows, scalable database architecture, and intuitive UX.',
    stack: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    category: 'Web',
    github: 'https://github.com/Educhumba',
    previewImage: 'project-preview.svg'
  },
  {
    title: 'Amprovans Motors Management System',
    description:
      'A vehicle management dashboard with admin controls, filtering systems, database workflows, and modern UX design.',
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    category: 'Full Stack',
    github: 'https://github.com/Educhumba',
    previewImage: 'amprovans-preview.png'
  },
  {
    title: 'Machine Learning & Data Science Projects',
    description:
      'Analytics and ML workflows focused on data preprocessing, feature engineering, predictive modeling, and visual storytelling.',
    stack: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
    category: 'Data Science',
    github: 'https://github.com/Educhumba',
    previewImage: 'project-preview.svg'
  }
];

export const certificationsData = [
  'Kaggle Data Science Certifications',
  'Machine Learning Practice Projects',
  'Python for Data Analysis',
  'Frontend & Backend Development',
  'Exploratory Data Analysis',
  'REST API Engineering'
];

export const experienceData = [
  {
    title: 'Web Development Foundations',
    period: '2022 – 2023',
    description:
      'Built responsive sites and interactive frontends with HTML, CSS, and JavaScript — establishing strong UI fundamentals and client-ready layouts.'
  },
  {
    title: 'Data Science & Machine Learning',
    period: '2023',
    description:
      'Moved into Python analytics workflows: data cleaning, EDA, visualization, feature engineering, and predictive modeling with scikit-learn.'
  },
  {
    title: 'Full-Stack Product Development',
    period: '2023 – 2024',
    description:
      'Shipped production apps with Laravel, React, MySQL, and REST APIs — including marketplaces, dashboards, and booking systems with real users.'
  },
  {
    title: 'AI Engineering & Intelligent Systems',
    period: '2024 – Present',
    description:
      'Designing RAG chatbots, embeddings pipelines, and AI-assisted product features — combining LangChain, FastAPI, and modern web stacks.'
  }
];

export const contactData = {
  phone: '+254 011 014 6704',
  email: 'edudechumba6767@gmail.com',
  location: 'Nairobi, Kenya',
  description:
    'Hiring for a product team, launching a marketplace, or need an AI integration? Tell me about the scope — I typically reply within 24 hours.'
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Educhumba' },
  { label: 'LinkedIn', href: '#' }
];
