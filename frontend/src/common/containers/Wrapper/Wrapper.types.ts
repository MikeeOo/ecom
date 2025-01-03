import { FC, ReactNode } from "react";
import { components } from "../types.ts";
export type Props = {
    children?: ReactNode;
    content?: ReactNode;
    className?: string;
    container?: boolean;
};
export type Components = {
    [K in keyof typeof components]: FC<Props>;
};
