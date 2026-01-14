import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagetools()],
})
