const MAX_PARAMS = 3

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'jsx-a11y', 'import', 'react-hooks', 'react'],
	env: {
		es6: true,
		node: true,
		jest: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',

		'prettier',

		'plugin:react/recommended',

		'plugin:react-hooks/recommended',

		'plugin:jsx-a11y/strict',

		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',

		'plugin:compat/recommended',
	],
	ignorePatterns: 'src/generated/graphql.tsx',
	rules: {
		'max-lines': ['warn', { max: 500, skipBlankLines: true }],
		'max-params': ['warn', MAX_PARAMS],
		'no-console': 'warn',

		'no-magic-numbers': [
			'warn',
			{ ignoreArrayIndexes: true, ignore: [-1, 0, 1] },
		],

		'no-unused-expressions': 'warn',
		'no-useless-return': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': 'warn',
		'prefer-spread': 'warn',
		'require-await': 'error',
		'no-unused-vars': 'off',

		// TypeScript
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',

		// React
		'react/react-in-jsx-scope': 'off',
		'react/jsx-no-leaked-render': 'warning',

		// Import order
		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'always-and-inside-groups',
			},
		],
		'import/exports-last': 'warn',
	},
	settings: {
		react: { version: 'detect' },
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', 'src'],
			},
		},
	},
}
