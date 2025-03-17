import { Layout, Menu, } from "antd";
import {  Outlet } from "react-router-dom";
import { adminSideBar } from "../../routes/admin.routes";


const { Header, Content, Footer, Sider } = Layout;


// const items:MenuProps['items'] = [
//     {
//         key:'Dashboard',
//         label:<NavLink to={'admin/dashboard'}>Dashboard</NavLink>
//     },
   
//     {
//         key:'user',
//         label:'Management',
//         children:[
//           {
//             key:'createAdmin',
//             label:<NavLink to={'/admin/createAdmin'}>Create Admin</NavLink>
//         },
//           {
//             key:'createFaculty',
//             label:<NavLink to={'/admin/createFaculty'}>Create Aaculty</NavLink>
//         },
//           {
//             key:'createStudent',
//             label:<NavLink to={'/admin/createStudent'}>Create Student</NavLink>
//         },
//         ]
//     }
// ]
  


const MainLayout = () => {
    return (
        <Layout style={{height:"100vh"}}>
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSideBar} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0,  }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
             
            }}
          >
           <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    );
};

export default MainLayout;