import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: `https://ojaswi.learn.cloudlaya.com`,
        credentials: true,
      },
    },
  },
});
