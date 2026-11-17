# Gabriel Dantas — Portfolio Website

[![Deploy to GitHub Pages](https://github.com/dantinha/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/dantinha/portfolio/actions/workflows/deploy.yml)
[![Tests Passing](https://img.shields.io/badge/tests-7%2F7%20passing-success)](https://github.com/dantinha/portfolio)
[![TypeScript Strict](https://img.shields.io/badge/typescript-strict-blue)](https://github.com/dantinha/portfolio)
[![License: MIT](https://img.shields.io/badge/license-MIT-gray)](LICENSE)

Live Portfolio: **[dantinha.github.io/portfolio](https://dantinha.github.io/portfolio/)**

Interactive portfolio for **Gabriel Dantas da Silva Oliveira** — AI Product Manager, Context Engineer, and AI Product Builder. Designed with an **Editorial Bento** philosophy that bridges rigorous product discovery and governance with deterministic, production-grade AI systems.

---

## 🎨 Design Philosophy: Editorial Bento

- **Palette:** Warm Obsidian Charcoal (`#0e0b0b`), Vivid Crimson Red (`#991b1b` / `#ef4444`), and Bone Cream (`#f5efe6`).
- **Hierarchy:** 30% High-trust Editorial typography (Newsreader serif) paired with 70% asymmetric, organic 24px-rounded Bento cards.
- **Accessibility & UX:** Full keyboard navigation (`Tab` / `Shift+Tab`), `Esc` modal dismiss, custom high-contrast focus rings, and zero generic AI boilerplate.
- **Micro-Interactions:** Custom SVG wireframe 3D geometries, interactive case study sheets (Problem → Product Decision → Measurable Impact), and instant live links.

---

## 🏗️ Showcase Projects

| Project | Role / Focus | Key Innovation & Impact | Tech Stack |
|---|---|---|---|
| **[Data Context Engine](https://github.com/dantinha/data-context-engine)** | Product Lead & Context Engineer | Context-aware semantic layer; -61.3% tokens via prefix caching; AST SQL guardrails; 86.7% benchmark accuracy | Python, DuckDB, dbt, FastMCP, SQLGlot, Streamlit |
| **[Voz Guia Android](https://github.com/dantinha/voz-guia-android)** | AI Product Manager & Android Dev | AI-native assistive agent for low-vision users; PRD v2.0; <50ms haptic latency; 150 unit tests | Kotlin, Jetpack Compose, AccessibilityService |
| **[Text-to-CAD](https://github.com/dantinha/text-to-cad)** | Technical PM & Architecture | Natural language to parametric 3D CAD; Zod CSG IR; zero-copy mesh Web Worker; 201 tests | TypeScript, React Three Fiber, manifold-3d, Zod |
| **[CertRadar](https://github.com/dantinha/cert-radar)** | Product Builder | Deterministic 4-pillar career exam voucher radar; SQLite + Telegram alerts; 158 tests | Python, SQLite, Pydantic, GitHub Actions |
| **Classifica_Lead** | Lead AI PM | Enterprise CRM lead scoring; 98.7% classification precision; SLA response cut from 4h to 12min | Python, Scikit-learn, FastAPI, PostgreSQL |

---

## 🛠️ Stack & Architecture

- **Framework:** React 19 + TypeScript `strict`
- **Styling:** Tailwind CSS v4 + `@tailwindcss/vite`
- **Typography:** `@fontsource-variable/newsreader`, `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono`
- **Icons:** `lucide-react`
- **Testing:** Vitest (content schema integrity, URL protocol validation, metric summation, privacy sanitization)
- **Deployment:** GitHub Pages via GitHub Actions (automated CI/CD with cache and verification)

---

## ⚡ Development & Scripts

```bash
# Install dependencies
npm install

# Run local development server (Vite HMR)
npm run dev

# Run Vitest test suite
npm test

# Run strict TypeScript typecheck
npm run typecheck

# Build optimized production bundle
npm run build
```

---

## 📬 Contact & Links

- **LinkedIn:** [linkedin.com/in/gdso](https://www.linkedin.com/in/gdso)
- **GitHub:** [github.com/dantinha](https://github.com/dantinha)
- **Email:** [gabrielsilva07032002@gmail.com](mailto:gabrielsilva07032002@gmail.com)
