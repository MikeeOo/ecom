import { FC, JSX } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../../utils/string-utils.ts";
import { shapeClasses } from "../types.ts";
import { types, Type, variants, Variant, Props, Components, ButtonCollection, variantClasses } from "./Button.types.ts";
const createComponent = (type: Type, variant: Variant): FC<Props> => {
    const Component: FC<Props> = ({
        children,
        shape,
        icon,
        iconLeft,
        text,
        iconRight,
        content,
        disabled,
        className,
        onClick,
    }) => {
        const styles: string = twMerge(variantClasses[variant], shapeClasses[shape], className);
        const btnContent: JSX.Element = (
            <>
                {icon || iconLeft}
                {text && text}
                {iconRight && iconRight}
                {content && content}
                {children && children}
            </>
        );
        return (
            <button type={type} disabled={disabled} className={styles} onClick={onClick}>
                {btnContent}
            </button>
        );
    };
    Component.displayName = `${capitalize(type)}.${capitalize(variant)}`;
    return Component;
};
const createType = (type: Type): Components => {
    return Object.fromEntries(
        Object.entries(variants).map(([key, variant]) => [key, createComponent(type, variant as Variant)]),
    ) as Components;
};
export const { Button, Submit } = Object.fromEntries(
    Object.entries(types).map(([key, type]) => [key, createType(type as Type)]),
) as ButtonCollection;
