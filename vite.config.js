import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from "path";
// import vitesconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'ESNext',
  },
  plugins: [
    react(),
    // vitesconfigPaths(),
    federation({
      name: "app",
      remotes: {
        remoteA: "http://127.0.0.1:3001/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@design": path.resolve(__dirname, "./src/design"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
      "@ptypes": path.resolve(__dirname, "./src/types"),
      "@forms": path.resolve(__dirname, "./src/shared/forms"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@validations": path.resolve(__dirname, "./src/validations"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
})