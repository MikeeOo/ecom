import { FC } from "react";
import { Props } from "./Form.types.ts";
import { twMerge } from "tailwind-merge";
export const Form: FC<Props> = ({
    children,
    id,
    onSubmit,
    noValidate = false,
    autoComplete = "on",
    className,
    container,
}) => {
    const styles: string = twMerge(container && "container", className);
    return (
        <form id={id} onSubmit={onSubmit} noValidate={noValidate} autoComplete={autoComplete} className={styles}>
            {children}
        </form>
    );
};
