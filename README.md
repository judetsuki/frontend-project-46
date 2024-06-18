# Вычислитель отличий

Сравнивает два файла в формате JSON, YAML или YML и возвращает разницу между содержимым файлов.

## Установка

### Установка dependencies
make install

### Помощь
node bin/gendiff -h

## Использование

### Стандартный формат - stylish:
```node bin/gendiff filepath1 filepath2```

пример:
```node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json ```


### Выбор формата
```node bin/gendiff -f formatName filepath1 filepath2```

доступные форматы:

**stylish**

**plain**

**JSON**





### Hexlet tests and linter status:
[![Actions Status](https://github.com/luka0204/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/luka0204/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/596598c075db12e4151e/maintainability)](https://codeclimate.com/github/luka0204/frontend-project-46/maintainability)


[![Test Coverage](https://api.codeclimate.com/v1/badges/596598c075db12e4151e/test_coverage)](https://codeclimate.com/github/luka0204/frontend-project-46/test_coverage)