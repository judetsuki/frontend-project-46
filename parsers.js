import { readFileSync } from 'node:fs';
import genDiff from './index.js';
import jsYaml from 'js-yaml';

const parse = (filepath1, filepath2,format = 'utf-8') => {
    const file1 = readFileSync(filepath1, format);
    const file2 = readFileSync(filepath2, format);
    console.log(genDiff(JSON.parse(file1), JSON.parse(file2)));
  };

  export default parse;