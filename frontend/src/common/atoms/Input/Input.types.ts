import { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
export const types = {
    Text: "text",
    Email: "email",
    Password: "password",
    Url: "url",
    Tel: "tel",
    Textarea: "textarea",
} as const;
export type Type = (typeof types)[keyof typeof types];
// Props
export type Props = TextareaProps | InputProps;
export type BaseProps<TFormData extends FieldValues = FieldValues> = {
    id: string;
    name: keyof TFormData & string;
    labelType?: "top" | "floating" | "hidden";
    labelText: string;
    helper?: string;
    placeholder: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    register: UseFormRegister<TFormData>;
    // styles
    labelClass?: string;
    inputClass?: string;
    className?: string;
};
type TextareaProps<TFormData extends FieldValues = FieldValues> = BaseProps<TFormData> & {
    type?: typeof types.Textarea;
    rows: number;
};
type InputProps<TFormData extends FieldValues = FieldValues> = BaseProps<TFormData> & {
    type?: Exclude<Type, typeof types.Textarea>;
};
export type Components = {
    [K in keyof typeof types]: FC<Props>;
};
