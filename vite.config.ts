import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
    },
    build: {
        outDir: "docs",
        chunkSizeWarningLimit: 1000,
    },
    base: "/tailwindcss-japanese-cheat-sheet/",
});
