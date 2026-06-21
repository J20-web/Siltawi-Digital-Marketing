import { ServiceCategory, Project, TeamMember, Testimonial } from "./types";

export const CORE_VALUES = [
  {
    title: "Innovation",
    description: "Embracing cutting-edge strategies, data analysis models, and tools to yield superior growth for our clients.",
    icon: "Cpu"
  },
  {
    title: "Creativity",
    description: "Designing memorable visual components and campaign stories that help brands stand out from competitors.",
    icon: "Sparkles"
  },
  {
    title: "Transparency",
    description: "Fostering clear and open reports on performance data, direct communications, and honest budget management.",
    icon: "Eye"
  },
  {
    title: "Excellence",
    description: "Upholding high-quality code frameworks, rigorous brand guidelines, and optimized conversions.",
    icon: "Award"
  },
  {
    title: "Customer Success",
    description: "Aligning all actions with the business goals of our customers, celebrating their growth as our own triumph.",
    icon: "HeartHandshake"
  },
  {
    title: "Continuous Learning",
    description: "Constantly researching emerging consumer tech, search engine algorithms, and design trends to stay agile.",
    icon: "BookOpen"
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Data-driven performance campaigns that reach, engage, and convert your ideal audience.",
    iconName: "TrendingUp",
    color: "from-red-600 to-orange-950",
    items: [
      { name: "Social Media Marketing", description: "Organic growth and multi-platform custom content strategies for digital presence." },
      { name: "Facebook & Instagram Ads", description: "Highly targeted paid media funnels designed to acquire leads and scale sales." },
      { name: "Google Ads Management", description: "PPC search, display, and shopping campaigns leveraging high-intent search queries." },
      { name: "Email Marketing", description: "Automated newsletter workflows, audience segmentation, and re-engagement campaigns." }
    ]
  },
  {
    id: "web-dev",
    title: "Website Development",
    description: "Pragmatic full-stack engineering ensuring speed, accessibility, security, and responsive layouts.",
    iconName: "Code2",
    color: "from-orange-600 to-slate-900",
    items: [
      { name: "Company Profile Websites", description: "Modern, secure informative hulls showcasing corporate history, capabilities, and trust assets." },
      { name: "E-commerce Websites", description: "Scalable shopping solutions integrated with payment gateways, carts, and order management." },
      { name: "Landing Pages", description: "Conversion-optimized single-pagers built to maximize ROI from marketing campaigns." },
      { name: "Portfolio Websites", description: "Sleek, creative digital showcases highlighting projects, case studies, and creative assets." },
      { name: "Website Maintenance", description: "Performance auditing, core platform security patches, routine backups, and content updates." }
    ]
  },
  {
    id: "branding",
    title: "Branding & Design",
    description: "Visual identities and strategic design systems that position your brand at the absolute top.",
    iconName: "Palette",
    color: "from-amber-600 to-red-950",
    items: [
      { name: "Logo Design", description: "Modern, memorable vector logo marks designed for versatile scaling on physical and digital mediums." },
      { name: "Brand Identity Design", description: "Full styling kits including color palettes, typography guidelines, and voice principles." },
      { name: "Marketing Materials", description: "High-end corporate slide decks, digital banners, pitch PDF templates, and print layout files." },
      { name: "UI/UX Design", description: "Interactive desktop and mobile wireframes and high-fidelity mockups designed with visual flow." }
    ]
  },
  {
    id: "content",
    title: "Content Creation",
    description: "High-production creative content that tells your brand story and builds strong audience trust.",
    iconName: "Video",
    color: "from-red-650 to-neutral-900",
    items: [
      { name: "Social Media Content", description: "Engaging educational carousels, text copywriting, and viral static media layouts." },
      { name: "Video Production", description: "Creative short-form scripts, filming, dynamic transitions, and polished video editing (Reels/TikTok)." },
      { name: "Photography", description: "Professional product photography, corporate team portraits, and lifestyle action assets." },
      { name: "Copywriting", description: "High-impact conversion copy, descriptive blog entries, marketing scripts, and brand newsletters." }
    ]
  },
  {
    id: "seo",
    title: "SEO Services",
    description: "Strategic search engine optimization that earns sustainable organic traffic and high ranks.",
    iconName: "Search",
    color: "from-orange-600 to-slate-950",
    items: [
      { name: "On-Page SEO", description: "Keyword intelligence mapping, heading structures, meta descriptions, and semantic markup." },
      { name: "Technical SEO", description: "Site speed optimization, XML sitemaps, structured schema data, and mobile rendering diagnostics." },
      { name: "Local SEO", description: "Google Business optimization, local directory citations, and localized keyword targeting." },
      { name: "SEO Audits", description: "Deep-dive technical reports evaluating backlinks, visibility metrics, and competitive gaps." }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Al-Riyadah Real Estate Portal",
    category: "web",
    categoryLabel: "Web Development",
    description: "A premium headless property portal featuring robust filters, fast interactive maps, and responsive listings.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    client: "Al-Riyadah Co.",
    results: "+140% Qualified Inquiries in 60 Days",
    tags: ["React/Vite", "Tailwind CSS", "Map Integration"]
  },
  {
    id: "proj-2",
    title: "Zaza Gourmet SMM Campaign",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    description: "Complete SMM restructuring with custom reels and high-ROI influencer marketing packages.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    client: "Zaza Group",
    results: "3.2 Million organic impressions, +48% Reservation rate",
    tags: ["SMM", "Influencer Strategy", "Ad Campaigns"]
  },
  {
    id: "proj-3",
    title: "Aura Skincare Visual Identity",
    category: "branding",
    categoryLabel: "Branding & Design",
    description: "A clean, modern brand identity designed for premium organic skincare. Minimalist shapes and pastel colors.",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
    client: "Aura Organics LLC",
    results: "Brand kit successfully deployed globally across 5 product lines",
    tags: ["Logo Design", "Packaging Design", "UI/UX Design"]
  },
  {
    id: "proj-4",
    title: "Nile Tech Logistics SEO Overhaul",
    category: "seo",
    categoryLabel: "SEO Services",
    description: "Resolving severe crawl index blocks and executing targeted local & technical SEO sprints.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    client: "Nile Tech Group",
    results: "Top 3 Ranking for major target keywords, +210% Organic leads",
    tags: ["Technical SEO", "On-Page", "Link Building"]
  },
  {
    id: "proj-5",
    title: "Apex Fintech Interactive App",
    category: "web",
    categoryLabel: "Web Development",
    description: "A responsive website that serves as a high-conversion showcase with visual data calculators.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    client: "Apex Venture Capital",
    results: "4.8% landing page conversion rate (from 1.9%)",
    tags: ["Next.js", "Tailwind CSS", "Data Visualizer"]
  },
  {
    id: "proj-6",
    title: "Horizon Aviation Reels Campaign",
    category: "content",
    categoryLabel: "Content Creation",
    description: "Short-form video shoots showing executive passenger travel experiences with bespoke visual editing.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    client: "Horizon Private Jet S.A.",
    results: "12,000+ Saves, 8.4x Engagement hike relative to previous year",
    tags: ["Video Production", "Copywriting", "Color Grading"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Fitsum Kebede",
    role: "CEO & Founder",
    department: "Executive Strategy",
    bio: "Leads company strategy and business development.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    linkedIn: "https://linkedin.com",
    twitter: "https://twitter.com",
    skills: ["Growth Strategy", "Venture Building", "Business Development", "Client Relations"]
  },
  {
    id: "team-2",
    name: "Mitslal Hailu",
    role: "Marketing Manager",
    department: "Marketing Management",
    bio: "Oversees marketing campaigns and client success.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    linkedIn: "https://linkedin.com",
    twitter: "https://twitter.com",
    skills: ["Campaign Oversight", "Client Success", "Funnel Mapping", "Brand Strategy"]
  },
  {
    id: "team-3",
    name: "Yonas Alemayehu",
    role: "Lead Software Architect",
    department: "Web Development Team",
    bio: "Builds websites and web applications.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80",
    linkedIn: "https://linkedin.com",
    skills: ["React/TypeScript", "E-commerce Buildout", "Performance Optimization", "Full-Stack Development"]
  },
  {
    id: "team-4",
    name: "Helina Tariku",
    role: "Senior Graphic Designer",
    department: "Graphic Design Team",
    bio: "Creates branding and visual content.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
    linkedIn: "https://linkedin.com",
    twitter: "https://twitter.com",
    skills: ["Brand Identity Design", "Logo Design", "Marketing Materials Systems", "UI / UX Assets"]
  },
  {
    id: "team-5",
    name: "Elias Dawit",
    role: "Creative Content Director",
    department: "Creative & Content Creation",
    bio: "Produces photos, videos, and marketing materials.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    linkedIn: "https://linkedin.com",
    skills: ["Video Production", "Photography", "Copywriting", "Creative Writing"]
  },
  {
    id: "team-6",
    name: "Selamawit Girma",
    role: "Search Strategy Lead",
    department: "SEO Specialists",
    bio: "Improve search engine rankings and website visibility.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
    linkedIn: "https://linkedin.com",
    twitter: "https://twitter.com",
    skills: ["On-Page SEO", "Technical SEO Sprints", "Local SEO Citations", "SEO Audits"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Abebe Bekele",
    role: "Business Owner",
    company: "E-commerce Retail",
    content: "Siltawi helped us increase our online sales by 200% within six months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t-2",
    name: "Lydia Tesfaye",
    role: "Startup Founder",
    company: "Chala Tech",
    content: "Their website design and marketing services transformed our brand presence.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  }
];

export const COMPANY_STATS = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Active Clients" },
  { value: 15, suffix: "", label: "Team Members" },
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 95, suffix: "%", label: "Client Satisfaction Rate" }
];
