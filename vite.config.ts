import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [react(), federation({
      name: "microApp",
      filename: "remoteEntry.js",
      exposes: {
        "./List": "./src/components/List.tsx",
        "./Input": "./src/components/Input.tsx",
      },
      shared: ["react"],
    })],
    build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    host: "localhost",
    port: 4173,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
})