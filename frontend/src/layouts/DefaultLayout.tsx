import { ReactElement } from "react";
import { Outlet } from "react-router";
import NavBar from "../partials/NavBar.tsx";
import Footer from "../partials/Footer.tsx";
import { Wrapper } from "../common/containers";
export default function DefaultLayout(): ReactElement {
    return (
        <>
            <NavBar />
            <Wrapper.Main className="min-h-[calc(100vh_-_41px)] pt-[41px]" container>
                <Outlet />
            </Wrapper.Main>
            <Footer />
        </>
    );
}
