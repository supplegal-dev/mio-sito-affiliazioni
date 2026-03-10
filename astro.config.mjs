import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Questo serve per far capire ad Astro dove si trova il sito online
  site: 'https://supplegal-dev.github.io',
  // Questo è fondamentale perché il sito è dentro una sottocartella /mio-sito-affiliazioni/
  base: '/mio-sito-affiliazioni',
  integrations: [tailwind()],
});