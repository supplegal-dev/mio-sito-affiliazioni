import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://supplegal-dev.github.io',
  base: '/mio-sito-affiliazioni',
  integrations: [tailwind()],
});