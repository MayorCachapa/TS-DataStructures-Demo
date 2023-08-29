import { add, subtract } from '../../index';
import {describe, expect, test} from '@jest/globals';

describe('Math Functions', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).toBe(5); // This test should pass
  });

  it('should subtract two numbers correctly', () => {
    const result = subtract(5, 3);
    expect(result).toBe(2); // This test should pass
  });

  it('should cause an error', () => {
    const result = add(2, 3);
    expect(result).toBe(6); // This test should fail
  });
});