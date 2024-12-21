import { FC, ReactNode } from "react";
import { components } from "../types.ts";
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
export const gapClasses = {
    0: "gap-0",
    px: "gap-px",
    0.5: "gap-0.5",
    1: "gap-1",
    1.5: "gap-1.5",
    2: "gap-2",
    2.5: "gap-2.5",
    3: "gap-3",
    3.5: "gap-3.5",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
    9: "gap-9",
    10: "gap-10",
    11: "gap-11",
    12: "gap-12",
    14: "gap-14",
    16: "gap-16",
    20: "gap-20",
    24: "gap-24",
    28: "gap-28",
    32: "gap-32",
    36: "gap-36",
    40: "gap-40",
    44: "gap-44",
    48: "gap-48",
    52: "gap-52",
    56: "gap-56",
    60: "gap-60",
    64: "gap-64",
    72: "gap-72",
    80: "gap-80",
    96: "gap-96",
} as const;
export type Props = {
    children: ReactNode;
    dir?: keyof typeof directionClasses;
    x?: keyof typeof justifyClasses;
    y?: keyof typeof alignClasses;
    gap?: keyof typeof gapClasses;
    wrap?: keyof typeof wrapClasses;
    className?: string;
};
export type Components = {
    [K in keyof typeof components]: FC<Props>;
};
