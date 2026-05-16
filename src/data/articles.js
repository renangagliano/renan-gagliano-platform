import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  Cloud,
  GraduationCap,
  Leaf,
  LockKeyhole,
  Network,
  Scale,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const icons = {
  governance: ShieldCheck,
  cybersecurity: LockKeyhole,
  iso: ShieldCheck,
  lgpd: Scale,
  transformation: Sparkles,
  cloud: Cloud,
  devops: Workflow,
  automation: BrainCircuit,
  infrastructure: ServerCog,
  publicSector: Network,
  education: GraduationCap,
  academic: BookOpen,
  esg: Leaf,
  innovation: Sparkles,
  indicators: BarChart3,
};

export const articlePageSize = 3;

export const articleLabels = {
  pt: {
    previous: "Anterior",
    next: "Próxima",
    page: "Página",
    of: "de",
    back: "Voltar para artigos",
    readTime: "min de leitura",
    notFound: "Artigo não encontrado",
    notFoundDescription: "A publicação solicitada não está disponível neste idioma.",
  },
  en: {
    previous: "Previous",
    next: "Next",
    page: "Page",
    of: "of",
    back: "Back to articles",
    readTime: "min read",
    notFound: "Article not found",
    notFoundDescription: "The requested publication is not available in this language.",
  },
};

const ptArticles = [
  {
    slug: "governanca-ti-confianca-institucional",
    title: "Governança de TI como base da confiança institucional",
    category: "Artigo técnico",
    icon: icons.governance,
    summary: "Como processos, métricas, segurança e accountability sustentam transformação digital com credibilidade.",
    content:
      "A governança de TI transforma tecnologia em capacidade institucional quando conecta decisões executivas, riscos, métricas, compliance e entrega operacional. Para uma liderança de operações de TIC, esse alinhamento permite demonstrar valor, organizar prioridades e reduzir improvisações em ambientes críticos. Este artigo técnico apresenta a governança como estrutura de confiança: uma disciplina que torna a transformação digital mais previsível, auditável e sustentável.",
  },
  {
    slug: "ciberseguranca-politica-gestao",
    title: "Cibersegurança como política de gestão",
    category: "Reflexão executiva",
    icon: icons.cybersecurity,
    summary: "Por que segurança da informação precisa ser tratada como capacidade executiva, não apenas técnica.",
    content:
      "Cibersegurança não deve ser isolada em ferramentas ou respostas emergenciais. Ela precisa participar das decisões de risco, orçamento, continuidade, cultura e prestação de contas. Esta reflexão executiva posiciona segurança da informação como política de gestão, com responsabilidades claras, priorização baseada em risco, comunicação acessível e integração entre equipes técnicas, liderança e áreas de negócio.",
  },
  {
    slug: "iso-27001-operacoes-tic",
    title: "ISO 27001 aplicada às operações de TIC",
    category: "Artigo técnico",
    icon: icons.iso,
    summary: "Uma leitura prática sobre controles, riscos, melhoria contínua e maturidade de segurança.",
    content:
      "A ISO 27001 oferece um caminho estruturado para transformar segurança da informação em sistema de gestão. Em operações de TIC, seu valor aparece quando controles são incorporados à rotina: acessos, mudanças, incidentes, continuidade, fornecedores e evidências. Este artigo técnico trata a norma como instrumento de maturidade operacional, não como burocracia, destacando sua contribuição para confiança, auditoria e resiliência.",
  },
  {
    slug: "lgpd-governanca-dados",
    title: "LGPD, governança de dados e responsabilidade institucional",
    category: "Publicação institucional",
    icon: icons.lgpd,
    summary: "Como privacidade, processos e segurança se conectam à modernização de serviços digitais.",
    content:
      "A LGPD reforça que dados pessoais representam compromisso institucional. A modernização digital precisa considerar bases legais, minimização, transparência, controle de acesso, retenção e resposta a incidentes desde o desenho dos serviços. Esta publicação institucional aborda privacidade como prática de governança, essencial para reduzir exposição, aumentar confiança e alinhar tecnologia à responsabilidade pública e corporativa.",
  },
  {
    slug: "transformacao-digital-excelencia-operacional",
    title: "Transformação digital e excelência operacional",
    category: "Reflexão executiva",
    icon: icons.transformation,
    summary: "A transformação digital como evolução de processos, indicadores, cultura e entrega de valor.",
    content:
      "Transformação digital não é apenas digitalizar tarefas existentes. É redesenhar fluxos, reduzir fricções, medir desempenho e criar capacidade contínua de adaptação. Esta reflexão executiva relaciona excelência operacional com automação, cloud, DevOps, governança e cultura de melhoria, mostrando que o valor real aparece quando a organização se torna mais clara, responsiva e mensurável.",
  },
  {
    slug: "cloud-resiliencia-operacional",
    title: "Cloud computing e resiliência operacional",
    category: "Artigo técnico",
    icon: icons.cloud,
    summary: "Decisões de nuvem orientadas por disponibilidade, segurança, custos, continuidade e governança.",
    content:
      "Cloud computing amplia elasticidade e velocidade, mas exige decisões maduras sobre arquitetura, custos, segurança, continuidade e responsabilidade compartilhada. Para operações de TIC, migrar não basta: é preciso operar melhor. Este artigo técnico apresenta a nuvem como plataforma de resiliência quando combinada com automação, monitoramento, recuperação, padronização e governança financeira.",
  },
  {
    slug: "devops-governanca-entrega",
    title: "DevOps com governança: velocidade sem perda de controle",
    category: "Artigo técnico",
    icon: icons.devops,
    summary: "Como práticas DevOps aceleram entregas mantendo rastreabilidade, segurança e qualidade.",
    content:
      "DevOps e governança não são forças opostas. Pipelines, testes automatizados, revisão de código, infraestrutura como código e observabilidade reduzem erros e tornam a entrega mais transparente. Este artigo técnico defende DevOps com critérios de controle, evidência e gestão de risco, preservando velocidade sem abrir mão de segurança, qualidade e rastreabilidade.",
  },
  {
    slug: "ia-automacao-operacoes-tic",
    title: "IA e automação nas operações de TIC",
    category: "Reflexão executiva",
    icon: icons.automation,
    summary: "Oportunidades e limites da automação inteligente em ambientes de alta responsabilidade.",
    content:
      "IA e automação podem apoiar triagem, análise de logs, priorização de incidentes, documentação e identificação de padrões. A adoção responsável, porém, exige dados confiáveis, supervisão humana, segurança e métricas claras. Esta reflexão executiva propõe usar automação inteligente para ampliar capacidade operacional, mantendo governança, auditoria e foco em valor mensurável.",
  },
  {
    slug: "infraestrutura-observabilidade-continuidade",
    title: "Infraestrutura, observabilidade e continuidade",
    category: "Artigo técnico",
    icon: icons.infrastructure,
    summary: "Como monitoramento, capacidade, incidentes e continuidade formam a base da confiabilidade digital.",
    content:
      "Infraestrutura confiável precisa ser observável. Métricas, logs, alertas, rastreamento e painéis executivos permitem compreender serviços antes que falhas virem crises. Este artigo técnico conecta observabilidade, continuidade e gestão de incidentes, mostrando que operar bem é saber o que acontece, responder com método e aprender continuamente com eventos reais.",
  },
  {
    slug: "governo-digital-seguro",
    title: "Governo digital seguro e modernização pública",
    category: "Publicação institucional",
    icon: icons.publicSector,
    summary: "Princípios para serviços públicos digitais orientados por segurança, inclusão e eficiência.",
    content:
      "Serviços públicos digitais precisam ser simples, seguros, acessíveis e confiáveis. Modernização pública exige interoperabilidade, privacidade, continuidade, transparência e métricas de desempenho. Esta publicação institucional propõe uma visão de governo digital seguro em que eficiência operacional e confiança pública caminham juntas, com tecnologia a serviço do cidadão.",
  },
  {
    slug: "educacao-tecnologica-mentoria",
    title: "Educação tecnológica e mentoria profissional",
    category: "Reflexão executiva",
    icon: icons.education,
    summary: "A importância de formar pessoas para tecnologia com prática, ética, governança e visão de carreira.",
    content:
      "Educação tecnológica ganha força quando aproxima fundamentos, prática e contexto profissional. Mentoria ajuda jovens talentos a entenderem ferramentas, responsabilidade, colaboração e disciplina operacional. Esta reflexão posiciona formação e orientação como dimensões da liderança em tecnologia, capazes de fortalecer empregabilidade, maturidade técnica e impacto social.",
  },
  {
    slug: "ifsp-desenvolvimento-academico",
    title: "IFSP, desenvolvimento acadêmico e prática profissional",
    category: "Publicação institucional",
    icon: icons.academic,
    summary: "Como a base acadêmica fortalece governança, segurança e capacidade analítica na atuação em tecnologia.",
    content:
      "A formação acadêmica contribui para método, pensamento crítico e capacidade analítica em tecnologia. Experiências relacionadas ao IFSP e ao desenvolvimento continuado podem apoiar estudos aplicados e futuras submissões. Esta publicação institucional está em desenvolvimento para futura submissão a espaços técnicos ou acadêmicos, sem afirmar publicação indexada ou revisão por pares.",
  },
  {
    slug: "esg-tecnologia-sustentavel",
    title: "ESG e tecnologia sustentável em operações digitais",
    category: "Reflexão executiva",
    icon: icons.esg,
    summary: "Como eficiência, governança, segurança e sustentabilidade orientam decisões tecnológicas.",
    content:
      "ESG em tecnologia envolve infraestrutura eficiente, descarte responsável, privacidade, inclusão digital, fornecedores, continuidade e redução de desperdícios. Operações de TIC podem contribuir com automação, cloud governada, indicadores e educação tecnológica. Esta reflexão executiva trata sustentabilidade digital como critério de gestão e responsabilidade institucional.",
  },
  {
    slug: "inovacao-operacoes",
    title: "Inovação aplicada às operações",
    category: "Artigo técnico",
    icon: icons.innovation,
    summary: "Como melhoria contínua, automação e experimentação se tornam ganhos operacionais reais.",
    content:
      "Inovação operacional nasce da observação de gargalos, redesenho de fluxos, uso de dados e automação de tarefas repetitivas. Para gerar valor, precisa de hipóteses, métricas, documentação e governança. Este artigo técnico defende uma inovação pragmática, orientada a qualidade, redução de fricção e capacidade institucional de evolução contínua.",
  },
  {
    slug: "indicadores-executivos-tic",
    title: "Indicadores executivos para operações de TIC",
    category: "Publicação institucional",
    icon: icons.indicators,
    summary: "Métricas que ajudam liderança a enxergar disponibilidade, risco, eficiência, qualidade e valor entregue.",
    content:
      "Indicadores executivos traduzem complexidade técnica em visão de gestão. Disponibilidade, incidentes, tempo de resolução, mudanças, riscos, custos, automação e satisfação precisam ter objetivo, dono e limite de atenção. Esta publicação institucional apresenta métricas como instrumentos de governança para priorizar recursos, demonstrar valor e fortalecer confiança.",
  },
];

const enArticles = [
  {
    slug: "governanca-ti-confianca-institucional",
    title: "IT governance as the foundation of institutional trust",
    category: "Technical article",
    icon: icons.governance,
    summary: "How processes, metrics, security, and accountability sustain credible digital transformation.",
    content:
      "IT governance turns technology into institutional capability when it connects executive decisions, risk, metrics, compliance, and operational delivery. For ICT operations leadership, this alignment helps demonstrate value, organize priorities, and reduce improvisation in critical environments. This technical article presents governance as a trust structure that makes digital transformation more predictable, auditable, and sustainable.",
  },
  {
    slug: "ciberseguranca-politica-gestao",
    title: "Cybersecurity as a management policy",
    category: "Executive reflection",
    icon: icons.cybersecurity,
    summary: "Why information security must be treated as an executive capability, not only a technical domain.",
    content:
      "Cybersecurity should not be isolated in tools or emergency responses. It must participate in decisions about risk, budget, continuity, culture, and accountability. This executive reflection positions information security as a management policy, with clear responsibilities, risk-based prioritization, accessible communication, and integration across technical teams, leadership, and business areas.",
  },
  {
    slug: "iso-27001-operacoes-tic",
    title: "ISO 27001 applied to ICT operations",
    category: "Technical article",
    icon: icons.iso,
    summary: "A practical view of controls, risks, continuous improvement, and security maturity.",
    content:
      "ISO 27001 offers a structured path to turn information security into a management system. In ICT operations, its value appears when controls are embedded into daily routines: access, changes, incidents, continuity, suppliers, and evidence. This technical article treats the standard as an operational maturity instrument, not bureaucracy, highlighting its contribution to trust, auditability, and resilience.",
  },
  {
    slug: "lgpd-governanca-dados",
    title: "LGPD, data governance, and institutional responsibility",
    category: "Institutional publication",
    icon: icons.lgpd,
    summary: "How privacy, processes, and security connect to the modernization of digital services.",
    content:
      "LGPD reinforces that personal data is an institutional commitment. Digital modernization must consider legal bases, minimization, transparency, access control, retention, and incident response from the design stage. This institutional publication approaches privacy as a governance practice that reduces exposure, increases trust, and aligns technology with public and corporate responsibility.",
  },
  {
    slug: "transformacao-digital-excelencia-operacional",
    title: "Digital transformation and operational excellence",
    category: "Executive reflection",
    icon: icons.transformation,
    summary: "Digital transformation as an evolution of processes, indicators, culture, and value delivery.",
    content:
      "Digital transformation is not merely digitizing existing tasks. It means redesigning flows, reducing friction, measuring performance, and creating continuous adaptability. This executive reflection links operational excellence with automation, cloud, DevOps, governance, and improvement culture, showing that real value appears when an organization becomes clearer, more responsive, and more measurable.",
  },
  {
    slug: "cloud-resiliencia-operacional",
    title: "Cloud computing and operational resilience",
    category: "Technical article",
    icon: icons.cloud,
    summary: "Cloud decisions guided by availability, security, cost, continuity, and governance.",
    content:
      "Cloud computing expands elasticity and speed, but it requires mature decisions about architecture, cost, security, continuity, and shared responsibility. For ICT operations, migration is not enough: the goal is to operate better. This technical article presents cloud as a resilience platform when combined with automation, monitoring, recovery, standardization, and financial governance.",
  },
  {
    slug: "devops-governanca-entrega",
    title: "DevOps with governance: speed without losing control",
    category: "Technical article",
    icon: icons.devops,
    summary: "How DevOps practices accelerate delivery while preserving traceability, security, and quality.",
    content:
      "DevOps and governance are not opposing forces. Pipelines, automated tests, code review, infrastructure as code, and observability reduce errors and make delivery more transparent. This technical article argues for DevOps with control criteria, evidence, and risk management, preserving speed without sacrificing security, quality, and traceability.",
  },
  {
    slug: "ia-automacao-operacoes-tic",
    title: "AI and automation in ICT operations",
    category: "Executive reflection",
    icon: icons.automation,
    summary: "Opportunities and limits of intelligent automation in high-accountability environments.",
    content:
      "AI and automation can support triage, log analysis, incident prioritization, documentation, and pattern detection. Responsible adoption, however, requires reliable data, human supervision, security, and clear metrics. This executive reflection proposes intelligent automation as a way to expand operational capacity while preserving governance, auditability, and measurable value.",
  },
  {
    slug: "infraestrutura-observabilidade-continuidade",
    title: "Infrastructure, observability, and continuity",
    category: "Technical article",
    icon: icons.infrastructure,
    summary: "How monitoring, capacity, incidents, and continuity form the foundation of digital reliability.",
    content:
      "Reliable infrastructure must be observable. Metrics, logs, alerts, traces, and executive dashboards help teams understand services before failures become crises. This technical article connects observability, continuity, and incident management, showing that operating well means knowing what is happening, responding with method, and learning continuously from real events.",
  },
  {
    slug: "governo-digital-seguro",
    title: "Secure digital government and public modernization",
    category: "Institutional publication",
    icon: icons.publicSector,
    summary: "Principles for digital public services guided by security, inclusion, and efficiency.",
    content:
      "Digital public services must be simple, secure, accessible, and reliable. Public modernization requires interoperability, privacy, continuity, transparency, and performance metrics. This institutional publication proposes a secure digital government vision in which operational efficiency and public trust move together, with technology serving citizens.",
  },
  {
    slug: "educacao-tecnologica-mentoria",
    title: "Technology education and professional mentoring",
    category: "Executive reflection",
    icon: icons.education,
    summary: "Preparing people for technology with practice, ethics, governance, and career vision.",
    content:
      "Technology education becomes stronger when it connects fundamentals, practice, and professional context. Mentoring helps young talent understand tools, responsibility, collaboration, and operational discipline. This reflection positions education and guidance as dimensions of technology leadership that strengthen employability, technical maturity, and social impact.",
  },
  {
    slug: "ifsp-desenvolvimento-academico",
    title: "IFSP, academic development, and professional practice",
    category: "Institutional publication",
    icon: icons.academic,
    summary: "How academic foundations strengthen governance, security, and analytical capability in technology work.",
    content:
      "Academic education contributes method, critical thinking, and analytical capability in technology. Experiences connected to IFSP and continuous development can support applied studies and future submissions. This institutional publication is in development for future submission to technical or academic spaces, without claiming indexed publication or peer review.",
  },
  {
    slug: "esg-tecnologia-sustentavel",
    title: "ESG and sustainable technology in digital operations",
    category: "Executive reflection",
    icon: icons.esg,
    summary: "How efficiency, governance, security, and sustainability guide technology decisions.",
    content:
      "ESG in technology includes efficient infrastructure, responsible disposal, privacy, digital inclusion, suppliers, continuity, and waste reduction. ICT operations can contribute through automation, governed cloud, indicators, and technology education. This executive reflection treats digital sustainability as a management criterion and an expression of institutional responsibility.",
  },
  {
    slug: "inovacao-operacoes",
    title: "Innovation applied to operations",
    category: "Technical article",
    icon: icons.innovation,
    summary: "How continuous improvement, automation, and experimentation become real operational gains.",
    content:
      "Operational innovation often starts by observing bottlenecks, redesigning flows, using data, and automating repetitive tasks. To create value, it needs hypotheses, metrics, documentation, and governance. This technical article argues for pragmatic innovation focused on quality, friction reduction, and institutional capacity for continuous evolution.",
  },
  {
    slug: "indicadores-executivos-tic",
    title: "Executive indicators for ICT operations",
    category: "Institutional publication",
    icon: icons.indicators,
    summary: "Metrics that help leadership see availability, risk, efficiency, quality, and delivered value.",
    content:
      "Executive indicators translate technical complexity into management visibility. Availability, incidents, resolution time, changes, risks, costs, automation, and satisfaction need a purpose, owner, and attention threshold. This institutional publication presents metrics as governance instruments to prioritize resources, demonstrate value, and strengthen trust.",
  },
];

const addSharedFields = (article) => ({
  ...article,
  year: "2026",
  readTime: 5,
  content: [article.content],
});

export const articlesByLanguage = {
  pt: ptArticles.map(addSharedFields),
  en: enArticles.map(addSharedFields),
};
