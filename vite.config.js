
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@component": path.resolve(__dirname, "./src/components"),
      "@image": path.resolve(__dirname, "./src/assets/images"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@sections": path.resolve(__dirname, "./src/pages/sections"),
    },
  },
});
