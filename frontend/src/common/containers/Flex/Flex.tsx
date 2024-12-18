import { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { Tag } from "../types.ts";
import {
    Props,
    Components,
    directionClasses,
    justifyClasses,
    alignClasses,
    wrapClasses,
    gapClasses,
} from "./Flex.types";
const createComponent = (tag: Tag): FC<Props> => {
    const Component: FC<Props> = ({ children, dir, x, y, wrap, gap, className = "" }) => {
        const Element: Tag = tag;
        const styles: string = useMemo(
            () =>
                twMerge(
                    "flex",
                    dir && directionClasses[dir],
                    x && justifyClasses[x],
                    y && alignClasses[y],
                    wrap && wrapClasses[wrap],
                    gap && gapClasses[gap],
                    className,
                ),
            [dir, x, y, wrap, gap, className],
        );
        return <Element className={styles}>{children}</Element>;
    };
    Component.displayName = `Flex.${tag.toUpperCase()}`;
    return Component;
};
export const Flex: Components = {
    Nav: createComponent("nav"),
    Header: createComponent("header"),
    Main: createComponent("main"),
    Footer: createComponent("footer"),
    Section: createComponent("section"),
    Article: createComponent("article"),
    Aside: createComponent("aside"),
    Ul: createComponent("ul"),
    Li: createComponent("li"),
    Div: createComponent("div"),
    Span: createComponent("span"),
};
