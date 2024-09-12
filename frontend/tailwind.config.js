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
        // line clamp
        "line-clamp-1",
        "line-clamp-2",
        "line-clamp-3",
        "line-clamp-4",
        "line-clamp-5",
        "line-clamp-6",
        // grid
        "grid-cols-1",
        "grid-cols-2",
        "grid-cols-3",
        "grid-cols-4",
        "grid-cols-5",
        "grid-cols-6",
        "grid-cols-7",
        "grid-cols-8",
        "grid-cols-9",
        "grid-cols-10",
        "grid-cols-11",
        "grid-cols-12",
        // sm:grid
        "sm:grid-cols-1",
        "sm:grid-cols-2",
        "sm:grid-cols-3",
        "sm:grid-cols-4",
        "sm:grid-cols-5",
        "sm:grid-cols-6",
        "sm:grid-cols-7",
        "sm:grid-cols-8",
        "sm:grid-cols-9",
        "sm:grid-cols-10",
        "sm:grid-cols-11",
        "sm:grid-cols-12",
        // md:grid
        "md:grid-cols-1",
        "md:grid-cols-2",
        "md:grid-cols-3",
        "md:grid-cols-4",
        "md:grid-cols-5",
        "md:grid-cols-6",
        "md:grid-cols-7",
        "md:grid-cols-8",
        "md:grid-cols-9",
        "md:grid-cols-10",
        "md:grid-cols-11",
        "md:grid-cols-12",
        // lg:grid
        "lg:grid-cols-1",
        "lg:grid-cols-2",
        "lg:grid-cols-3",
        "lg:grid-cols-4",
        "lg:grid-cols-5",
        "lg:grid-cols-6",
        "lg:grid-cols-7",
        "lg:grid-cols-8",
        "lg:grid-cols-9",
        "lg:grid-cols-10",
        "lg:grid-cols-11",
        "lg:grid-cols-12",
        // etc (could also use regex)
    ],
    plugins: ["prettier-plugin-tailwindcss", forms],
};
