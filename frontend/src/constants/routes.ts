export const ROUTES: Routes = {
    HOME: "/",
    CART: "/cart",
    AUTH: "/auth",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    ADMIN: "/admin",
    REST: "*",
} as const;
type Routes = (typeof ROUTES)[keyof typeof ROUTES];
