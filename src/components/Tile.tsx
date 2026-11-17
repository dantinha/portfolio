import type { ReactNode } from 'react';
import type { SurfaceTone } from '../content';

const SURFACE_CLASSES: Record<SurfaceTone, string> = {
  cream:
    'bg-[#f5efe6] text-[#161212] border border-[#e7dfd3] hover:border-[#d6cbbd]',
  crimson:
    'bg-[#991b1b] text-[#fef2f2] border border-[#b91c1c] hover:border-[#ef4444]',
  obsidian:
    'bg-[#181313] text-[#f5efe6] border border-white/10 hover:border-red-500/40',
  sculptural:
    'bg-[#131010] text-[#f5efe6] border border-white/10 hover:border-red-500/40',
};

type TileProps = {
  readonly children: ReactNode;
  readonly surface?: SurfaceTone;
  readonly className?: string;
  readonly label?: string;
};

/** Bloco orgânico do Bento com cantos generosos e contraste de superfície. */
export function Tile({ children, surface = 'obsidian', className = '', label }: TileProps) {
  return (
    <section
      aria-label={label}
      className={`flex flex-col rounded-[24px] p-5 sm:p-6 transition-all duration-150 ${SURFACE_CLASSES[surface]} ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = 'dark',
}: {
  readonly children: ReactNode;
  readonly tone?: 'light' | 'dark' | 'crimson';
}) {
  const color =
    tone === 'light'
      ? 'text-[#6e645c]'
      : tone === 'crimson'
        ? 'text-red-200/80'
        : 'text-[#a89f99]';
  return (
    <p className={`font-mono text-[11px] font-medium uppercase tracking-wider ${color}`}>
      {children}
    </p>
  );
}

export function Chip({
  children,
  tone = 'dark',
}: {
  readonly children: ReactNode;
  readonly tone?: 'light' | 'dark' | 'crimson';
}) {
  const style =
    tone === 'light'
      ? 'border-[#ded4c5] text-[#4d443d] bg-[#efe7da]'
      : tone === 'crimson'
        ? 'border-white/20 text-red-50 bg-black/15'
        : 'border-white/10 text-[#c9bfb8] bg-white/[0.03]';
  return <li className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${style}`}>{children}</li>;
}
