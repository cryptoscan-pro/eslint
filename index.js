import unicorn from './unicorn.js';
import typescript from './typescript.js';
import prettier from './prettier.js';

export default [
	...unicorn,
	...typescript,
	...prettier,
	{
		ignores: [
			'dist',
			'public',
			'var',
			'__migration__',
			'.eslintrc.json',
			'node_modules',
			'package-lock.json',
			'package.json',
			'tsconfig.json'
		]
	}
]
