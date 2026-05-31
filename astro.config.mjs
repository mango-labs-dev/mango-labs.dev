import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://mango-labs.dev',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    icon({
      include: {
        mdi: ['*'],
        'simple-icons': ['googleplay', 'github'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
