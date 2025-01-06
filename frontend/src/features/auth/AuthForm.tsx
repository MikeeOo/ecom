import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormWrapper } from "./AuthFormWrapper.tsx";
import { RegisterInput, registerSchema } from "../../schemas/register.schema.ts";
import { LoginInput, loginSchema } from "../../schemas/login.schema.ts";
import { Form } from "../../common/containers";
import { Input, Submit } from "../../common/atoms";
import { AuthMode } from "./types.ts";
type Props = { mode: AuthMode; onSubmit: SubmitHandler<LoginInput | RegisterInput> };
export const AuthForm: FC<Props> = ({ mode, onSubmit }) => {
    const { register, handleSubmit } = useForm<LoginInput | RegisterInput>({
        resolver: zodResolver(mode === "login" ? loginSchema : registerSchema),
    });
    return (
        <AuthFormWrapper mode={mode}>
            <Form id={`${mode}-form`} onSubmit={handleSubmit(onSubmit)}>
                <Input.Email
                    id="user-email"
                    name="email"
                    labelText="Email"
                    placeholder="you@example.com"
                    register={register}
                />
                <Input.Password
                    id="user-password"
                    name="password"
                    labelText="Password"
                    placeholder="password"
                    register={register}
                />
                {mode === "register" && (
                    <Input.Password
                        id="confirm-password"
                        name="confirmPassword"
                        labelText="Confirm Password"
                        placeholder="repeat your password"
                        register={register}
                    />
                )}
                <Submit.Primary shape="rectangle" text={mode === "login" ? "Sign In" : "Sign Up"} className="w-full" />
            </Form>
        </AuthFormWrapper>
    );
};
