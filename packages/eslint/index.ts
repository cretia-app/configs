import eslint from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import react from 'eslint-plugin-react'
import reactCompiler from 'eslint-plugin-react-compiler'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	eslintPluginUnicorn.configs['flat/all'],
	perfectionist.configs['recommended-natural'],
	{
		ignores: [
			'ios',
			'android',
			'.expo',
			'node_modules',
			'dist',
			'build',
			'public',
			'expo-env.d.ts',
		],
	},
	{
		languageOptions: {
			globals: {
				...globals.builtin,
				...globals.browser,
				...globals.serviceworker,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				projectService: true,
				sourceType: 'module',
				tsconfigRootDir: import.meta.dirname,
			},
		},

		plugins: {
			react,
			'react-compiler': reactCompiler,
			'react-hooks': reactHooks,
		},
		rules: {
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{ fixStyle: 'separate-type-imports', prefer: 'type-imports' },
			],
			'@typescript-eslint/no-confusing-void-expression': 'off',
			'@typescript-eslint/no-misused-promises': [
				'error',
				{ checksVoidReturn: false },
			],
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					ignoreRestSiblings: true,
					varsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/non-nullable-type-assertion-style': 'off',
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{ allowNumber: true },
			],
			'arrow-body-style': ['warn', 'as-needed'],
			'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
			'no-console': 'warn',
			'no-useless-rename': 'error',
			'object-shorthand': 'error',
			'perfectionist/sort-imports': [
				'warn',
				{
					customGroups: {
						type: {
							node: ['node:*'],
							react: ['^react$', '^react-dom$', '^react-native$'],
						},
						value: {
							node: ['node:*'],
							react: ['^react$', '^react-dom$', '^react-native$'],
						},
					},
					environment: 'node',
					groups: [
						['node', 'react', 'builtin'],
						['builtin-type'],

						'external',

						'type',

						'internal',

						'internal-type',

						['parent', 'sibling', 'index'],

						['parent-type', 'sibling-type', 'index-type'],

						'object',

						'style',

						'unknown',
					],
					ignoreCase: true,
					internalPattern: ['^@/.+'],
					maxLineLength: undefined,
					newlinesBetween: 'always',
					order: 'asc',
					type: 'natural',
				},
			],
			'react-compiler/react-compiler': 'error',
			'react-hooks/exhaustive-deps': [
				'error',
				{
					additionalHooks:
						'(useAnimatedStyle|useDerivedValue|useAnimatedProps)',
				},
			],
			'react/jsx-curly-brace-presence': ['warn', { props: 'never' }],
			'react/jsx-no-useless-fragment': 'error',
			'react/react-in-jsx-scope': 'off', // Unnecessary
			'react/self-closing-comp': 'warn',
			'unicorn/consistent-destructuring': 'off',
			'unicorn/filename-case': 'off', // Change when JSX convention is available https://github.com/sindresorhus/eslint-plugin-unicorn/issues/203
			'unicorn/no-array-reduce': 'off', // Enable later
			'unicorn/no-nested-ternary': 'off', // Enable later
			'unicorn/no-null': 'off',
			'unicorn/prefer-module': 'off',
			'unicorn/prefer-ternary': 'off',
			'unicorn/prevent-abbreviations': [
				'warn',
				{
					allowList: {
						args: true,
						def: true,
						Def: true,
						Env: true,
						Props: true,
						props: true,
						ref: true,
						Ref: true,
						Refs: true,
						refs: true,
					},
				},
			],
			'unicorn/switch-case-braces': 'off',
			'unicorn/template-indent': 'off',
			...reactHooks.configs.recommended.rules,
		},
		settings: {
			componentWrapperFunctions: ['observer'],
			react: { version: 'detect' },
		},
	},
	{
		files: ['**/*.js', '**/*.jsx'],
		...tseslint.configs.disableTypeChecked,
	},
)
