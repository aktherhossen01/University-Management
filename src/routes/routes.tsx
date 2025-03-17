import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";

import Register from "../pages/Register";


import {adminRoute } from "./admin.routes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/admin',
        element:<App/>,
        children:adminRoute
    },
    {
        path:'/student',
        element:<App/>,
        children:adminRoute
    },
    {
        path:'/faculty',
        element:<App/>,
        children:adminRoute
    },
    
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/',
        element:<Register/>
    }
])

export default router