import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({ insertTypesEntry: true }),
	],
	build: {
		lib: {
			entry: {
				'forms': path.resolve(__dirname, 'src/forms/'),
				'nav': path.resolve(__dirname, 'src/nav'),
				'': path.resolve(__dirname, 'src/index.ts'),
			},
			name: 'atomic-ui',
			formats: [ 'es', 'cjs' ],
			fileName: (format, entryName) => `${ entryName ? entryName + '/' : '' }atomic-ui.${ format }.js`,
		},
		rollupOptions: {
			external: [ 'react', 'react-dom' ],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
