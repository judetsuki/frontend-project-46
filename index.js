import _ from 'lodash';
import path from 'node:path';
import parser from './parsers.js';
import { readFileSync } from 'node:fs';

 const genDiff = (data1, data2) => {

    const resolvePath = (filepath) => path.resolve(process.cwd(), filepath);
    const getExtension = (filename) => path.extname(filename).slice(1);

  const buildDiff = (obj1, obj2, depth = 1) => {
      const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
      
      const diffLines = keys.map((key) => {
          const currentDepth = '  '.repeat(depth);
          if (!_.has(obj1, key)) {
              return `${currentDepth}+ ${key}: ${formatValue(obj2[key], depth)}`;
          }
          if (!_.has(obj2, key)) {
              return `${currentDepth}- ${key}: ${formatValue(obj1[key], depth)}`;
          }
          if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
              return `${currentDepth}  ${key}: ${buildDiff(obj1[key], obj2[key], depth + 1)}`;
          }
          if (obj1[key] === obj2[key]) {
              return `${currentDepth}  ${key}: ${formatValue(obj1[key], depth)}`;
          }
          return `${currentDepth}- ${key}: ${formatValue(obj1[key], depth)}\n${currentDepth}+ ${key}: ${formatValue(obj2[key], depth)}`;
      });
      
      return `{\n${diffLines.join('\n')}\n${'  '.repeat(depth - 1)}}`;
  };

  const formatValue = (value, depth) => {
      if (_.isObject(value)) {
          return buildDiff(value, value, depth + 2);
      }
      return value;
  };


  const getData = (filePath) => parser({
    data: readFileSync(filePath, 'utf-8'),
    format: getExtension(filePath),
  });

  const path1 = resolvePath(data1);
  const path2 = resolvePath(data2);

  const datan1 = getData(path1);
  const datan2 = getData(path2);


  return buildDiff(datan1, datan2);
};



  export default genDiff;

