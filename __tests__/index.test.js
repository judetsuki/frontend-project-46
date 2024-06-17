import {
  describe, expect, it, test,
} from '@jest/globals';
import formatter from '../src/formatter.js';
import * as func from '../src/formatter.js';
import * as example from '../__fixtures__/results.js';

describe('genDiff1', () => {
  it('should be undefined', () => {
    expect(func.formatter).toBeUndefined();
  });
});

describe('genDiff', () => {
  test('should generate the correct diff output with proper indentation', () => {
    //  expect(formatter(example.obj1, example.obj2, 'stylish'))
    // .toEqual(example.expectedStylishOutput);
    expect(formatter(example.obj1, example.obj2, 'plain')).toEqual(example.expectedPlainOutput);
    //  expect(formatter(obj1, obj2, 'json')).toEqual(expectedJsonOutput);
  });
});
