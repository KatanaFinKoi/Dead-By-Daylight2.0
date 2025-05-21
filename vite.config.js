import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: /Dead-By-Daylight2.0/,
  server: {
  open: true 
}
})


