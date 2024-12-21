import { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../../utils/string-utils.ts";
import { components, Tag } from "../types.ts";
import {
    Props,
    Components,
    directionClasses,
    justifyClasses,
    alignClasses,
    gapClasses,
    wrapClasses,
} from "./Flex.types";
const createComponent = (tag: Tag): FC<Props> => {
    const Component: FC<Props> = ({ children, dir, x, y, gap, wrap, className }) => {
        const Tag: Tag = tag;
        const styles: string = useMemo(
            () =>
                twMerge(
                    "flex",
                    dir && directionClasses[dir],
                    x && justifyClasses[x],
                    y && alignClasses[y],
                    gap && gapClasses[gap],
                    wrap && wrapClasses[wrap],
                    className,
                ),
            [dir, x, y, gap, wrap, className],
        );
        return <Tag className={styles}>{children}</Tag>;
    };
    Component.displayName = `Flex.${capitalize(tag)}`;
    return Component;
};
export const Flex = Object.fromEntries(
    Object.entries(components).map(([key, tag]) => [key, createComponent(tag as Tag)]),
) as Components;
