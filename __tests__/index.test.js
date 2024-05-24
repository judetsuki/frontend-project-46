import { describe, expect, it } from '@jest/globals';
import formatter from '../formatter.js';
import * as func from '../formatter.js';
import * as example from '../__fixtures__/results.js';

 describe('genDiff', () => {
   it('should be undefined', () => {
     expect(func.formatter).toBeUndefined();
   });
 })


 describe('genDiff', () => {
     test('should generate the correct diff output with proper indentation', () => {

         expect(formatter(example.obj1, example.obj2, 'stylish')).toEqual(example.expectedStylishOutput);
        //  expect(formatter(obj1, obj2, 'plain')).toEqual(expectedPlainOutput);
        //  expect(formatter(obj1, obj2, 'json')).toEqual(expectedJsonOutput);
     });
 });