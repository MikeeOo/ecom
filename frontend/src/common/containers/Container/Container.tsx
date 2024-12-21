import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../../utils/string-utils.ts";
import { components, Tag } from "../types.ts";
import { Props, Components } from "./Container.types.ts";
const createComponent = (tag: Tag): FC<Props> => {
    const Component: FC<Props> = ({ children, content, className }) => {
        const Tag: Tag = tag;
        return <Tag className={twMerge("container", className)}>{children || content}</Tag>;
    };
    Component.displayName = `Container.${capitalize(tag)}`;
    return Component;
};
export const Container = Object.fromEntries(
    Object.entries(components).map(([key, tag]) => [key, createComponent(tag as Tag)]),
) as Components;
