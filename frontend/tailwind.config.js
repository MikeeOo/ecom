/** @type {import('tailwindcss').Config} */
import forms from "./node_modules/@tailwindcss/forms";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "640px", // default
                // sm: "600px",
                md: "768px", // default
                // md: "728px",
                lg: "1024px", // default
                // lg: "984px",
                xl: "1280px", // default
                // xl: "1240px",
                "2xl": "1440px", // custom
                // "2xl": "1536px", // default
            },
            padding: {
                DEFAULT: "2rem",
                sm: "2rem",
                lg: "2rem",
                xl: "2rem",
                "2xl": "2rem",
            },
        },
        extend: {
            maxWidth: {
                "screen-2xl": "1440px",
            },
            colors: {
                "bg-primary": "#FFFFFF",
                border: "#000000",
                copy: "#000000",
                error: "#ed3a3a",
            },
            fontFamily: {
                "exo-2": ["Exo 2", "system-ui", "sans-serif"],
                exo: ["Exo", "system-ui", "sans-serif"],
                montserrat: ["Montserrat", "system-ui", "sans-serif"],
                "noto-sans": ["Noto Sans", "system-ui", "sans-serif"],
                outfit: ["Outfit", "system-ui", "sans-serif"],
                poppins: ["Poppins", "system-ui", "sans-serif"],
                redacted: ["Redacted", "system-ui", "sans-serif"],
                "redacted-script": ["Redacted Script", "cursive"],
                "space-grotesk": ["Space Grotesk", "system-ui", "sans-serif"],
                "space-mono": ["Space Mono", "monospace"],
            },
        },
    },
    safelist: [
        // // Flex
        // /^flex-(row|col)$/,
        // /^justify-(center|between|around)$/, // (x alignment)
        // /^items-(center|between|around)$/, // (y alignment)
        // /^flex-(wrap|wrap-reverse|nowrap)$/,
        // // Grid
        // /^(sm:|md:|lg:)?grid-cols-([1-9]|1[0-2])$/,
        // // Line clamp with truncate
        // "truncate",
        // /^line-clamp-[1-6]$/,
        // // Text alignment
        // /^text-(left|center)$/,
    ],
    plugins: ["prettier-plugin-tailwindcss", forms],
};
