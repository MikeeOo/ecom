export const ROUTES: Routes = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    CART: "/cart",
    ADMIN: "/admin",
    ALL: "*",
} as const;
type Routes = (typeof ROUTES)[keyof typeof ROUTES];
