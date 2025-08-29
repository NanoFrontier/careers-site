import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://careers.nanofrontier.jp',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
});


