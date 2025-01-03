import { FC, ReactNode } from "react";
import { shapeClasses } from "../types.ts";
import { Link as RouterLink, NavLink } from "react-router";
export const components = {
    Router: RouterLink,
    Nav: NavLink,
    A: "a",
} as const;
export type Tag = (typeof components)[keyof typeof components];
// export const baseClasses = {
//     Router: "base-router-link",
//     Nav: "base-nav-link",
//     A: "base-a",
// } as const;
export const typeClasses = {
    text: "link-text",
    "btn-primary": "btn-primary",
    nav: "link-nav",
    wrapper: "link-wrapper",
} as const;
export type Props = {
    children?: ReactNode;
    route: string;
    type: keyof typeof typeClasses;
    shape?: keyof typeof shapeClasses;
    icon?: ReactNode;
    iconLeft?: ReactNode;
    text?: string;
    iconRight?: ReactNode;
    content?: ReactNode;
    className?: string;
};
export type Components = {
    [K in keyof typeof components]: FC<Props>;
};
