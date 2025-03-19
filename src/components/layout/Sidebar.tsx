import { Layout, Menu, } from "antd";

import { adminPath,  } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebariItemsGenerator";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/features/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";


const {  Sider } = Layout;
const userRole={
  ADMIN:'admin',
  FACULTY:'faculty',
  STUDENT:'student'
}

const Sidebar = () => {
const user= useAppSelector(selectCurrentUser)
let sidebarItems;

switch(user!.role){
  case userRole.ADMIN:
    sidebarItems = sidebarItemsGenerator(adminPath,userRole.ADMIN);
    break;
  case userRole.FACULTY:
    sidebarItems = sidebarItemsGenerator(facultyPaths,userRole.FACULTY);
    break;
  case userRole.STUDENT:
    sidebarItems = sidebarItemsGenerator(studentPaths,userRole.STUDENT);
    break;

    default:break
}

    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{ height:"4rem",display:"flex",justifyContent:"center",alignItems:"center", color:"white"}}>  

            <h1>PH UNI</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
      </Sider>
    );
};

export default Sidebar;