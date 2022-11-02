import 'antd/dist/antd.min.css'
import './NavBar.css'
//import Sens from './senators.png'
//import Leafs from './leafs.png'
//import Flames from './flames.png'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Home from '../../pages/Home';
import SignUp from '../../pages/Signup';
import Login from '../../pages/Login';
import Senators from '../../pages/Senators';
import Leafs from '../../pages/Leafs';
import Flames from '../../pages/Flames';
import Krakens from '../../pages/Krakens';
import Wild from '../../pages/Wild';
import Jets from '../../pages/Jets';
import Predators from '../../pages/Predators';
import Blues from '../../pages/Blues';
import Avalanche from '../../pages/Avalanche';
import Stars from '../../pages/Stars';
import Blackhawks from '../../pages/Blackhawks';
import Jackets from '../../pages/Jackets';
import Capitals from '../../pages/Capitals';
import Penguins from '../../pages/Penguins';
import Flyers from '../../pages/Flyers';
import Rangers from '../../pages/Rangers';
import Islanders from '../../pages/Islanders';
import Devils from '../../pages/Devils';
import Hurricanes from '../../pages/Hurricanes';
import Panthers from '../../pages/Panthers';
import Lightning from '../../pages/Lightning';
import Canadians from '../../pages/Canadians';
import Sabers from '../../pages/Sabers';
import Wings from '../../pages/Wings';
import { Link, Navigate, redirect } from 'react-router-dom';
import { BreadcrumbItem } from 'react-bootstrap'

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  
  getItem('Players','sub', <TeamOutlined />, [
    getItem('AllPlayers','37',<Link to="/home"/> ),
    getItem('Senators','5',<Link to="/Senators"/> ),
    getItem('Maple Leafs','7',<Link to="/Leafs"/>),
    getItem('Flames', '24', <Link to="/Flames"/>),
    getItem('Krakens', '36', <Link to="/Krakens"/>),
    getItem('Wild', '23', <Link to="/Wild"/>),
    getItem('Jets', '22', <Link to="/Jets"/>),
    getItem('Predators', '21', <Link to="/Predators"/>),
    getItem('Blues', '20', <Link to="/Blues"/>),
    getItem('Avalache', '19', <Link to="/Avalanche"/>),
    getItem('Stars', '18', <Link to="/Stars"/>),
    getItem('Blackhawks', '17', <Link to="/Blackhawks"/>),
    getItem('Blue Jackets', '16', <Link to="/Jackets"/>),
    getItem('Capitals', '15', <Link to="/Capitals"/>),
    getItem('Penguins', '14', <Link to="/Penguins"/>),
    getItem('Flyers', '13', <Link to="/Flyers"/>),
    getItem('Rangers', '12', <Link to="/Rangers"/>),
    getItem('Islanders', '11', <Link to="/Islanders"/>),
    getItem('Devils', '10', <Link to="/Devils"/>),
    getItem('Hurricanes', '9', <Link to="/Hurricanes"/>),
    getItem('Panthers', '8', <Link to="/Panthers"/>),
    getItem('Lightning', '6', <Link to="/Lighting"/>),
    getItem('Canadians', '4', <Link to="/Canadians"/>),
    getItem('Sabers', '2', <Link to="/Sabers"/>),
    getItem('Red Wings', '3', <Link to="/Wings"/>),
    //getItem('Flames', '3', <img src={Flames} width='40' height='30' />),
  ]),
  getItem('My Team', 'sub2', <UserOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Users Teams', 'sub3', <UserOutlined />),
  getItem('Signin', 'sub4', <Link to="/signup"/>  ),
  getItem('Login', 'sub5', <Link to="/login"/>  ),
  getItem('Signout', 'sub6', <Link to="/" />

   ),
];
const AppNavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
    
      style={{
        minHeight: '100vh',
      }}
    >
      
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
   
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        
        
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
           
            <Breadcrumb.Item>Players</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
                  
          </div>
          
        </Content>
        <Footer
        
          style={{
            textAlign: 'center',
          }}
        >
          Who Ya Got ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppNavBar;