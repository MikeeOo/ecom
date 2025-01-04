import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES } from "../constants";
import { Input, Link, Submit, Text } from "../common/atoms";
import { Flex, Wrapper, Form } from "../common/containers";
import { LoginInput, loginSchema } from "../schemas/login.schema.ts";
export default function LoginPage(): ReactElement {
    const { register, handleSubmit } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });
    const onSubmit: SubmitHandler<LoginInput> = async (data: LoginInput): Promise<void> => console.log(data);
    return (
        <Flex.Section y="center" dir="col" gap="6" className="min-h-min-h-[calc(100vh_-_82px)] px-3 pt-12 sm:pt-[72px]">
            <Wrapper.Div className="border-default relative w-full max-w-[384px] px-3 pb-6 pt-6 sm:px-6">
                <Text.H1
                    size="md"
                    text="Sign In"
                    className="border-default absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1"
                />
                <Form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <Input.Email
                        id="user-email"
                        name="email"
                        labelText="Email"
                        // error="Wymagany adres e-mail"
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
                    <Submit.Primary shape="rectangle" text="Sign In" className="w-full" />
                </Form>
            </Wrapper.Div>
            <Link.Router
                route={ROUTES.REGISTER}
                type="text"
                text="Don't have an account? Sign up."
                className="text-sm leading-none text-zinc-700 hover:text-black"
            />
        </Flex.Section>
    );
}
