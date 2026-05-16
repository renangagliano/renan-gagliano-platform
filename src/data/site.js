import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Cpu,
  FileText,
  Github,
  Globe2,
  Landmark,
  Linkedin,
  Mail,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Proposals", path: "/public-proposals" },
  { label: "Articles", path: "/articles" },
  { label: "Contact", path: "/contact" },
];

export const identity = {
  name: "Renan Gagliano",
  role: "Technology, governance, and institutional innovation",
  email: "contact@renangagliano.com",
  location: "Brazil",
  summary:
    "An executive institutional platform for public innovation, digital transformation, governance architecture, and technology projects with measurable civic value.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/", icon: Github },
    { label: "Website", href: "https://renangagliano.com", icon: Globe2 },
  ],
};

export const stats = [
  { value: "07", label: "Strategic domains" },
  { value: "360", label: "Governance perspective" },
  { value: "24/7", label: "Digital-first mindset" },
];

export const pillars = [
  {
    title: "Institutional Strategy",
    text: "Executive positioning for technology initiatives, public-sector modernization, and trusted digital services.",
    icon: Landmark,
  },
  {
    title: "Governance Architecture",
    text: "Frameworks that align accountability, transparency, data stewardship, and operational execution.",
    icon: ShieldCheck,
  },
  {
    title: "Technology Innovation",
    text: "Modern platforms, AI-ready workflows, and civic technology concepts designed for long-term impact.",
    icon: Cpu,
  },
];

export const experience = [
  {
    period: "2024 - Present",
    title: "Institutional Technology Leadership",
    organization: "Strategic public innovation initiatives",
    body: "Guiding digital governance programs, technology narratives, and executive communication for complex institutional environments.",
  },
  {
    period: "2021 - 2024",
    title: "Digital Transformation and Public Value",
    organization: "Civic technology and modernization programs",
    body: "Designed operating models, proposals, and project structures connecting citizen services, data, and measurable performance.",
  },
  {
    period: "2018 - 2021",
    title: "Systems, Data, and Product Operations",
    organization: "Technology delivery ecosystems",
    body: "Built cross-functional practices for product planning, digital infrastructure, stakeholder alignment, and implementation readiness.",
  },
];

export const projects = [
  {
    title: "Civic Intelligence Platform",
    category: "Governance technology",
    description:
      "A strategic concept for integrating indicators, institutional workflows, and executive dashboards for public decision-making.",
    tags: ["Data", "Governance", "Dashboards"],
    icon: Workflow,
  },
  {
    title: "Digital Service Modernization",
    category: "Public innovation",
    description:
      "A framework for simplifying citizen journeys, reducing administrative friction, and increasing service transparency.",
    tags: ["UX", "Operations", "Public value"],
    icon: Building2,
  },
  {
    title: "AI Governance Readiness",
    category: "Responsible AI",
    description:
      "A maturity model for adopting AI with risk controls, human oversight, procurement criteria, and institutional accountability.",
    tags: ["AI", "Risk", "Policy"],
    icon: Sparkles,
  },
];

export const proposals = [
  {
    title: "Open Digital Governance Charter",
    body: "Create a public framework for transparency, service standards, data ethics, accessibility, and measurable technology outcomes.",
    status: "Policy concept",
  },
  {
    title: "Municipal Innovation Lab",
    body: "Establish a practical environment for rapid prototyping, civic data products, and interdepartmental modernization sprints.",
    status: "Program model",
  },
  {
    title: "Public AI Procurement Criteria",
    body: "Define evaluation standards for AI systems used in public services, including auditability, bias controls, and explainability.",
    status: "Governance proposal",
  },
];

export const articles = [
  {
    title: "The New Operating System of Public Trust",
    excerpt:
      "Why digital transformation succeeds when governance, service design, and institutional legitimacy move together.",
    date: "May 2026",
    icon: Newspaper,
  },
  {
    title: "AI Governance Before AI Procurement",
    excerpt:
      "A practical view of readiness, oversight, and accountability before institutions scale automated decision support.",
    date: "April 2026",
    icon: FileText,
  },
  {
    title: "Executive Dashboards Are Governance Instruments",
    excerpt:
      "Modern dashboards should clarify decisions, expose bottlenecks, and make institutional priorities operational.",
    date: "March 2026",
    icon: Target,
  },
];

export const contactMethods = [
  { label: "Email", value: identity.email, href: `mailto:${identity.email}`, icon: Mail },
  { label: "Institutional profile", value: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Technical portfolio", value: "GitHub", href: "https://github.com/", icon: Github },
];

export const quickLinks = [
  { label: "View proposals", href: "/public-proposals", icon: BadgeCheck },
  { label: "Discuss a project", href: "/contact", icon: ArrowUpRight },
];
