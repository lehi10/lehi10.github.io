// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), react()],
  site: 'https://lehi10.github.io',
  base: 'lehi10.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});