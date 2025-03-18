import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";

import Register from "../pages/Register";
import { adminPath } from "./admin.routes";
import { routerGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";





const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/admin',
        element:<App/>,
        children:routerGenerator(adminPath)
    },
    {
        path:'/faculty',
        element:<App/>,
        children:routerGenerator(facultyPaths)
    },
    {
        path:'/student',
        element:<App/>,
        children:routerGenerator(studentPaths)
    },
    
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default router