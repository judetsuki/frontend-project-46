import { Command } from 'commander';
const program = new Command();
import { readFileSync } from 'node:fs';

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
console.log(`${result1} \n ${result2}`);
});
program.parse();