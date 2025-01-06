import { FC, ReactNode } from "react";
import { ROUTES } from "../../constants";
import { Flex, Wrapper } from "../../common/containers";
import { Link, Text } from "../../common/atoms";
import { AuthMode } from "./types.ts";
type Props = { children: ReactNode; mode: AuthMode };
export const AuthFormWrapper: FC<Props> = ({ children, mode }) => {
    return (
        <Flex.Section y="center" dir="col" gap="6" className="min-h-min-h-[calc(100vh_-_82px)] px-3 pt-12 sm:pt-[72px]">
            <Wrapper.Div className="border-default relative w-full max-w-[384px] px-3 pb-6 pt-6 sm:px-6">
                <Text.H1
                    size="md"
                    text={mode === "login" ? "Sign In" : "Sign Up"}
                    className="border-default absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1"
                />
                {children}
            </Wrapper.Div>
            <Link.Router
                route={mode === "login" ? ROUTES.REGISTER : ROUTES.LOGIN}
                type="text"
                text={mode === "login" ? "Don't have an account? Sign up." : "Already have an account? Sign in."}
                className="text-sm leading-none text-zinc-700 hover:text-black"
            />
        </Flex.Section>
    );
};
