import { ReactElement, FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { Link as RouterLink, NavLink } from "react-router";
import { shapeClasses } from "../types.ts";
import { components, Components, Tag, Props, typeClasses } from "./Link.types";
const createComponent = (tag: Tag): FC<Props> => {
    const Component: FC<Props> = ({
        children,
        route,
        type,
        shape,
        icon,
        iconLeft,
        text,
        iconRight,
        content,
        className,
    }) => {
        const Tag: Tag = tag;
        const styles: string = useMemo(
            () => twMerge(typeClasses[type], shape && shapeClasses[shape], className),
            [type, shape, className],
        );
        const linkContent: ReactElement = (
            <>
                {icon || iconLeft}
                {text && text}
                {iconRight && iconRight}
                {content && content}
                {children && children}
            </>
        );
        if (tag === "a")
            return (
                <a href={route} className={styles}>
                    {linkContent}
                </a>
            );
        if (tag === NavLink)
            return (
                <NavLink to={route} className={({ isActive }) => twMerge(styles, isActive && "utils-active")}>
                    {linkContent}
                </NavLink>
            );
        return (
            <Tag to={route} className={styles}>
                {linkContent}
            </Tag>
        );
    };
    Component.displayName = `Link.${tag === "a" ? "A" : tag === RouterLink ? "Router" : "Nav"}`;
    return Component;
};
export const Link = Object.fromEntries(
    Object.entries(components).map(([key, tag]) => [key, createComponent(tag as Tag)]),
) as Components;
