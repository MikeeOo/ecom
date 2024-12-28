import { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../../utils/string-utils.ts";
import { components, Components, Tag, Props, lineClampClasses, tagClasses, alignClasses } from "./Text.types.ts";
const createComponent = (tag: Tag): FC<Props> => {
    const Component: FC<Props> = ({ children, text, align, lineClamp, className }) => {
        const Tag: Tag = tag;
        const styles: string = useMemo(
            () =>
                twMerge(
                    tagClasses[tag],
                    align && alignClasses[align],
                    lineClamp && lineClampClasses[lineClamp],
                    className,
                ),
            [tag, align, lineClamp, className],
        );
        return <Tag className={styles}>{text || children}</Tag>;
    };
    Component.displayName = `Text.${capitalize(tag)}`;
    return Component;
};
export const Text = Object.fromEntries(
    Object.entries(components).map(([key, tag]) => [key, createComponent(tag as Tag)]),
) as Components;
