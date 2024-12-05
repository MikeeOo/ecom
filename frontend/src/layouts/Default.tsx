import { Outlet } from "react-router";
import NavBar from "../partials/NavBar.tsx";
import Footer from "../partials/Footer.tsx";

export default function Default() {
    return (
        <>
            <NavBar />
            <div>That's default layout</div>
            <Outlet />
            <Footer />
        </>
    );
}
