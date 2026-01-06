import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { SERVER_SIDE_BASE_URL } from "./app/utils/app-constants";
import fs from 'fs'

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    https: {
      key: fs.readFileSync('./key/localhost-key.pem'),
      cert: fs.readFileSync('./key/localhost.pem')
    },
    proxy: {
      '/api/v1': {
        target: SERVER_SIDE_BASE_URL,
        changeOrigin: true,
        secure: false,
      }
    }
  },
  base: "/",
});
