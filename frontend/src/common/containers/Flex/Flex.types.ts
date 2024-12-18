import { FC, ReactNode } from "react";
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
    "0": "gap-0",
    "1": "gap-1",
    "2": "gap-2",
    "3": "gap-3",
    "4": "gap-4",
    "5": "gap-5",
    "6": "gap-6",
    "7": "gap-7",
    "8": "gap-8",
    "9": "gap-9",
    "10": "gap-10",
    "11": "gap-11",
    "12": "gap-12",
    "13": "gap-13",
    "14": "gap-14",
    "15": "gap-15",
    "16": "gap-16",
} as const;

export type Props = {
    children: ReactNode;
    dir?: keyof typeof directionClasses;
    x?: keyof typeof justifyClasses;
    y?: keyof typeof alignClasses;
    wrap?: keyof typeof wrapClasses;
    gap?: keyof typeof gapClasses;
    className?: string;
};
export type Components = {
    Nav: FC<Props>;
    Header: FC<Props>;
    Main: FC<Props>;
    Footer: FC<Props>;
    Section: FC<Props>;
    Article: FC<Props>;
    Aside: FC<Props>;
    Ul: FC<Props>;
    Li: FC<Props>;
    Div: FC<Props>;
    Span: FC<Props>;
};
