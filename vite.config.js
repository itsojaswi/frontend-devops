import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://172.31.16.224:4000 ", // Change this to your backend server's URL
        // If using http://3.0.183.83:4000 as your backend URL, keep this as is
        changeOrigin: true,
      },
    },
  },
});
