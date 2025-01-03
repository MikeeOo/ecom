import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Submit, Text } from "../common/atoms";
import { Flex, Form } from "../common/containers";
import { LoginInput, loginSchema } from "../schemas/login.schema.ts";
export default function LoginPage(): ReactElement {
    const { register, handleSubmit } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });
    const onSubmit: SubmitHandler<LoginInput> = async (data: LoginInput): Promise<void> => console.log(data);
    return (
        <Flex.Section x="center" y="center" className="min-h-[calc(100vh_-_82px)] px-3">
            <Flex.Div dir="col" y="center" className="border-default relative p-9">
                <label htmlFor="djfkgklsdf" />
                <Text.H1
                    size="md"
                    text="Sign In"
                    className="border-default absolute top-0 -translate-y-1/2 bg-white px-3 py-1"
                />
                <Form id="login-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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
                        error="dkhj"
                        placeholder="password"
                        register={register}
                    />
                    <Submit.Primary shape="rectangle" text="Sign In" />
                </Form>
            </Flex.Div>
        </Flex.Section>
    );
}
