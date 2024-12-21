import { FC } from "react";
import { Props } from "./Form.types.ts";
export const Form: FC<Props> = ({ children, id, onSubmit, noValidate = false, autoComplete = "on", className }) => (
    <form id={id} onSubmit={onSubmit} noValidate={noValidate} autoComplete={autoComplete} className={className}>
        {children}
    </form>
);
