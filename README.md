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
пример работы:


![image](https://github.com/luka0204/frontend-project-46/assets/146336891/69377dff-3adf-43e9-a2f0-a3a532f56e6c)


**plain**
пример работы:


![image](https://github.com/luka0204/frontend-project-46/assets/146336891/7d6f1664-6724-4506-ac4f-9dff727795df)


**JSON**
пример работы:


![image](https://github.com/luka0204/frontend-project-46/assets/146336891/fa7b01fc-6d30-4d6c-aa5d-63a24ec84af7)






### Hexlet tests and linter status:
[![Actions Status](https://github.com/luka0204/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/luka0204/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/596598c075db12e4151e/maintainability)](https://codeclimate.com/github/luka0204/frontend-project-46/maintainability)


[![Test Coverage](https://api.codeclimate.com/v1/badges/596598c075db12e4151e/test_coverage)](https://codeclimate.com/github/luka0204/frontend-project-46/test_coverage)

