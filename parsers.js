import { readFileSync } from 'node:fs';
import genDiff from './index.js';
import yaml from 'js-yaml';

  const parse = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load
  };
  
  export default ({ data, format }) => parse[format](data);