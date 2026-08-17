import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.thenovagroup.com.au',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
