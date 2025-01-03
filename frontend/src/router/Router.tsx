import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App.tsx";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";
import AdminLayout from "../layouts/AdminLayout.tsx";
import ErrorLayout from "../layouts/ErrorLayout.tsx";
export default function Router(): ReactElement {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route element={<DefaultLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                    <Route path="/admin" element={<AdminLayout />} />
                    <Route path="*" element={<ErrorLayout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
