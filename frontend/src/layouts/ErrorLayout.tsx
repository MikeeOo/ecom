import { ReactElement } from "react";
import NavBar from "../partials/NavBar.tsx";
import Footer from "../partials/Footer.tsx";
import { Wrapper } from "../common/containers";
export default function ErrorLayout(): ReactElement {
    return (
        <>
            <NavBar />
            <Wrapper.Main className="min-h-[calc(100vh_-_41px)] pt-[41px]" container>
                <div>Error: 404</div>
            </Wrapper.Main>
            <Footer />
        </>
    );
}
