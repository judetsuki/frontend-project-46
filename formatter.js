import _ from 'lodash';

const makeStylishDiff = (obj1, obj2, depth = 1) => {
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
            return `${currentDepth}  ${key}: ${makeStylishDiff(obj1[key], obj2[key], depth + 1)}`;
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
        return makeStylishDiff(value, value, depth + 2);
    }
    return value;
};

const makePlainDiff = (obj1, obj2) => {
    const diffOutput = [];

    const formatValue = (value) => {
        if (_.isObject(value)) {
            return '[complex value]';
        }
        return `"${value}"`;
    };

    Object.keys(obj1).forEach((key) => {
        if (!obj2.hasOwnProperty(key)) {
            diffOutput.push(`Property '${key}' was removed`);
        } else if (_.isEqual(obj1[key], obj2[key])) {
            // Property exists in both objects and their values are equal
            // No action needed
        } else if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
            const nestedDiffOutput = makePlainDiff(obj1[key], obj2[key]);
            if (nestedDiffOutput.length > 0) {
                nestedDiffOutput.forEach((line) => {
                    diffOutput.push(`Property '${key}.${line.split("'")[1]}' ${line.split("'")[2]}`);
                });
            }
        } else {
            diffOutput.push(`Property '${key}'was updated. From ${formatValue(obj1[key])} to ${formatValue(obj2[key])}`);
        }
    });

    Object.keys(obj2).forEach((key) => {
        if (!obj1.hasOwnProperty(key)) {
            diffOutput.push(`Property '${key}' was added with value: ${formatValue(obj2[key])}`);
        }
    });

    return diffOutput;
};

const formatter = (data1,data2,format) => {
        switch (format) {
          case 'stylish':
            return makeStylishDiff(data1,data2);
          case 'plain':
            return makePlainDiff(data1,data2);
          case 'json':
            return JSON.stringify(tree);
          default:
            throw new Error('invalid data');
        }
};

export default formatter;