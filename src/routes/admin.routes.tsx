import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";



type TSidebarItems ={
    key:string
    label: ReactNode
    children?:TSidebarItems[]
}

export const adminPath=[
    {
        name:'Dashboard',
        path:'dashboard',
        element:<AdminDashboard/>
    },
    {
        name:"User Management",
        children:[
            {
                name:'Create Admin',
                path:'createAdmin',
                element:<CreateAdmin/>
            },
            {
                name:'Create Faculty',
                path:'createFaculty',
                element:<CreateFaculty/>
            },
            {
                name:'Create Student',
                path:'createStudent',
                element:<CreateStudent/>
            },
        ]
    }
]


export const adminSideBar = adminPath.reduce((acc:TSidebarItems[],item)=>{
    if(item.path && item.name){
        acc.push({
            key:item.name,
            label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        });
    }
    if(item.children){
        acc.push({
            key:item.name,
            label:item.name,
            children:item.children.map((child)=>({
                key:child.name,
                label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>

            }))
        })
    }
    return acc
},[])


// export const adminRoute = adminPath.reduce((acc:TRou[],item)=>{
//     if(item.path && item.element){
//         acc.push({
//             path:item.path,
//             element:item.element
//         })
//     }
//     if(item.children){
//         item.children.forEach((child)=>{
//             acc.push({
//                 path:child.path,
//                 element:child.element
//             })
//         })
//     }

//     return acc
// },[])

// export const adminPath=[
//     {
//         path:'Dashboard',
//         element:<AdminDashboard/>
//     },
//     {
//         path:'createStudent',
//         element:<CreateStudent/>
//     },
//     {
//         path:'createFaculty',
//         element:<CreateFaculty/>
//     },
//     {
//         path:'createAdmin',
//         element:<CreateAdmin/>
//     },
// ]