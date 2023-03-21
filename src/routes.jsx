import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/onboard/homePage";
import ErrorBoundry from "./pages/errorPage";
import LoginPage from "./pages/onboard/login";
import SignUpPage from "./pages/onboard/signUp";



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
        }

        ])

    return (
        <RouterProvider router={router} />
    )
}