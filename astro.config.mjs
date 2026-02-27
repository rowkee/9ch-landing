// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://9chltd.co.uk',
  output: 'static',
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
