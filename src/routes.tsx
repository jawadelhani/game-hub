import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";


const router =createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {index: true, element: <HomePage />},        //index: true means this is the default route
            {path:"games/:id",element:<GameDetailPage />}
        ]
    }
])


export default router;