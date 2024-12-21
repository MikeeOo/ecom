import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// IT HAS TO BE LIKE THAT
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [postcssImport(), tailwindcss, autoprefixer],
        },
    },

    server: {
        port: 3000,
    },
});
