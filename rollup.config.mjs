import { defineExternal, definePlugins } from '@gera2ld/plaid-rollup';
import { defineConfig } from 'rollup';
import pkg from './package.json' with { type: 'json' };

const external = defineExternal(Object.keys(pkg.dependencies));

export default defineConfig([
	{
		input: 'src/index.ts',
		plugins: definePlugins({
			esm: true,
			minimize: true,
			extensions: ['.ts', '.mjs', '.js'],
			replaceValues: { 'process.env.VERSION': pkg.version },
		}),
		external,
		output: {
			format: 'esm',
			indent: false,
			file: `dist/${pkg.version}/InfiniteCraftFramework.mjs`,
			banner: `/*! InfiniteCraftFramework@${pkg.version} | ${pkg.license} License */`,
		},
	},
	{
		input: 'src/index.ts',
		plugins: definePlugins({
			esm: true,
			minimize: true,
			extensions: ['.ts', '.mjs', '.js'],
			replaceValues: { 'process.env.VERSION': pkg.version },
		}),
		external,
		output: {
			format: 'iife',
			indent: false,
			file: `dist/${pkg.version}/InfiniteCraftFramework.js`,
			name: 'ICF',
			banner: `/*! InfiniteCraftFramework@${pkg.version} | ${pkg.license} License */\nvar s,i,t;i=null==(s=this.ICF||{})?void 0:s.version,t="${pkg.version}",(void 0===i||i.startsWith(t+"-")||!t.startsWith(i+"-")&&-1===i.localeCompare(t,void 0,{numeric:!0,sensitivity:"case",caseFirst:"upper"}))&&`,
			extend: true,
			esModule: false,
		},
	},
]);
