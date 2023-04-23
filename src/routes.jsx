import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/onboard/homePage";
import ErrorBoundry from "./pages/errorPage";
import LoginPage from "./pages/onboard/login";
import SignUpPage from "./pages/onboard/signUp";
import Dashboard from "./pages/dashboard/dashboard";



export default function Routes() {
    const router = createBrowserRouter(
        [{
            path: '/*',
            element: <ErrorBoundry />
        },
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/sign-up',
            element: <SignUpPage />
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        }

        ])

    return (
        <RouterProvider router={router} />
    )
}