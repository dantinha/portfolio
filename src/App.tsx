import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { CaseStudySheet } from './components/CaseStudySheet';
import { ProjectTile } from './components/ProjectTile';
import { Chip, Eyebrow, Tile } from './components/Tile';
import {
  education,
  engineeringSkills,
  experience,
  principles,
  productSkills,
  profile,
  projects,
  type Project,
} from './content';

function getProject(id: string): Project {
  const found = projects.find((p) => p.id === id);
  if (!found) throw new Error(`Projeto desconhecido: ${id}`);
  return found;
}

export function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#0e0b0b] text-[#f5efe6]">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#f5efe6] focus:px-4 focus:py-2 focus:text-[#161212]"
      >
        Skip to work
      </a>

      <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        {/* 30% Editorial Opening */}
        <header className="flex flex-wrap items-center justify-between gap-3 pt-8">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#1a1414] font-editorial text-sm font-medium text-[#f5efe6]"
              aria-hidden
            >
              {profile.initials}
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#181313] px-3 py-1 text-[12px] text-[#c9bfb8]">
              <MapPin size={12} className="text-red-400" aria-hidden />
              {profile.location}
            </span>
          </div>

          <nav className="flex items-center gap-4 text-[13px] text-[#b5aba4]" aria-label="Primary">
            <a href="#work" className="hover:text-[#f5efe6] transition-colors">
              Work
            </a>
            <a href="#approach" className="hover:text-[#f5efe6] transition-colors">
              Approach
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-[#991b1b] px-3.5 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-[#b91c1c]"
            >
              Contact
            </a>
          </nav>
        </header>

        <div className="max-w-2xl pb-10 pt-10 sm:pt-14">
          <h1 className="font-editorial text-4xl font-normal tracking-tight leading-[1.1] sm:text-5xl">
            {profile.headlinePrefix}{' '}
            <span className="italic text-[#ef4444]">{profile.headlineEmphasis}</span>
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#b5aba4]">{profile.thesis}</p>
          <p className="mt-2.5 font-mono text-[12px] text-[#8c827b]">
            {profile.role} · {profile.company}
          </p>
        </div>

        {/* 70% Organic Asymmetric Bento Grid */}
        <main id="work" className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectTile
            project={getProject('dce')}
            className="sm:col-span-2"
            onOpenCaseStudy={setActiveProject}
          />
          <ProjectTile
            project={getProject('voz-guia')}
            className="sm:col-span-1"
            onOpenCaseStudy={setActiveProject}
          />

          <ProjectTile
            project={getProject('text-to-cad')}
            className="sm:col-span-1"
            onOpenCaseStudy={setActiveProject}
          />
          <ProjectTile
            project={getProject('cert-radar')}
            className="sm:col-span-1"
            onOpenCaseStudy={setActiveProject}
          />
          <ProjectTile
            project={getProject('classifica-lead')}
            className="sm:col-span-1"
            onOpenCaseStudy={setActiveProject}
          />

          {/* Toolkit & Credentials Bento Row */}
          <Tile surface="obsidian" label="Skills" className="sm:col-span-2">
            <Eyebrow>Product &amp; Governance</Eyebrow>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {productSkills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </ul>
            <div className="mt-5">
              <Eyebrow>AI &amp; Engineering</Eyebrow>
            </div>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {engineeringSkills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </ul>
          </Tile>

          <Tile surface="obsidian" label="Connect" className="justify-between">
            <div>
              <Eyebrow>Connect</Eyebrow>
              <h3 className="font-editorial mt-2 text-2xl font-medium tracking-tight">
                Let’s build something deterministic.
              </h3>
            </div>
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#e5dcd5] hover:text-red-400 transition-colors"
              >
                <Mail size={15} aria-hidden /> {profile.email}
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[12px] font-medium hover:border-red-400 transition-colors"
                >
                  <Linkedin size={13} aria-hidden /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[12px] font-medium hover:border-red-400 transition-colors"
                >
                  <Github size={13} aria-hidden /> GitHub
                </a>
              </div>
            </div>
          </Tile>
        </main>

        {/* 30% Editorial Trajectory & Method */}
        <section id="approach" aria-labelledby="approach-heading" className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="approach-heading" className="font-editorial text-2xl font-normal tracking-tight">
              How I work
            </h2>
            <ol className="mt-5 space-y-5">
              {principles.map((p, index) => (
                <li key={p.title} className="flex gap-4">
                  <span className="tnum font-mono text-[12px] text-red-400/90">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-medium text-[#f5efe6]">{p.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#a89f99]">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-editorial text-2xl font-normal tracking-tight">Experience &amp; Education</h2>
            <ol className="mt-5 space-y-4">
              {experience.map((item) => (
                <li key={item.title} className="grid grid-cols-[88px_1fr] gap-4">
                  <span className="tnum font-mono text-[12px] text-[#8c827b]">{item.period}</span>
                  <div>
                    <p className="font-medium text-[#f5efe6]">
                      {item.title} <span className="text-[#a89f99]">· {item.org}</span>
                    </p>
                    <p className="mt-0.5 text-[13px] text-[#a89f99]">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 grid grid-cols-1 gap-2 border-t border-white/10 pt-5 sm:grid-cols-2">
              {education.map((edu) => (
                <div key={edu.title}>
                  <p className="text-[13px] font-medium text-[#e5dcd5]">{edu.title}</p>
                  <p className="tnum font-mono text-[11px] text-[#8c827b]">
                    {edu.org} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-6 text-[12px] text-[#8c827b]">
          <span>
            {profile.name} · {profile.location}
          </span>
          <span className="font-mono text-[11px]">Obsidian · Crimson · Editorial Bento</span>
        </footer>
      </div>

      <CaseStudySheet project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
