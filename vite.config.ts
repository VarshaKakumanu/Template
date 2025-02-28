import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: "ToDoDB", //this only for github pages
  server: {
    port: 3000, // Change if needed
  },
})
