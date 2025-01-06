import { ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "../App.tsx";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";
import CartPage from "../pages/CartPage.tsx";
import AdminLayout from "../layouts/AdminLayout.tsx";
import ErrorLayout from "../layouts/ErrorLayout.tsx";
import { ROUTES } from "../constants";
export default function Router(): ReactElement {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route element={<DefaultLayout />}>
                        <Route path={ROUTES.HOME} element={<HomePage />} />
                        <Route path={ROUTES.CART} element={<CartPage />} />
                    </Route>
                    <Route path={ROUTES.AUTH} element={<DefaultLayout />}>
                        <Route index element={<Navigate to={ROUTES.LOGIN} replace />} />
                        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                    </Route>
                    <Route path={ROUTES.ADMIN} element={<AdminLayout />} />
                    <Route path={ROUTES.REST} element={<ErrorLayout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
