import type { Project } from '../content';

/** Soma dos testes automatizados declarados nos projetos (os sem `tests` contam 0). */
export function totalTests(items: readonly Project[]): number {
  return items.reduce((sum, p) => sum + (p.tests ?? 0), 0);
}
