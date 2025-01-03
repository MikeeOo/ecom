import { ReactElement, FC } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../../utils/string-utils";
import { types, Type, Props, Components, BaseProps } from "./Input.types";
const Base: FC<BaseProps> = ({ children, id, labelType, labelText, helper, error, labelClass, className }) => {
    const wrapper: string = twMerge("group", error ? "pb-1" : "pb-3", className);
    const labelStyles: string = twMerge("input-label", labelType === "hidden" && "sr-only", labelClass);
    const labelContent: string = twMerge(
        "input-label-content",
        error && "text-white utils-error-bg utils-error-border",
    );
    const inputWrapper: string = twMerge("group/input-wrapper input-wrapper", error && "utils-error-border");
    return (
        <div className={wrapper}>
            <label htmlFor={id} className={labelStyles}>
                <span className={labelContent}>{labelText}</span>
                {helper && <span className="input-label-helper">{helper}</span>}
            </label>
            <div className={inputWrapper}>{children}</div>
            {error && (
                <label id={`${id}-error`} htmlFor={id} className="input-error">
                    {error}
                </label>
            )}
        </div>
    );
};
const createComponent = (type: Type): FC<Props> => {
    const Component: FC<Props> = ({ id, name, placeholder, rows, disabled, inputClass, register, ...props }) => {
        const { error } = props;
        const inputStyles: string = twMerge("input", error && "border-red-500", inputClass);
        const inputContent: ReactElement =
            type === "textarea" ? (
                <textarea
                    id={id}
                    {...register(name)}
                    placeholder={placeholder}
                    disabled={disabled}
                    rows={rows}
                    className={inputStyles}
                />
            ) : (
                <input
                    id={id}
                    {...register(name)}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={inputStyles}
                />
            );
        return (
            // id={id} is needed for htmlFor and label
            <Base id={id} {...props}>
                {inputContent}
            </Base>
        );
    };
    Component.displayName = `Input.${capitalize(type)}`;
    return Component;
};
export const Input = Object.fromEntries(
    Object.entries(types).map(([key, type]) => [key, createComponent(type as Type)]),
) as Components;
