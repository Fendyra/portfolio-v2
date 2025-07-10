import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Hapus baris base: "/PORTOFOLIO-WEB/",
  // atau ubah menjadi:
  base: "/", // Ini menunjukkan aplikasi di-deploy di root
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
