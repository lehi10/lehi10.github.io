// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://lehi10.github.io/',
  output: 'static',
  base: '/',
  integrations: [icon()],
});
