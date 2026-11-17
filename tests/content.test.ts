import { describe, expect, it } from 'vitest';
import { dceLevels, education, experience, profile, projects } from '../src/content';
import { totalTests } from '../src/lib/metrics';

describe('totalTests', () => {
  it('soma os testes dos projetos e ignora os que não declaram', () => {
    expect(totalTests(projects)).toBe(83 + 150 + 201 + 158);
  });

  it('retorna 0 para lista vazia', () => {
    expect(totalTests([])).toBe(0);
  });
});

describe('integridade do conteúdo', () => {
  it('todos os links externos usam https', () => {
    const hrefs = [profile.linkedin, profile.github, ...projects.flatMap((p) => p.links.map((l) => l.href))];
    for (const href of hrefs) expect(href.startsWith('https://')).toBe(true);
  });

  it('ids de projeto são únicos e todos têm caseStudy completo', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of projects) {
      expect(p.caseStudy.problem.length).toBeGreaterThan(20);
      expect(p.caseStudy.decision.length).toBeGreaterThan(20);
      expect(p.caseStudy.impact.length).toBeGreaterThan(15);
    }
  });

  it('projeto privado não expõe links', () => {
    for (const p of projects.filter((x) => x.status === 'private')) expect(p.links).toHaveLength(0);
  });

  it('acurácia do DCE é crescente de L0 a L4', () => {
    const values = dceLevels.map((l) => l.accuracy);
    expect([...values].sort((a, b) => a - b)).toEqual(values);
    expect(values.every((v) => v >= 0 && v <= 100)).toBe(true);
  });

  it('não vaza telefone nem segredos no conteúdo', () => {
    const blob = JSON.stringify({ profile, projects, experience, education });
    expect(blob).not.toMatch(/98579|\+55|AIza|ghp_|gho_/);
  });

  it('formação inclui Microeletrônica e Machine Learning Engineering', () => {
    const titles = education.map((e) => e.title);
    expect(titles).toContain('Associate Degree in Microelectronics');
    expect(titles).toContain('Specialization in Machine Learning Engineering');
    expect(education).toHaveLength(6);
  });
});
