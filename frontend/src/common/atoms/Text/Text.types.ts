import { FC, ReactNode } from "react";
export const components = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    P: "p",
    Div: "div",
    Span: "span",
} as const;
export type Tag = (typeof components)[keyof typeof components];
export const tagClasses = {
    h1: "base-h1",
    h2: "base-h2",
    h3: "base-h3",
    h4: "base-h4",
    p: "base-p",
    div: "base-div",
    span: "base-span",
} as const;
export const lineClampClasses = {
    "1": "line-clamp-1",
    "2": "line-clamp-2",
    "3": "line-clamp-3",
    "4": "line-clamp-4",
    "5": "line-clamp-5",
    "6": "line-clamp-6",
    truncate: "truncate",
    none: "line-clamp-none",
} as const;
export const alignClasses = {
    left: "text-left",
    center: "text-center",
} as const;
// Props
export type Props = {
    children?: ReactNode;
    text?: string;
    align?: "left" | "center";
    lineClamp?: "1" | "2" | "3" | "4" | "5" | "6" | "truncate" | "none";
    className?: string;
};
export type Components = {
    [K in keyof typeof components]: FC<Props>;
};
