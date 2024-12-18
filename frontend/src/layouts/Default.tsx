import { Outlet } from "react-router";
import NavBar from "../partials/NavBar.tsx";
import Footer from "../partials/Footer.tsx";
import { Text } from "../common/atoms";

export default function Default() {
    return (
        <>
            <NavBar />
            <div>
                <Text.H2 text="That's default layout" align="center" />
            </div>
            <Outlet />
            <Footer />
        </>
    );
}
