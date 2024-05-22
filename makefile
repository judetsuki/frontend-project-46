install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8	

lint:
	npx eslint	.

lint-fix:
	npx eslint . --fix
	
publish:
	npm publish --dry-run

gendiff:
	node/gendiff.js

