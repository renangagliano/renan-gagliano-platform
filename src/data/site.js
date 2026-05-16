import {
  Award,
  BookOpen,
  BrainCircuit,
  Building2,
  Cloud,
  Cpu,
  Github,
  GraduationCap,
  Instagram,
  Landmark,
  Linkedin,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const languages = {
  pt: { label: "Portuguese", nativeLabel: "Português", flag: "🇧🇷" },
  en: { label: "English", nativeLabel: "English", flag: "🇺🇸" },
};

export const navOrder = [
  ["home", "/"],
  ["about", "/about"],
  ["experience", "/experience"],
  ["projects", "/projects"],
  ["articles", "/articles"],
  ["proposals", "/public-proposals"],
  ["contact", "/contact"],
];

export const socials = [
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/renangagliano", icon: Linkedin },
  { key: "github", label: "GitHub", href: "https://github.com/renangagliano", icon: Github },
  { key: "lattes", label: "Lattes", href: "https://lattes.cnpq.br/5847208672413724", icon: GraduationCap },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/renan.gagliano/", icon: Instagram },
  { key: "email", label: "Email", href: "mailto:renan.gagliano@gmail.com", icon: Mail },
];

export const content = {
  pt: {
    meta: {
      siteTitle: "Renan Gagliano | Plataforma Institucional de Tecnologia",
      description:
        "Plataforma institucional multilíngue de Renan Gagliano, ICT Operations Manager e especialista em tecnologia, governança, segurança da informação e transformação digital.",
      keywords:
        "tecnologia, governança, cibersegurança, transformação digital, inovação, liderança, operações de TI, infraestrutura, DevOps, cloud, modernização pública",
    },
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      articles: "Artigos",
      proposals: "Propostas Públicas",
      contact: "Contato",
    },
    common: {
      skip: "Ir para o conteúdo",
      language: "Idioma",
      dark: "Alternar tema",
      menu: "Abrir navegação",
      built: "Construído com React, Vite, TailwindCSS e Framer Motion.",
      contactCta: "Conectar",
      explore: "Explorar projetos",
      proposals: "Ver propostas públicas",
      read: "Ler artigo",
    },
    identity: {
      name: "Renan Gagliano",
      badge: "ICT Operations Manager | Tecnologia, Governança e Transformação Digital",
      title: "Liderança em tecnologia, governança e modernização digital.",
      summary:
        "Plataforma institucional para apresentar uma trajetória executiva em operações de TIC, segurança da informação, governança, infraestrutura, cloud, DevOps, educação tecnológica e inovação aplicada ao setor público e privado.",
      location: "Brasil",
    },
    hero: {
      eyebrow: "Plataforma institucional executiva",
      title: "Renan Gagliano",
      subtitle:
        "ICT Operations Manager, especialista em governança de TI, segurança da informação e transformação digital, com atuação em ambientes corporativos complexos, educação tecnológica e modernização institucional.",
      primary: "Conheça a trajetória",
      secondary: "Projetos e propostas",
      metrics: [
        { value: "20+", label: "anos em tecnologia e operações" },
        { value: "ISO 27001", label: "governança, segurança e compliance" },
        { value: "Cloud + DevOps", label: "modernização e excelência operacional" },
      ],
    },
    pillars: [
      {
        title: "Governança de TI",
        text: "Estruturas de decisão, compliance, indicadores, processos e controles para ambientes de alta responsabilidade.",
        icon: ShieldCheck,
      },
      {
        title: "Segurança da Informação",
        text: "Visão orientada a risco, ISO 27001, LGPD, proteção de dados e maturidade em cibersegurança.",
        icon: LockKeyhole,
      },
      {
        title: "Transformação Digital",
        text: "Modernização de serviços, automação, cloud, DevOps e melhoria contínua aplicada a instituições.",
        icon: Sparkles,
      },
    ],
    about: {
      eyebrow: "Sobre",
      title: "Um perfil executivo construído na interseção entre tecnologia, governança e impacto institucional.",
      body: [
        "Renan Gagliano é profissional brasileiro de tecnologia com trajetória consolidada em operações de TIC, governança, segurança da informação, infraestrutura, transformação digital e ambientes corporativos de grande escala.",
        "Sua atuação conecta liderança operacional, visão estratégica, compliance, educação tecnológica e inovação prática. A proposta institucional é traduzir conhecimento técnico em valor público, eficiência, transparência e modernização sustentável.",
      ],
      focusTitle: "Posicionamento institucional",
      focus: [
        "ICT Operations Manager",
        "Technology and Governance Specialist",
        "Information Security Professional",
        "Digital Transformation Leader",
        "Technology Educator and Mentor",
        "Public and Private Sector Modernization Advocate",
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Operações, governança e transformação em ambientes corporativos críticos.",
      items: [
        {
          period: "Atual",
          title: "ICT Operations Manager",
          organization: "Ericsson",
          body: "Liderança em operações de TIC, governança, segurança, compliance, cloud, otimização de processos, infraestrutura e excelência operacional.",
          tags: ["Ericsson", "IT Operations", "Governança", "Segurança", "Cloud"],
        },
        {
          period: "Programa Jovem Parceiro",
          title: "Instrutor e mentor em tecnologia",
          organization: "Ericsson",
          body: "Atuação em educação corporativa, orientação técnica, desenvolvimento de jovens profissionais e fortalecimento de capacidades digitais.",
          tags: ["Mentoria", "Educação", "Tecnologia", "Desenvolvimento"],
        },
        {
          period: "Formação e base técnica",
          title: "Gestão, segurança e processos",
          organization: "IFSP e formação continuada",
          body: "Base acadêmica e profissional em gestão de tecnologia da informação, segurança da informação, gestão de processos, governança e cibersegurança.",
          tags: ["IFSP", "ISO 27001", "LGPD", "ITIL", "OWASP"],
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Portfólio orientado a governança, automação e modernização.",
      items: [
        {
          title: "Governança e Compliance de TIC",
          category: "Governança",
          description: "Modelo para alinhar processos, riscos, indicadores, auditoria e transparência operacional.",
          icon: Landmark,
          tags: ["ISO 27001", "LGPD", "Indicadores"],
        },
        {
          title: "Modernização Cloud e DevOps",
          category: "Transformação Digital",
          description: "Iniciativas para acelerar entregas, ampliar resiliência, padronizar infraestrutura e automatizar rotinas críticas.",
          icon: Cloud,
          tags: ["Cloud", "DevOps", "Automação"],
        },
        {
          title: "Cybersecurity Readiness",
          category: "Segurança",
          description: "Práticas de maturidade, proteção de dados, gestão de vulnerabilidades e cultura de segurança.",
          icon: LockKeyhole,
          tags: ["Cibersegurança", "Risco", "Compliance"],
        },
        {
          title: "Excelência Operacional",
          category: "Operações",
          description: "Otimização de processos, gestão de incidentes, continuidade, métricas executivas e eficiência operacional.",
          icon: Workflow,
          tags: ["ITIL", "Operações", "Eficiência"],
        },
      ],
    },
    articles: {
      eyebrow: "Artigos",
      title: "Publicações sobre tecnologia, governança e liderança institucional.",
      items: [
        {
          date: "2026",
          title: "Governança de TI como base da confiança institucional",
          excerpt: "Como processos, métricas, segurança e accountability sustentam transformação digital com credibilidade.",
          icon: BookOpen,
        },
        {
          date: "2026",
          title: "Da automação ao valor público",
          excerpt: "O papel de cloud, DevOps e IA na modernização de serviços e na redução de fricção operacional.",
          icon: BrainCircuit,
        },
        {
          date: "2026",
          title: "Cibersegurança como política de gestão",
          excerpt: "Por que segurança da informação precisa ser tratada como capacidade executiva, não apenas técnica.",
          icon: ShieldCheck,
        },
      ],
    },
    proposals: {
      eyebrow: "Propostas Públicas",
      title: "Ideias para modernização pública, educação tecnológica e inovação responsável.",
      items: [
        {
          title: "Governo Digital Seguro",
          body: "Critérios de segurança, privacidade, interoperabilidade e experiência do cidadão para serviços públicos digitais.",
          status: "Modernização pública",
        },
        {
          title: "Educação Tecnológica Aplicada",
          body: "Programas de formação técnica, mentoria e empregabilidade digital conectando escolas, instituições e empresas.",
          status: "Educação e inclusão",
        },
        {
          title: "Laboratório de Inovação e Automação",
          body: "Ambiente para prototipar soluções de IA, automação e eficiência operacional com governança e impacto mensurável.",
          status: "Inovação responsável",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Conexões profissionais e institucionais.",
      description:
        "Canais para tecnologia, governança, inovação, educação, modernização pública e parcerias institucionais.",
    },
  },
  en: {
    meta: {
      siteTitle: "Renan Gagliano | Institutional Technology Platform",
      description:
        "Multilingual institutional platform for Renan Gagliano, ICT Operations Manager and specialist in technology, governance, information security, and digital transformation.",
      keywords:
        "technology, governance, cybersecurity, digital transformation, innovation, leadership, IT operations, infrastructure, DevOps, cloud, public modernization",
    },
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      articles: "Articles",
      proposals: "Public Proposals",
      contact: "Contact",
    },
    common: {
      skip: "Skip to content",
      language: "Language",
      dark: "Toggle theme",
      menu: "Open navigation",
      built: "Built with React, Vite, TailwindCSS, and Framer Motion.",
      contactCta: "Connect",
      explore: "Explore projects",
      proposals: "View public proposals",
      read: "Read article",
    },
    identity: {
      name: "Renan Gagliano",
      badge: "ICT Operations Manager | Technology, Governance and Digital Transformation",
      title: "Technology leadership, governance, and digital modernization.",
      summary:
        "An institutional platform presenting an executive trajectory in ICT operations, information security, governance, infrastructure, cloud, DevOps, technology education, and innovation for public and private sector modernization.",
      location: "Brazil",
    },
    hero: {
      eyebrow: "Executive institutional platform",
      title: "Renan Gagliano",
      subtitle:
        "ICT Operations Manager, IT governance specialist, information security professional, and digital transformation leader with experience in complex enterprise environments, technology education, and institutional modernization.",
      primary: "View trajectory",
      secondary: "Projects and proposals",
      metrics: [
        { value: "20+", label: "years in technology and operations" },
        { value: "ISO 27001", label: "governance, security and compliance" },
        { value: "Cloud + DevOps", label: "modernization and operational excellence" },
      ],
    },
    pillars: [
      {
        title: "IT Governance",
        text: "Decision structures, compliance, indicators, processes, and controls for high-accountability environments.",
        icon: ShieldCheck,
      },
      {
        title: "Information Security",
        text: "Risk-oriented practice, ISO 27001, privacy, data protection, and cybersecurity maturity.",
        icon: LockKeyhole,
      },
      {
        title: "Digital Transformation",
        text: "Service modernization, automation, cloud, DevOps, and continuous improvement applied to institutions.",
        icon: Sparkles,
      },
    ],
    about: {
      eyebrow: "About",
      title: "An executive profile built at the intersection of technology, governance, and institutional impact.",
      body: [
        "Renan Gagliano is a Brazilian technology professional with a consolidated trajectory in ICT operations, governance, information security, infrastructure, digital transformation, and large-scale enterprise environments.",
        "His work connects operational leadership, strategic vision, compliance, technology education, and practical innovation. The institutional purpose is to translate technical knowledge into public value, efficiency, transparency, and sustainable modernization.",
      ],
      focusTitle: "Institutional positioning",
      focus: [
        "ICT Operations Manager",
        "Technology and Governance Specialist",
        "Information Security Professional",
        "Digital Transformation Leader",
        "Technology Educator and Mentor",
        "Public and Private Sector Modernization Advocate",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Operations, governance, and transformation in critical enterprise environments.",
      items: [
        {
          period: "Current",
          title: "ICT Operations Manager",
          organization: "Ericsson",
          body: "Leadership in ICT operations, governance, security, compliance, cloud, process optimization, infrastructure, and operational excellence.",
          tags: ["Ericsson", "IT Operations", "Governance", "Security", "Cloud"],
        },
        {
          period: "Young Partner Program",
          title: "Technology instructor and mentor",
          organization: "Ericsson",
          body: "Corporate education, technical guidance, young professional development, and strengthening of digital capabilities.",
          tags: ["Mentorship", "Education", "Technology", "Development"],
        },
        {
          period: "Academic and technical base",
          title: "Management, security, and processes",
          organization: "IFSP and continuous education",
          body: "Academic and professional foundation in IT management, information security, process management, governance, and cybersecurity.",
          tags: ["IFSP", "ISO 27001", "LGPD", "ITIL", "OWASP"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "A portfolio shaped around governance, automation, and modernization.",
      items: [
        {
          title: "ICT Governance and Compliance",
          category: "Governance",
          description: "A model to align processes, risks, indicators, auditing, and operational transparency.",
          icon: Landmark,
          tags: ["ISO 27001", "Privacy", "Indicators"],
        },
        {
          title: "Cloud and DevOps Modernization",
          category: "Digital Transformation",
          description: "Initiatives to accelerate delivery, expand resilience, standardize infrastructure, and automate critical routines.",
          icon: Cloud,
          tags: ["Cloud", "DevOps", "Automation"],
        },
        {
          title: "Cybersecurity Readiness",
          category: "Security",
          description: "Maturity practices, data protection, vulnerability management, and security culture.",
          icon: LockKeyhole,
          tags: ["Cybersecurity", "Risk", "Compliance"],
        },
        {
          title: "Operational Excellence",
          category: "Operations",
          description: "Process optimization, incident management, continuity, executive metrics, and operational efficiency.",
          icon: Workflow,
          tags: ["ITIL", "Operations", "Efficiency"],
        },
      ],
    },
    articles: {
      eyebrow: "Articles",
      title: "Publications on technology, governance, and institutional leadership.",
      items: [
        {
          date: "2026",
          title: "IT governance as the foundation of institutional trust",
          excerpt: "How processes, metrics, security, and accountability sustain credible digital transformation.",
          icon: BookOpen,
        },
        {
          date: "2026",
          title: "From automation to public value",
          excerpt: "The role of cloud, DevOps, and AI in service modernization and operational friction reduction.",
          icon: BrainCircuit,
        },
        {
          date: "2026",
          title: "Cybersecurity as a management policy",
          excerpt: "Why information security must be treated as an executive capability, not only a technical domain.",
          icon: ShieldCheck,
        },
      ],
    },
    proposals: {
      eyebrow: "Public Proposals",
      title: "Ideas for public modernization, technology education, and responsible innovation.",
      items: [
        {
          title: "Secure Digital Government",
          body: "Security, privacy, interoperability, and citizen-experience criteria for digital public services.",
          status: "Public modernization",
        },
        {
          title: "Applied Technology Education",
          body: "Technical education, mentoring, and digital employability programs connecting schools, institutions, and companies.",
          status: "Education and inclusion",
        },
        {
          title: "Innovation and Automation Lab",
          body: "An environment to prototype AI, automation, and operational efficiency solutions with governance and measurable impact.",
          status: "Responsible innovation",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Professional and institutional connections.",
      description:
        "Channels for technology, governance, innovation, education, public modernization, and institutional partnerships.",
    },
  },
};

export const themeSignals = [
  { label: "Ericsson", icon: Network },
  { label: "ISO 27001", icon: Award },
  { label: "AI + Automation", icon: Cpu },
  { label: "Public Modernization", icon: Building2 },
  { label: "Operational Excellence", icon: Target },
];
