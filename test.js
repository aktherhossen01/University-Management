// const adminPath2=[
//     {
//         name:'Dashboard',
//         path:'dashboard',
//         element:'AdminDashboard'
//     },
//     {
//         name:"User Management",
//         children:[
//             {
//                 name:'Create Admin',
//                 path:'createAdmin',
//                 element:'CreateAdmin'
//             },
//             {
//                 name:'Create Faculty',
//                 path:'createFaculty',
//                 element:'CreateFaculty'
//             },
//             {
//                 name:'Create Student',
//                 path:'createStudent',
//                 element:'CreateStudent'
//             },
//         ]
//     }
// ]


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
// console.log(newArr);
