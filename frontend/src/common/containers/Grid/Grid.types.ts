import { FC, ReactNode } from "react";
import { components, gapClasses } from "../types.ts";
export const gridColsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
} as const;
export type GridCols = keyof typeof gridColsClasses;
export type Props = {
    children: ReactNode;
    cols: [GridCols?, GridCols?, GridCols?, GridCols?];
    gap?: keyof typeof gapClasses;
    className?: string;
};
export type Components = {
    [K in keyof typeof components]: FC<Props>;
};
