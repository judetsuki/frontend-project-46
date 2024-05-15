import { describe, expect, it } from '@jest/globals';
import * as func from '../index.js';
import genDiff from '../index.js';

describe('genDiff', () => {
  test('should return correct diff for two objects', () => {
    const data1 = {
      follow: false,
      host: 'hexlet.io',
      proxy: '123.234.53.22',
      timeout: 50,
    };

    const data2 = {
      host: 'hexlet.io',
      timeout: 20,
      verbose: true,
    };

    const expectedDiff = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

    expect(genDiff(data1, data2)).toBe(expectedDiff);
  });

  test('should return empty diff for two identical objects', () => {
    const data1 = {
      key1: 'value1',
      key2: 'value2',
    };

    const data2 = {
      key1: 'value1',
      key2: 'value2',
    };

    const expectedDiff = `{
  key1: value1
  key2: value2
}`;

    expect(genDiff(data1, data2)).toBe(expectedDiff);
  });
});
