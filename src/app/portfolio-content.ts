import { AppLanguage } from './language.service';

interface LocalizedText {
  en: string;
  pt: string;
}

interface TimelineEntrySource {
  title: LocalizedText;
  company: string;
  employmentType: LocalizedText;
  period: string;
  location: LocalizedText;
  highlights: LocalizedText[];
}

interface EducationEntrySource {
  degree: LocalizedText;
  school: string;
  period: string;
  details: LocalizedText[];
}

interface CertificationEntrySource {
  name: string;
  issuer: string;
  issued: LocalizedText;
  expires?: LocalizedText;
  details?: LocalizedText;
}

interface SkillGroupSource {
  title: LocalizedText;
  items: string[];
}

interface ProjectEntrySource {
  title: string;
  description: LocalizedText;
  impact: LocalizedText;
  tags: string[];
  liveUrl: string;
  repositoryUrl: string;
}

interface ContactEntrySource {
  label: LocalizedText;
  value: string;
  href?: string;
}

interface PortfolioCopy {
  nav: {
    profile: string;
    projects: string;
    language: string;
    theme: string;
    dark: string;
    light: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    summary: string[];
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    currentRoleLabel: string;
    educationLabel: string;
    contactLabel: string;
    profileAlt: string;
  };
  sections: {
    experience: string;
    experienceLead: string;
    education: string;
    educationLead: string;
    certifications: string;
    certificationsLead: string;
    skills: string;
    skillsLead: string;
    quickContact: string;
    quickContactLead: string;
  };
  projectPage: {
    eyebrow: string;
    title: string;
    lead: string;
    projectMeta: string;
    liveLabel: string;
    repositoryLabel: string;
    profileLabel: string;
    githubEyebrow: string;
    moreTitle: string;
    moreDescription: string;
    moreCta: string;
  };
  footer: string;
}

export interface TimelineEntry {
  title: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  details: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  details?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  impact: string;
  tags: string[];
  liveUrl: string;
  repositoryUrl: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface PortfolioContent {
  copy: PortfolioCopy;
  experience: TimelineEntry[];
  education: EducationEntry[];
  certifications: CertificationEntry[];
  skillGroups: SkillGroup[];
  projects: ProjectEntry[];
  contacts: ContactEntry[];
  profileImageUrl: string;
  profileLinks: {
    github: string;
    linkedin: string;
  };
}

const PORTFOLIO_LINKS = {
  github: 'https://github.com/pedro7161',
  linkedin: 'https://www.linkedin.com/in/pedro-pinto-8141a8173/',
  gameLive: 'https://pedro7161.github.io/Space_idle_Clicker/',
  gameRepo: 'https://github.com/pedro7161/Space_idle_Clicker',
  email: 'mailto:pedro.ramos9@hotmail.com',
  phone: 'tel:+351968495576',
};

const EXPERIENCE: TimelineEntrySource[] = [
  {
    title: {
      en: 'Frontend Developer',
      pt: 'Frontend Developer',
    },
    company: 'Syone',
    employmentType: {
      en: 'Temporary contract',
      pt: 'Contrato temporário',
    },
    period: 'Aug 2025 - Present',
    location: {
      en: 'Lisbon, Portugal',
      pt: 'Lisboa, Portugal',
    },
    highlights: [
      {
        en: 'Current professional focus on Angular and frontend delivery.',
        pt: 'Foco profissional atual em Angular e entrega de frontend.',
      },
    ],
  },
  {
    title: {
      en: 'Consultant / Analyst',
      pt: 'Consultor / Analista',
    },
    company: 'Capgemini',
    employmentType: {
      en: 'Full-time',
      pt: 'Tempo integral',
    },
    period: 'Oct 2024 - Jun 2025',
    location: {
      en: 'Lisbon Region, Portugal · Hybrid',
      pt: 'Lisboa e Região, Portugal · Híbrido',
    },
    highlights: [
      {
        en: 'Built a stronger enterprise foundation across Java, cloud tooling, and delivery processes.',
        pt: 'Reforcei a base enterprise em Java, tooling cloud e processos de entrega.',
      },
    ],
  },
  {
    title: {
      en: 'Frontend Web Developer',
      pt: 'Frontend Web Developer',
    },
    company: 'BLASTING Energy',
    employmentType: {
      en: 'Internship',
      pt: 'Estágio',
    },
    period: 'Mar 2023 - Jun 2023',
    location: {
      en: 'Lisbon, Portugal · Remote',
      pt: 'Lisboa, Portugal · Remoto',
    },
    highlights: [
      {
        en: 'Worked directly with Angular in a real company migration scenario.',
        pt: 'Trabalhei diretamente com Angular num cenário real de migração empresarial.',
      },
    ],
  },
  {
    title: {
      en: 'Full Stack Developer',
      pt: 'Desenvolvedor Full Stack',
    },
    company: 'BLASTING Energy',
    employmentType: {
      en: 'Internship',
      pt: 'Estágio',
    },
    period: 'Mar 2020 - Aug 2020',
    location: {
      en: 'Innovation Center FCUL · Remote',
      pt: 'Centro de Inovação FCUL · Remoto',
    },
    highlights: [
      {
        en: 'Improved web application performance by 25% in 3 months.',
        pt: 'Melhorei a performance de aplicações web em 25% em 3 meses.',
      },
      {
        en: 'Edited videos, updated logo animation, and created 3D models for company content.',
        pt: 'Editei vídeos, atualizei a animação do logótipo e criei modelos 3D para conteúdos da empresa.',
      },
    ],
  },
  {
    title: {
      en: 'Intern',
      pt: 'Intern',
    },
    company: 'Partilha Fundamental LDA',
    employmentType: {
      en: 'Internship',
      pt: 'Estágio',
    },
    period: 'May 2018 - Jul 2018',
    location: {
      en: 'Lisbon, Portugal · On-site',
      pt: 'Lisboa, Portugal · Presencial',
    },
    highlights: [
      {
        en: 'Created a flyer in Photoshop to support sales activity.',
        pt: 'Criei um flyer em Photoshop para apoiar a atividade comercial.',
      },
      {
        en: 'Built Flash animations and a mobile quiz app about the company.',
        pt: 'Desenvolvi animações em Flash e uma app móvel de quiz sobre a empresa.',
      },
    ],
  },
];

const EDUCATION: EducationEntrySource[] = [
  {
    degree: {
      en: "Bachelor's Degree in Informatics",
      pt: 'Licenciatura em Informática',
    },
    school: 'ISTEC',
    period: '2020 - 2023',
    details: [
      {
        en: 'Focused on software development, object-oriented programming, and collaborative engineering work.',
        pt: 'Foco em desenvolvimento de software, programação orientada a objetos e trabalho de engenharia colaborativo.',
      },
    ],
  },
  {
    degree: {
      en: 'CTeSP in Multimedia Product Development',
      pt: 'CTeSP em Desenvolvimento de Produtos Multimédia',
    },
    school: 'ISTEC',
    period: '2018 - 2020',
    details: [
      {
        en: 'Final grade: 15/20.',
        pt: 'Nota final: 15/20.',
      },
    ],
  },
  {
    degree: {
      en: 'Level 4 Technician in Management and Programming of Computer Systems',
      pt: 'Nível 4 em Técnico de Gestão e Programação de Sistemas Informáticos',
    },
    school: 'Professional School Gustave Eiffel',
    period: '2015 - 2018',
    details: [
      {
        en: 'Final grade: 15/20.',
        pt: 'Nota final: 15/20.',
      },
    ],
  },
];

const CERTIFICATIONS: CertificationEntrySource[] = [
  {
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    issued: {
      en: 'Issued Nov 2024',
      pt: 'Emitido em nov 2024',
    },
  },
  {
    name: 'GitHub Copilot',
    issuer: 'GitHub',
    issued: {
      en: 'Issued Mar 2025',
      pt: 'Emitido em mar 2025',
    },
    expires: {
      en: 'Expires Mar 2028',
      pt: 'Expira em mar 2028',
    },
  },
  {
    name: 'Computer Engineering Certificate',
    issuer: 'ISTEC',
    issued: {
      en: 'Academic certification',
      pt: 'Certificação académica',
    },
    details: {
      en: 'Focused on frontend and backend development foundations.',
      pt: 'Focado em bases de desenvolvimento frontend e backend.',
    },
  },
];

const SKILL_GROUPS: SkillGroupSource[] = [
  {
    title: {
      en: 'Frontend',
      pt: 'Frontend',
    },
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'React'],
  },
  {
    title: {
      en: 'Backend & Platform',
      pt: 'Backend e Plataforma',
    },
    items: ['Java', 'C#', '.NET', 'PHP', 'SQL', 'REST APIs', 'Docker', 'AWS', 'Kubernetes', 'YAML'],
  },
  {
    title: {
      en: 'Workflow & Tools',
      pt: 'Workflow e Ferramentas',
    },
    items: ['Git', 'GitHub', 'GitHub Copilot', 'Scrum', 'Linux', 'Azure'],
  },
  {
    title: {
      en: 'Creative & Media',
      pt: 'Criativo e Multimédia',
    },
    items: ['Adobe Illustrator', 'Adobe Premiere Pro', '3D Modelling', 'Motion Graphics'],
  },
];

const PROJECTS: ProjectEntrySource[] = [
  {
    title: 'Space Idle Clicker / Frontier Miner',
    description: {
      en: 'A browser-based Angular incremental game built around mining, multi-planet logistics, orbital stations, fleet routing, and generated frontier exploration.',
      pt: 'Um jogo incremental em Angular para browser centrado em mineração, logística multi-planeta, estações orbitais, rotas de frota e exploração gerada da fronteira.',
    },
    impact: {
      en: 'Shows product ownership across gameplay systems, Angular architecture, UI iteration, save-state design, and public deployment through GitHub Pages.',
      pt: 'Mostra ownership de produto em sistemas de gameplay, arquitetura Angular, iteração de UI, desenho de save-state e publicação pública via GitHub Pages.',
    },
    tags: ['Angular', 'TypeScript', 'Game UI', 'State Management', 'GitHub Pages'],
    liveUrl: PORTFOLIO_LINKS.gameLive,
    repositoryUrl: PORTFOLIO_LINKS.gameRepo,
  },
];

const CONTACTS: ContactEntrySource[] = [
  {
    label: {
      en: 'Email',
      pt: 'Email',
    },
    value: 'pedro.ramos9@hotmail.com',
    href: PORTFOLIO_LINKS.email,
  },
  {
    label: {
      en: 'Phone',
      pt: 'Telefone',
    },
    value: '+351 968 495 576',
    href: PORTFOLIO_LINKS.phone,
  },
  {
    label: {
      en: 'LinkedIn',
      pt: 'LinkedIn',
    },
    value: 'Pedro Pinto',
    href: PORTFOLIO_LINKS.linkedin,
  },
  {
    label: {
      en: 'GitHub',
      pt: 'GitHub',
    },
    value: 'github.com/pedro7161',
    href: PORTFOLIO_LINKS.github,
  },
];

const COPY: Record<AppLanguage, PortfolioCopy> = {
  en: {
    nav: {
      profile: 'Profile',
      projects: 'Projects',
      language: 'Language',
      theme: 'Theme',
      dark: 'Dark',
      light: 'Light',
    },
    hero: {
      eyebrow: 'Frontend Developer · Lisbon, Portugal',
      name: 'Pedro Pinto',
      role: 'Angular-focused frontend developer with enterprise consulting exposure and a strong hands-on product mindset.',
      summary: [
        'I build modern web interfaces with a focus on clarity, maintainability, and real user flow.',
        'My background combines Angular delivery, full-stack internship work, consulting exposure, and a multimedia foundation that helps me care about both structure and presentation.',
      ],
      primaryCta: 'View Projects',
      secondaryCta: 'Open LinkedIn',
      locationLabel: 'Based in',
      currentRoleLabel: 'Current role',
      educationLabel: 'Education',
      contactLabel: 'Quick contact',
      profileAlt: 'Pedro Pinto profile photo',
    },
    sections: {
      experience: 'Experience',
      experienceLead: 'Recent work across frontend delivery, internships, and consulting-oriented environments.',
      education: 'Education',
      educationLead: 'Academic background across informatics, multimedia, and computer systems.',
      certifications: 'Licenses & Certifications',
      certificationsLead: 'Recent credentials that support delivery, tooling, and workflow maturity.',
      skills: 'Skills',
      skillsLead: 'Core tools and technologies I bring into frontend and product work.',
      quickContact: 'Contact',
      quickContactLead: 'Useful links for recruiters, hiring managers, and companies.',
    },
    projectPage: {
      eyebrow: 'Selected Work',
      title: 'Projects worth opening before the interview',
      lead: 'A focused project tab with current public work, live links, and repository access.',
      projectMeta: 'Angular · Public project',
      liveLabel: 'Open Live Project',
      repositoryLabel: 'View Repository',
      profileLabel: 'View GitHub Profile',
      githubEyebrow: 'GitHub',
      moreTitle: 'More code on GitHub',
      moreDescription: 'My GitHub profile is the best place to track public repos, experiments, and what I am actively building next.',
      moreCta: 'Open GitHub',
    },
    footer: '',
  },
  'pt-PT': {
    nav: {
      profile: 'Perfil',
      projects: 'Projetos',
      language: 'Idioma',
      theme: 'Tema',
      dark: 'Escuro',
      light: 'Claro',
    },
    hero: {
      eyebrow: 'Frontend Developer · Lisboa, Portugal',
      name: 'Pedro Pinto',
      role: 'Frontend developer focado em Angular, com contacto com consultoria enterprise e uma abordagem muito prática ao produto.',
      summary: [
        'Construo interfaces web modernas com foco em clareza, manutenção e fluxo real do utilizador.',
        'O meu percurso junta entrega em Angular, trabalho de estágio full stack, contacto com consultoria e uma base multimédia que me faz valorizar tanto a estrutura como a apresentação.',
      ],
      primaryCta: 'Ver Projetos',
      secondaryCta: 'Abrir LinkedIn',
      locationLabel: 'Baseado em',
      currentRoleLabel: 'Função atual',
      educationLabel: 'Formação',
      contactLabel: 'Contacto rápido',
      profileAlt: 'Fotografia de perfil de Pedro Pinto',
    },
    sections: {
      experience: 'Experiência',
      experienceLead: 'Trabalho recente entre frontend, estágios e contextos orientados para consultoria.',
      education: 'Formação Académica',
      educationLead: 'Percurso académico entre informática, multimédia e sistemas informáticos.',
      certifications: 'Licenças e Certificados',
      certificationsLead: 'Credenciais recentes que reforçam entrega, tooling e maturidade de workflow.',
      skills: 'Competências',
      skillsLead: 'Ferramentas e tecnologias principais que levo para trabalho de frontend e produto.',
      quickContact: 'Contacto',
      quickContactLead: 'Links úteis para recrutadores, hiring managers e empresas.',
    },
    projectPage: {
      eyebrow: 'Trabalho em Destaque',
      title: 'Projetos que vale a pena abrir antes da entrevista',
      lead: 'Um separador focado em trabalho público atual, links live e acesso direto ao repositório.',
      projectMeta: 'Angular · Projeto público',
      liveLabel: 'Abrir Projeto Live',
      repositoryLabel: 'Ver Repositório',
      profileLabel: 'Ver Perfil GitHub',
      githubEyebrow: 'GitHub',
      moreTitle: 'Mais código no GitHub',
      moreDescription: 'O meu perfil de GitHub é o melhor sítio para acompanhar repositórios públicos, experiências e o que estou a construir a seguir.',
      moreCta: 'Abrir GitHub',
    },
    footer: 'Construído com Angular e organizado para ser fácil de atualizar à medida que o CV evolui.',
  },
};

function resolveText(language: AppLanguage, text: LocalizedText): string {
  return language === 'pt-PT' ? text.pt : text.en;
}

export function getPortfolioContent(language: AppLanguage): PortfolioContent {
  return {
    copy: COPY[language],
    experience: EXPERIENCE.map(entry => ({
      title: resolveText(language, entry.title),
      company: entry.company,
      employmentType: resolveText(language, entry.employmentType),
      period: entry.period,
      location: resolveText(language, entry.location),
      highlights: entry.highlights.map(highlight => resolveText(language, highlight)),
    })),
    education: EDUCATION.map(entry => ({
      degree: resolveText(language, entry.degree),
      school: entry.school,
      period: entry.period,
      details: entry.details.map(detail => resolveText(language, detail)),
    })),
    certifications: CERTIFICATIONS.map(entry => ({
      name: entry.name,
      issuer: entry.issuer,
      issued: resolveText(language, entry.issued),
      expires: entry.expires ? resolveText(language, entry.expires) : undefined,
      details: entry.details ? resolveText(language, entry.details) : undefined,
    })),
    skillGroups: SKILL_GROUPS.map(group => ({
      title: resolveText(language, group.title),
      items: group.items,
    })),
    projects: PROJECTS.map(project => ({
      title: project.title,
      description: resolveText(language, project.description),
      impact: resolveText(language, project.impact),
      tags: project.tags,
      liveUrl: project.liveUrl,
      repositoryUrl: project.repositoryUrl,
    })),
    contacts: CONTACTS.map(contact => ({
      label: resolveText(language, contact.label),
      value: contact.value,
      href: contact.href,
    })),
    profileImageUrl: 'https://github.com/pedro7161.png?size=320',
    profileLinks: {
      github: PORTFOLIO_LINKS.github,
      linkedin: PORTFOLIO_LINKS.linkedin,
    },
  };
}
