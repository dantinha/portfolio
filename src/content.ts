export type Link = { readonly label: string; readonly href: string };

export type SurfaceTone = 'cream' | 'crimson' | 'obsidian' | 'sculptural';

export type CaseStudy = {
  readonly problem: string;
  readonly decision: string;
  readonly impact: string;
};

export type Project = {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly summary: string;
  readonly status: 'live' | 'shipped' | 'in-progress' | 'private';
  readonly surface: SurfaceTone;
  readonly stack: readonly string[];
  readonly tests?: number;
  readonly facts: readonly string[];
  readonly caseStudy: CaseStudy;
  readonly links: readonly Link[];
};

export const profile = {
  initials: 'GD',
  name: 'Gabriel Dantas',
  headlinePrefix: 'Gabriel Dantas,',
  headlineEmphasis: 'product & AI builder.',
  role: 'AI Product Manager & Context Engineer',
  location: 'São Paulo · Braskem',
  company: 'Digital Product Management @ Braskem',
  thesis:
    'I bridge product discovery and business governance with deterministic AI engineering — turning experimental prompts into tested, auditable software.',
  email: 'gabrielsilva07032002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gdso',
  github: 'https://github.com/dantinha',
} as const;

export const dceLevels = [
  { id: 'L0', label: 'Zero context', accuracy: 13.3 },
  { id: 'L1', label: 'Naive schema dump', accuracy: 33.3 },
  { id: 'L2', label: 'Curated marts', accuracy: 53.3 },
  { id: 'L3', label: 'Semantic routing', accuracy: 70.0 },
  { id: 'L4', label: 'Data Context Engine', accuracy: 83.3 },
] as const;

export const projects: readonly Project[] = [
  {
    id: 'dce',
    name: 'Data Context Engine',
    tagline: 'Context Engineering · Live',
    summary:
      'Four-layer semantic engine over DuckDB and dbt with active clarification, graph-aware retrieval, prefix caching, and AST guardrails.',
    status: 'live',
    surface: 'cream',
    stack: ['Python', 'DuckDB', 'dbt', 'FastMCP', 'SQLGlot', 'Streamlit'],
    tests: 83,
    facts: [
      '86.7% benchmark accuracy (33.3% naive baseline)',
      '-61.3% tokens via static prefix caching',
      '24/24 SQL attack vectors blocked',
    ],
    caseStudy: {
      problem:
        'Dumping raw enterprise schemas into LLM prompts triggers token bloat, silent metric hallucinations on ambiguous KPIs, and SQL injection/mutation risks.',
      decision:
        'Engineered a 4-layer semantic pipeline with human-in-the-loop disambiguation (STOP_AND_ASK_USER), BFS join-graph routing, cacheable prompt prefixes, and deterministic SQLGlot AST sandboxing over 7 FastMCP tools.',
      impact:
        'Single-shot accuracy jumped from 33.3% to 83.3% (up to 86.7% with self-correction) across 30 gold questions, cutting token cost by 61.3% with 83 automated tests and a live Streamlit playground.',
    },
    links: [
      { label: 'Live Demo', href: 'https://data-context-engine.streamlit.app' },
      { label: 'GitHub', href: 'https://github.com/dantinha/data-context-engine' },
    ],
  },
  {
    id: 'voz-guia',
    name: 'Voz Guia',
    tagline: 'Product + Android · A11y',
    summary:
      'Conversational Android assistive agent built for my father after recent visual loss — replacing verbose TalkBack flows with <50 ms physical interaction.',
    status: 'shipped',
    surface: 'crimson',
    stack: ['Kotlin', 'Jetpack Compose', 'AccessibilityService', 'Room'],
    tests: 150,
    facts: [
      'PRD v2.0 with 5 Epics & 18 Features',
      '<50 ms haptic confirmation contract',
      '34 suites / 150 TDD tests passing',
    ],
    caseStudy: {
      problem:
        'Standard screen readers narrate verbose layout DOM trees and demand precise double-tap spatial gestures that overwhelm adults with recent visual loss.',
      decision:
        'Authored a complete PRD v2.0 (5 Epics, 18 Features, Gherkin user stories) anchored on blind physical Volume-Down triggers, a <50 ms haptic heartbeat, offline TTS/STT, and encrypted financial/password node guardrails.',
      impact:
        '34 test suites / 150 unit tests passing with zero failures, Room SQLite persistence verified on emulator, and a signed Play Console release bundle (AAB) validated in field testing.',
    },
    links: [{ label: 'GitHub', href: 'https://github.com/dantinha/voz-guia-android' }],
  },
  {
    id: 'text-to-cad',
    name: 'Text-to-CAD',
    tagline: '3D Engine · CSG Worker',
    summary:
      'Natural language to parametric 3D geometry. The LLM outputs a Zod-validated CSG tree evaluated by manifold-3d in a Web Worker.',
    status: 'shipped',
    surface: 'sculptural',
    stack: ['TypeScript', 'React Three Fiber', 'manifold-3d', 'Zod'],
    tests: 201,
    facts: [
      '201 unit tests (95%+ coverage) + 5 Playwright E2E tests',
      'Zero-copy mesh worker, OpenSCAD emitter & Cloudflare proxy',
    ],
    caseStudy: {
      problem:
        'Letting an LLM emit raw 3D triangles or arbitrary OpenSCAD scripts produces broken non-manifold geometry and brittle error loops.',
      decision:
        'Introduced an explicit Intermediate Representation (CSG JSON tree) validated by Zod before a Web Worker running manifold-3d evaluates zero-copy meshes for React Three Fiber and deterministic OpenSCAD export.',
      impact:
        '201 automated unit tests (95%+ coverage) and 5/5 Playwright E2E tests green across IR validation, OpenSCAD emission, 3D viewport geometry, and /api/gemini Worker proxy, backed by secret-scanning pre-commit hooks and CI.',
    },
    links: [{ label: 'GitHub', href: 'https://github.com/dantinha/text-to-cad' }],
  },
  {
    id: 'cert-radar',
    name: 'CertRadar',
    tagline: 'Career Intelligence',
    summary:
      'Deterministic 4-pillar certification matching against career skill gaps with HTTP liveness checks and anti-spam voucher deadline alerts.',
    status: 'shipped',
    surface: 'cream',
    stack: ['Python', 'SQLite', 'Pydantic'],
    tests: 158,
    facts: [
      '158 automated tests passing (100%)',
      'Zero-cost infra with Telegram & Windows alerts',
    ],
    caseStudy: {
      problem:
        'Upskilling trackers drown engineers in irrelevant courses, broken 404 voucher URLs, and redundant certifications already listed on their resume.',
      decision:
        'Built an explainable 4-pillar scoring engine (Role Alignment, Gap Closure, Recruiter Signal, Cost Urgency) with automatic CV redundancy suppression and epoch-deduplicated alerts.',
      impact:
        '158 automated unit and integration tests passing at zero infrastructure cost, surfacing high-signal AI & Cloud exam vouchers on time.',
    },
    links: [{ label: 'GitHub', href: 'https://github.com/dantinha/cert-radar' }],
  },
  {
    id: 'classifica-lead',
    name: 'Classifica_Lead',
    tagline: 'B2B Multi-Tenant AI',
    summary:
      'Multi-tenant lead qualification with dynamic tenant rubrics, Gemini Structured Outputs, 4-provider CNPJ fallback, and LGPD Art. 18 opt-out.',
    status: 'private',
    surface: 'obsidian',
    stack: ['FastAPI', 'Gemini', 'Python'],
    facts: ['Private repository · Architecture walkthrough on request'],
    caseStudy: {
      problem:
        'B2B sales pipelines waste LLM tokens qualifying out-of-profile leads and break whenever single public company-registry APIs rate-limit.',
      decision:
        'Designed a zero-token CNAE pre-filter, cascading 4-provider CNPJ enrichment (BrasilAPI → MinhaReceita → ReceitaWS → CNPJ.ws), Gemini Structured Outputs over tenant rubrics, and strict LGPD opt-out.',
      impact:
        'Resilient multi-tenant FastAPI architecture running inbound/outbound cadences without single-API downtime.',
    },
    links: [],
  },
] as const;

export const productSkills = [
  'Product Discovery',
  'MVP Scoping',
  'RICE / WSJF',
  'Roadmaps',
  'KPIs & Adoption',
  'Jira & Confluence',
] as const;

export const engineeringSkills = [
  'Context Engineering',
  'FastMCP',
  'Prefix Caching',
  'AST Guardrails',
  'Python & SQL',
  'dbt & DuckDB',
  'Kotlin / Compose',
  'TypeScript',
] as const;

export const experience = [
  {
    period: '2026 – now',
    title: 'Digital Product Management',
    org: 'Braskem',
    detail:
      'Product discovery, MVP definition, and RICE/WSJF prioritization for internal data products. Power BI and SQL to govern KPIs and adoption rate.',
  },
  {
    period: '2025 – 2026',
    title: 'Intern, VMO & New Energy Business',
    org: 'Braskem',
    detail:
      'Value tracking, industrial energy management metrics, and executive analytical reporting.',
  },
  {
    period: '2023 – 2025',
    title: 'Production Process Analyst',
    org: 'Rainha das Sete',
    detail:
      'Process mapping, Kaizen/5S continuous improvement, and Lean Six Sigma operational standardization.',
  },
] as const;

export const education = [
  { title: 'MBA in Business Intelligence', org: 'FIAP', period: '2025 – 2026' },
  { title: 'MBA in Industrial Automation', org: 'USP-POLI', period: '2023 – 2025' },
  { title: 'B.Sc. Electrical Engineering', org: 'Universidade São Judas', period: '2024 – 2026' },
  { title: 'CAPM® Certification', org: 'PMI', period: '2024' },
] as const;

export const principles = [
  {
    title: 'Spec before code',
    body: 'Every product starts with clear user tension, constraints, and acceptance criteria. Voz Guia had 18 specified features before the first line of Kotlin.',
  },
  {
    title: 'Determinism where it counts',
    body: 'Models propose; deterministic guardrails verify. SQL passes an AST check, 3D models pass a Zod CSG schema.',
  },
  {
    title: 'Proof over buzzwords',
    body: 'Every claim on this page is backed by an open repository, a benchmark, or a test suite you can inspect.',
  },
] as const;
