import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Project } from '../content';

/** Folha editorial em Creme Osso para aprofundar Problema -> Decisão de PM -> Impacto. */
export function CaseStudySheet({
  project,
  onClose,
}: {
  readonly project: Project | null;
  readonly onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-xs sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="animate-sheet max-h-[88vh] w-full overflow-y-auto rounded-t-[28px] bg-[#f5efe6] p-6 text-[#161212] shadow-2xl sm:max-w-xl sm:rounded-[28px] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[#cfc5b7] sm:hidden" aria-hidden />

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-[#991b1b]">
              Case Study · {project.tagline}
            </p>
            <h2
              id="case-study-title"
              className="font-editorial mt-1 text-3xl font-medium tracking-tight text-[#161212]"
            >
              {project.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6cbbd] text-[#4d443d] transition-colors hover:bg-[#e7dfd3] hover:text-[#161212]"
          >
            <X size={16} aria-hidden />
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#161212]">
              Problem →
            </h3>
            <p className="mt-1 text-[14px] leading-relaxed text-[#4d443d]">
              {project.caseStudy.problem}
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#161212]">
              PM Decision →
            </h3>
            <p className="mt-1 text-[14px] leading-relaxed text-[#4d443d]">
              {project.caseStudy.decision}
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#991b1b]">
              Impact
            </h3>
            <p className="mt-1 text-[14px] leading-relaxed text-[#161212]">
              {project.caseStudy.impact}
            </p>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[#ded4c5] bg-[#efe7da] px-2.5 py-0.5 font-mono text-[11px] text-[#4d443d]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#e2d8c9] pt-5">
          {project.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                index === 0
                  ? 'bg-[#991b1b] text-white hover:bg-[#b91c1c]'
                  : 'border border-[#d6cbbd] text-[#161212] hover:border-[#161212]'
              }`}
            >
              {link.label}
              <ArrowUpRight size={14} aria-hidden />
            </a>
          ))}

          <button
            type="button"
            onClick={onClose}
            className="ml-auto text-[13px] font-medium text-[#6e645c] hover:text-[#161212]"
          >
            Back to overview
          </button>
        </div>
      </div>
    </div>
  );
}
