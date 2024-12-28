import { FC, ReactNode } from "react";
import { shapeClasses } from "../types.ts";
export const types = {
    Button: "button",
    Submit: "submit",
} as const;
export const variants = {
    Primary: "primary",
    Secondary: "secondary",
    Tertiary: "tertiary",
} as const;
export type Type = (typeof types)[keyof typeof types];
export type Variant = (typeof variants)[keyof typeof variants];
// "px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";
export const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn-tertiary",
} as const;
// Props
export type Props = {
    children?: ReactNode;
    shape: keyof typeof shapeClasses;
    icon?: ReactNode;
    iconLeft?: ReactNode;
    text?: string;
    iconRight?: ReactNode;
    content?: ReactNode;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
};
export type Components = {
    [K in keyof typeof variants]: FC<Props>;
};
export type ButtonCollection = {
    [K in keyof typeof types]: Components;
};
