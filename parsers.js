import { readFileSync } from 'node:fs';
import genDiff from './index.js';
import jsYaml from 'js-yaml';

  const parse = {
    json: JSON.parse
  };
  
  export default ({ data, format }) => parse[format](data);