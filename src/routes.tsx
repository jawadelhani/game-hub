import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";


const router =createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[                                       // childrens are render in the outlet of Layout
            {index: true, element: <HomePage />},        //index: true means this is the default route
            {path:"games/:slug",element:<GameDetailPage />}
        ],
        errorElement:<ErrorPage />
    }
])


export default router;