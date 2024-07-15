import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const ip = "3.0.55.208";
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: `http://3.0.55.208:4000`,
        credentials: true,
      },
    },
  },
});
