const MAX_PARAMS = 3

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'react',
		'jsx-a11y',
		'react-hooks',
		'simple-import-sort',
	],
	env: {
		es6: true,
		node: true,
		jest: true,
		browser: true,
	},
	ignorePatterns: 'src/generated/*',
	extends: [
		// Recommended general
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',

		// Prettier-compatible
		'prettier',

		// React rules
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',

		// Accessibility
		'plugin:jsx-a11y/strict',
	],
	rules: {
		'max-lines': ['warn', { max: 500, skipBlankLines: true }],
		'max-params': ['warn', MAX_PARAMS],
		'no-console': 'warn',
		'no-redeclare': 'warn',
		'no-magic-numbers': [
			'warn',
			{ ignoreArrayIndexes: true, ignore: [-1, 0, 1] },
		],
		'no-else-return': 'warn',
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
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{ prefer: 'type-imports' },
		],

		// React
		'react/react-in-jsx-scope': 'off',
		// 'react/jsx-no-leaked-render': 'warn',
		// 'react/jsx-no-useless-fragment': 'warn',
		'react/jsx-boolean-value': ['warn', 'never'],
		'react/jsx-sort-props': [
			'warn',
			{
				shorthandLast: true,
				reservedFirst: true,
				noSortAlphabetically: true,
			},
		],

		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// Packages `node` or `react` related packages come first.
					['^node:', '^react-?(dom|native)?$', '^@?\\w'],
					// Internal packages.
					['^@/(screens|navigation|containers)(/.*|$)'],
					['^@/modules(/.*|$)'],
					['^@/components(/.*|$)'],
					['^@/(lib|utils)(/.*|$)'],
					['^@/(.*|$)'],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports. Put `..` last.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports. Put same-folder imports and `.` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.?(css)$'],
				],
			},
		],
	},
	settings: {
		react: { version: 'detect' },
	},
}
