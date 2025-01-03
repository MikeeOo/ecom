import { ReactElement } from "react";
import { Flex, Wrapper } from "../common/containers";
import { Link } from "../common/atoms";
import { ROUTES } from "../constants";
import { LuShoppingCart, LuUser } from "react-icons/lu";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
export default function NavBar(): ReactElement {
    return (
        <Wrapper.Header className="fixed w-full border-b border-black bg-white">
            <Flex.Nav x="between" y="center" container>
                <Link.Nav
                    route={ROUTES.HOME}
                    type="nav"
                    shape="square"
                    iconLeft={<MdOutlineStoreMallDirectory className="text-2xl" />}
                    text="Ecom"
                    className="flex items-center gap-1 border-black"
                />
                <Flex.Ul>
                    <Wrapper.Li>
                        <Link.Nav
                            route={ROUTES.LOGIN}
                            type="nav"
                            shape="rectangle"
                            icon={<LuUser className="text-2xl" />}
                        />
                    </Wrapper.Li>
                    <Wrapper.Li>
                        <Link.Nav
                            route={ROUTES.CART}
                            type="nav"
                            shape="rectangle"
                            icon={<LuShoppingCart className="text-2xl" />}
                        />
                    </Wrapper.Li>
                </Flex.Ul>
            </Flex.Nav>
        </Wrapper.Header>
    );
}
