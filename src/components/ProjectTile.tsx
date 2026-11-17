import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../content';
import { Chip, Eyebrow, Tile } from './Tile';

const STATUS_LABEL: Record<Project['status'], string> = {
  live: 'Live',
  shipped: 'Shipped',
  'in-progress': 'In progress',
  private: 'Private',
};

function WireframeCube() {
  return (
    <div className="my-4 flex items-center justify-center py-2" aria-hidden>
      <svg
        viewBox="0 0 120 110"
        className="h-24 w-24 text-[#e7d8c9] drop-shadow-[0_0_16px_rgba(239,68,68,0.28)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <polygon points="60,8 104,33 104,79 60,104 16,79 16,33" />
        <polygon points="60,20 92,39 92,73 60,92 28,73 28,39" opacity="0.45" />
        <line x1="60" y1="8" x2="60" y2="104" opacity="0.55" />
        <line x1="16" y1="33" x2="104" y2="79" opacity="0.55" />
        <line x1="104" y1="33" x2="16" y2="79" opacity="0.55" />
        <circle cx="60" cy="56" r="4" fill="#ef4444" stroke="none" />
      </svg>
    </div>
  );
}

export function ProjectTile({
  project,
  className = '',
  onOpenCaseStudy,
}: {
  readonly project: Project;
  readonly className?: string;
  readonly onOpenCaseStudy: (project: Project) => void;
}) {
  const isLight = project.surface === 'cream';
  const isCrimson = project.surface === 'crimson';
  const tone = isLight ? 'light' : isCrimson ? 'crimson' : 'dark';

  const statusPillClass = isLight
    ? 'bg-[#161212] text-[#f5efe6]'
    : isCrimson
      ? 'bg-[#f5efe6] text-[#991b1b]'
      : 'bg-red-950/90 text-red-200 border border-red-500/30';

  const bodyClass = isLight
    ? 'text-[#4d443d]'
    : isCrimson
      ? 'text-red-50/90'
      : 'text-[#b5aba4]';

  const actionPillClass = isLight
    ? 'bg-[#161212] text-[#f5efe6] hover:bg-[#991b1b]'
    : isCrimson
      ? 'bg-[#f5efe6] text-[#161212] hover:bg-white'
      : 'bg-white/10 text-[#f5efe6] hover:bg-[#b91c1c]';

  const secondaryLinkClass = isLight
    ? 'border border-[#d6cbbd] text-[#161212] hover:border-[#161212]'
    : isCrimson
      ? 'border border-white/30 text-white hover:bg-black/20'
      : 'border border-white/15 text-[#e5dcd5] hover:border-red-400';

  return (
    <Tile surface={project.surface} className={className} label={project.name}>
      <div className="flex items-start justify-between gap-3">
        <Eyebrow tone={tone}>{project.tagline}</Eyebrow>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium ${statusPillClass}`}>
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <h3 className="font-editorial mt-2.5 text-2xl font-medium tracking-tight leading-snug">
        {project.name}
      </h3>

      {project.surface === 'sculptural' && <WireframeCube />}

      <p className={`mt-2 text-[14px] leading-relaxed ${bodyClass}`}>{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
        {project.stack.map((item) => (
          <Chip key={item} tone={tone}>
            {item}
          </Chip>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-colors duration-150 ${actionPillClass}`}
        >
          Case Study
          <span aria-hidden>→</span>
        </button>

        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors duration-150 ${secondaryLinkClass}`}
          >
            {link.label}
            <ArrowUpRight size={13} aria-hidden />
          </a>
        ))}
      </div>
    </Tile>
  );
}
