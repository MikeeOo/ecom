import { FC } from "react";
import { capitalize } from "../../../utils/string-utils.ts";
import { components, Tag } from "../types.ts";
import { Props, Components } from "./Wrapper.types.ts";
const createComponent = (tag: Tag): FC<Props> => {
    const Component: FC<Props> = ({ children, content, className }) => {
        const Tag: Tag = tag;
        return <Tag className={className}>{children || content}</Tag>;
    };
    Component.displayName = `Wrapper.${capitalize(tag)}`;
    return Component;
};
export const Wrapper = Object.fromEntries(
    Object.entries(components).map(([key, tag]) => [key, createComponent(tag as Tag)]),
) as Components;
