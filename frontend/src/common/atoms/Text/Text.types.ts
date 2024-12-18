import { FC, ReactNode } from "react";
export type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
export type Props = {
    children?: ReactNode;
    text?: string;
    align?: "left" | "center";
    lineClamp?: "2" | "3" | "4" | "5" | "6" | "truncate";
    className?: string;
};
export type Components = {
    H1: FC<Props>;
    H2: FC<Props>;
    H3: FC<Props>;
    H4: FC<Props>;
    P: FC<Props>;
    Div: FC<Props>;
    Span: FC<Props>;
};
