import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Đường dẫn tương đối để website chạy được trên GitHub Pages (địa chỉ dạng user.github.io/ten-repo/).
  base: './',
  plugins: [react()],
})
