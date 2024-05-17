import { Command } from 'commander';
const program = new Command();
import parse from './parsers.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .usage("[options] <filepath1> <filepath2>")
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action(parse);
program.parse();