import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(props => {
  const env = loadEnv(props.mode, process.cwd(), 'VITE_APP');
  return {
    build: {
      outDir: 'build',
    },
    define: {
      'process.env': `${JSON.stringify(env)}`,
    },
    esbuild: {
      include: /\.[jt]sx?$/,
      exclude: [],
      loader: 'jsx',
    },
    plugins: [react(), commonjs(), tailwindcss()],
  };
});
