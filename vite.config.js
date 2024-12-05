
import legacy from '@vitejs/plugin-legacy';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    legacy({
      targets: '> 0.5%, last 2 versions, not dead',
    }),
  ],
});
