import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			"unicorn/filename-case": [
				"error",
				{
					"cases": {
						"camelCase": true,
						"pascalCase": true
					}
				}
			]
		}
	}
];
