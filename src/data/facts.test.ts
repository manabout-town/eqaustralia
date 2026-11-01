import { describe, it, expect } from 'vitest';
import { facts } from './facts';

describe('facts', () => {
  it('모든 수치·주장에 출처·기준일', () => {
    for (const [k, f] of Object.entries(facts) as [string, { source: string; asOf: string }][]) {
      expect(f.source, k).toBeTruthy();
      expect(f.asOf, k).toMatch(/^\d{4}(-\d{2})?(-\d{2})?$/);
    }
  });
});
