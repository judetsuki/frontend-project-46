import { Command } from 'commander';
const program = new Command();
import { readFileSync } from 'node:fs';
import _ from 'lodash';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .usage("[options] <filepath1> <filepath2>")
  .argument('<filepath1>')
  .argument('<filepath2>')
.action((filepath1,filepath2, format = 'utf-8') => {
const result1 = readFileSync(filepath1, format);
const result2 = readFileSync(filepath2, format);

const genDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  const diffLines = keys.map((key) => {
    if (!_.has(data1, key)) {
      return `+ ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return `- ${key}: ${data1[key]}`;
    }
    if (data1[key] === data2[key]) {
      return `  ${key}: ${data1[key]}`;
    }
    return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
  });
  
  return `{\n${diffLines.join('\n')}\n}`;
};
console.log(genDiff(JSON.parse(result1), JSON.parse(result2)));
});
program.parse();