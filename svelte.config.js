import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { execSync } from 'node:child_process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '/404.html'
    }),
    version: {
    	name: execSync('git rev-parse --short HEAD').toString().trim()
    }
  }
};

export default config;
