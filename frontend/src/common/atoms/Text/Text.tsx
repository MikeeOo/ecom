import { FC } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Components, Tag, Props } from "./Text.types.ts";
const createComponent = (tag: Tag) => {
    const Component: FC<Props> = ({ children, text, align, lineClamp, className }) => {
        const Element: Tag = tag;
        const styles: string = twMerge(
            clsx(
                {
                    h1: "text-6xl",
                    h2: "font-semibold text-2xl",
                    h3: "font-semibold text-xl",
                    p: "text-base",
                    div: "text-base",
                    span: "text-base",
                }[tag],
                {
                    [`line-clamp-${lineClamp}`]: lineClamp && lineClamp !== "truncate",
                    [`text-${align}`]: align,
                    truncate: lineClamp === "truncate",
                },
            ),
            className,
        );
        return <Element className={styles}>{text || children}</Element>;
    };
    Component.displayName = `Text.${tag.toUpperCase()}`;
    return Component;
};
export const Text: Components = {
    H1: createComponent("h1"),
    H2: createComponent("h2"),
    H3: createComponent("h3"),
    H4: createComponent("h4"),
    P: createComponent("p"),
    Div: createComponent("div"),
    Span: createComponent("span"),
};
