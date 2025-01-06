import { ReactElement } from "react";
import { SubmitHandler } from "react-hook-form";
import { LoginInput } from "../schemas/login.schema.ts";
import { AuthForm } from "../features/auth";
export default function RegisterPage(): ReactElement {
    const onSubmit: SubmitHandler<LoginInput> = async (data: LoginInput): Promise<void> => console.log(data);
    return <AuthForm mode="register" onSubmit={onSubmit} />;
}
