import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Default from "./layouts/Default.tsx";
import Home from "./pages/Home.tsx";
import Admin from "./layouts/Admin.tsx";
import Error from "./layouts/Error.tsx";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route element={<Default />}>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                    </Route>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
