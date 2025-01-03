import { FormEventHandler, ReactNode } from "react";
export type Props = {
    children: ReactNode;
    id: string;
    onSubmit: FormEventHandler<HTMLFormElement>;
    noValidate?: boolean;
    autoComplete?: string;
    className?: string;
    container?: boolean;
};
