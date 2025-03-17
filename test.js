const adminPath2=[
    {
        name:'Dashboard',
        path:'dashboard',
        element:'AdminDashboard'
    },
    {
        name:"User Management",
        children:[
            {
                name:'Create Admin',
                path:'createAdmin',
                element:'CreateAdmin'
            },
            {
                name:'Create Faculty',
                path:'createFaculty',
                element:'CreateFaculty'
            },
            {
                name:'Create Student',
                path:'createStudent',
                element:'CreateStudent'
            },
        ]
    }
]


const newArr = adminPath2.reduce((acc,item)=>{
    if(item.path && item.name){
        acc.push({
            key:item.name,
            label:'Nav'
        });
    }
    if(item.children){
        acc.push({
            key:item.name,
            label:item.name,
            children:item.children.map((child)=>({
                key:child.name,
                label:'NAV'
            }))
        })
    }
    return acc
},[])

// const newArr = adminPath2.reduce((acc,item)=>{
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
console.log(newArr);
