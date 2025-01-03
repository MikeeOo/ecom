import { ReactElement } from "react";
import { Text } from "../common/atoms";
import { Wrapper } from "../common/containers";
export default function Footer(): ReactElement {
    return (
        <Wrapper.Footer className="border-t border-black">
            <Text.P align="center" text="Footer Placeholder..." className="container py-2" />
        </Wrapper.Footer>
    );
}
