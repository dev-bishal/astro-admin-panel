// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://dev-bishal.github.io',
    base: '/astro-admin-panel',
    vite: {
      plugins: [tailwindcss()],
    },
});
