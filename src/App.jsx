import { useState } from "react";
import { Mail, Database, BrainCircuit, Globe, Code, Server, Sparkles, ArrowUpRight, ExternalLink, Phone, GraduationCap, MessageCircle } from "lucide-react";

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function PortfolioDashboard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission success
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const skills = {
    languages: ["Python", "JavaScript", "PHP", "SQL", "HTML5", "CSS3"],
    frameworks: ["Laravel", "FastAPI", "React", "Tailwind CSS", "Bootstrap"],
    dataScience: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Machine Learning", "EDA", "Data Cleaning", "Model Training", "Feature Engineering"],
    databases: ["MySQL", "PostgreSQL", "ChromaDB"],
    tools: ["Git", "GitHub", "Google Sheets API", "Dialogflow", "LangChain", "Groq API", "VS Code", "Windsurf Editor", "REST APIs"]
  };

  const projects = [
    {
      title: "ICCDK Organizational Website",
      description:
        "Designed and developed a professional modern website for ICCDK (Islamic Chamber of Commerce and Development Kenya), focusing on responsive UI/UX, structured organizational presentation, modern frontend architecture, and scalable web experience for an internationally affiliated organization.",
      stack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Responsive Design"
      ],
      github: "https://github.com/Educhumba/ICCDK-Website",
      featured: true
    },

    {
      title: "UmmaBot AI Insurance Assistant",
      description:
        "An intelligent AI-powered insurance chatbot integrating conversational memory, PDF retrieval, human escalation support, contextual conversations, and automated logging workflows.",
      stack: [
        "FastAPI",
        "LangChain",
        "ChromaDB",
        "Groq API",
        "Python",
        "JavaScript"
      ],
      github: "https://github.com/Educhumba"
    },

    {
      title: "QuickDelicacies Platform",
      description:
        "A professionally structured food ordering platform featuring frontend workflows, SRS documentation, scalable database architecture, and responsive UI systems.",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL"
      ],
      github: "https://github.com/Educhumba"
    },

    {
      title: "Amprovans Motors Management System",
      description:
        "A complete vehicle management platform with responsive admin dashboards, backend integrations, filtering systems, database workflows, and modern UX design.",
      stack: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript"
      ],
      github: "https://github.com/Educhumba"
    },

    {
      title: "Machine Learning & Data Science Projects",
      description:
        "Hands-on ML and analytics projects involving data preprocessing, EDA, feature engineering, predictive modeling, visualizations, and intelligent automation systems.",
      stack: [
        "Python",
        "Pandas",
        "Scikit-Learn",
        "Matplotlib",
        "Seaborn"
      ],
      github: "https://github.com/Educhumba"
    }
  ];

  const certifications = [
    "Kaggle Data Science Certifications",
    "Machine Learning Practice Projects",
    "Python for Data Analysis",
    "Frontend & Backend Development",
    "Exploratory Data Analysis",
    "REST API Engineering"
  ];

  const highlights = [
    {
      icon: <BrainCircuit className="w-10 h-10" />,
      title: "AI Engineering",
      desc: "Built conversational AI systems with retrieval, memory, embeddings, and automation workflows."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Modern Web Development",
      desc: "Designed modern full-stack applications using Laravel, React, JavaScript, APIs, and responsive UI systems."
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Science",
      desc: "Performed data cleaning, visualization, EDA, feature engineering, and predictive ML workflows."
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Systems",
      desc: "Developed scalable backend APIs and intelligent architectures using FastAPI and Laravel."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1121] text-slate-50 overflow-x-hidden scroll-smooth selection:bg-cyan-500/40">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-2xl bg-[#0b1121]/80 border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Edwin Chumba
            </h1>
            <p className="text-xs text-gray-400 tracking-widest uppercase">
              AI • Data Science • Web Development
            </p>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            {["home", "about", "skills", "projects", "certifications", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-cyan-400 transition duration-300 capitalize hover:-translate-y-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 hover:border-cyan-500/40 transition-all duration-500">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm tracking-wide text-gray-300">
              AI Engineer • Full Stack Developer • Data Scientist
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">
            Building
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              Intelligent
            </span>
            Digital Experiences
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-10">
            Computer Science student specializing in <span className="text-cyan-400 font-semibold">Data Science & Artificial Intelligence</span> with strong expertise in <span className="text-cyan-400 font-semibold">modern web development</span>, machine learning systems, backend engineering, conversational AI, scalable APIs, and interactive frontend experiences.
          </p>

          <div className="flex flex-wrap gap-5 mb-10">
            <a href="#projects" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-cyan-500/30 shadow-2xl transition-all duration-300 font-bold flex items-center gap-3">
              View Projects
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:bg-white/5 transition-all duration-300 font-semibold hover:scale-105">
              Download CV
            </button>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/Educhumba" target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-black">
              <Github />
            </a>

            <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-black">
              <Linkedin />
            </a>

            <a href="mailto:edudechumba6767@gmail.com" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-black">
              <Mail />
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[380px] h-[380px] md:w-[450px] md:h-[450px] rounded-[40px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-[2px] shadow-2xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-[38px] bg-[#0b1120] overflow-hidden relative group">
              {/* Profile Image Goes Here */}
              <img 
                src={`${import.meta.env.BASE_URL}profile.jpg`} 
                alt="Edwin Chumba" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-transparent to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                <h2 className="text-2xl font-black mb-2 text-white">
                  Edwin Chumba
                </h2>
                <p className="text-cyan-400 font-medium">
                  Future AI Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl hover:border-cyan-500/20 transition-all duration-500">
          <div className="mb-16">
            <h2 className="text-5xl font-black mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-5xl">
              I am a passionate developer and aspiring AI engineer focused on building impactful solutions using artificial intelligence, data science, backend systems, and modern frontend technologies. I combine machine learning knowledge with full stack development skills to create scalable intelligent systems and visually engaging digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/40 hover:-translate-y-3 transition-all duration-500"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-all duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-16 flex-wrap gap-6">
          <div>
            <h2 className="text-5xl font-black mb-4">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies and tools powering my AI, backend, and frontend workflows.
            </p>
          </div>

          <div className="px-6 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold animate-pulse">
            Full Stack + AI Engineer
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 hover:scale-105 transition-all duration-500 shadow-xl backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold capitalize mb-6 text-cyan-400 flex items-center gap-3">
                <Code className="w-6 h-6" />
                {category.replace(/([A-Z])/g, ' $1')}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between flex-wrap gap-6 mb-16">
          <div>
            <h2 className="text-5xl font-black mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Real-world systems, AI applications, machine learning workflows, and scalable web platforms.
            </p>
          </div>

          <div className="px-6 py-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold">
            10+ Projects Built
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-[32px] overflow-hidden border border-white/10 bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-3 shadow-xl"
            >
              <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black group-hover:text-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:rotate-12 transition-all duration-300">
                    ✨
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm hover:border-cyan-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-semibold transition-all duration-300"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl">
          <h2 className="text-5xl font-black mb-16 text-center">
            Certifications & <span className="text-cyan-400">Learning</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-black/20 border border-white/10 hover:border-cyan-500/40 hover:scale-105 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 text-2xl font-black group-hover:rotate-12 transition-all duration-300">
                  🏆
                </div>

                <h3 className="text-xl font-bold text-gray-200 mb-3">
                  {cert}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Continuous learning, practical implementation, and real-world project experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[40px] p-8 md:p-14 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6">
                Let’s Build Something <span className="text-cyan-400">Amazing</span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Open to internships, collaborations, freelance opportunities, AI engineering roles, backend development, full stack web development, and data science projects.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Phone</p>
                    <p className="font-medium text-lg">011014604</p>
                  </div>
                </div>

                <a href="mailto:edudechumba6767@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email</p>
                    <p className="font-medium text-lg">edudechumba6767@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/2540110146704" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                    <MessageCircle />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">WhatsApp</p>
                    <p className="font-medium text-lg">+254 011 014 6704</p>
                  </div>
                </a>
              </div>

              <div className="flex gap-5">
                <a href="https://github.com/Educhumba" target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center hover:-translate-y-2 shadow-lg">
                  <Github />
                </a>

                <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center hover:-translate-y-2 shadow-lg">
                  <Linkedin />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#0f172a]/80 p-8 rounded-3xl border border-white/10 flex flex-col gap-5 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-2">Send a Message</h3>

              {isSubmitted && (
                <div className="px-4 py-3 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-medium">
                  Message sent successfully!
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm text-cyan-400 font-semibold uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className={`px-5 py-4 rounded-xl bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'} focus:bg-white/10 focus:outline-none text-white transition-all placeholder:text-gray-500`}
                />
                {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-cyan-400 font-semibold uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className={`px-5 py-4 rounded-xl bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'} focus:bg-white/10 focus:outline-none text-white transition-all placeholder:text-gray-500`}
                />
                {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-cyan-400 font-semibold uppercase tracking-wider">Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello, I'd like to work with you..."
                  className={`px-5 py-4 rounded-xl bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-cyan-400'} focus:bg-white/10 focus:outline-none text-white transition-all resize-none placeholder:text-gray-500`}
                ></textarea>
                {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="mt-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 font-bold shadow-lg shadow-cyan-500/30 text-white flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-gray-400 backdrop-blur-xl">
        <p className="text-lg">
          © 2026 Edwin Chumba • AI Engineering • Data Science • Full Stack Web Development
        </p>
      </footer>
    </div>
  );
}
