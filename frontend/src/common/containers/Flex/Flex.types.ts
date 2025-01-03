import { FC, ReactNode } from "react";
import { components, gapClasses } from "../types.ts";
export const directionClasses = {
    row: "flex-row",
    col: "flex-col",
} as const;
export const justifyClasses = {
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
    start: "justify-start",
    end: "justify-end",
    evenly: "justify-evenly",
} as const;
export const alignClasses = {
    center: "items-center",
    start: "items-start",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
} as const;
export const wrapClasses = {
    wrap: "flex-wrap",
    reverse: "flex-wrap-reverse",
    nowrap: "flex-nowrap",
} as const;
export type Props = {
    children: ReactNode;
    dir?: keyof typeof directionClasses;
    x?: keyof typeof justifyClasses;
    y?: keyof typeof alignClasses;
    gap?: keyof typeof gapClasses;
    wrap?: keyof typeof wrapClasses;
    className?: string;
    container?: string;
};
export type Components = {
    [K in keyof typeof components]: FC<Props>;
};
