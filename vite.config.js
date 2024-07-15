import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const ip = "13.213.57.24";
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: `http://${ip}:4000`,
        credentials: true,
      },
    },
  },
});
