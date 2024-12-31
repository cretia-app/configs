/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'eslint-plugin-react-hooks' {
	export const configs: {
		recommended: {
			rules: Record<string, unknown>
		}
	}
	export const rules: Record<string, any>
}

declare module 'eslint-plugin-react-compiler' {
	import type { ESLint } from 'eslint'

	let plugin: ESLint.Plugin
	export default plugin
}
