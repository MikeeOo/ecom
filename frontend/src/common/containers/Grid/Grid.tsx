import { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../../utils/string-utils.ts";
import { components, Tag, gapClasses } from "../types.ts";
import { Props, Components, gridColsClasses } from "./Grid.types.ts";
const createComponent = (tag: Tag): FC<Props> => {
    const Component: FC<Props> = ({ children, cols, gap, className, container }) => {
        const Tag: Tag = tag;
        const styles: string = useMemo(
            () =>
                twMerge(
                    "grid",
                    container && "container",
                    cols[0] && gridColsClasses[cols[0]],
                    cols[1] && `sm:${gridColsClasses[cols[1]]}`,
                    cols[2] && `md:${gridColsClasses[cols[2]]}`,
                    cols[3] && `lg:${gridColsClasses[cols[3]]}`,
                    gap && gapClasses[gap],
                    className,
                ),
            [cols, gap, className],
        );
        return <Tag className={styles}>{children}</Tag>;
    };
    Component.displayName = `Grid.${capitalize(tag)}`;
    return Component;
};
export const Grid = Object.fromEntries(
    Object.entries(components).map(([key, tag]) => [key, createComponent(tag as Tag)]),
) as Components;
