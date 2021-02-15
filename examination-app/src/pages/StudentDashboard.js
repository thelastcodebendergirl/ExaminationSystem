import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const StudentDashboard = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed({ collapsed });
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Kurs
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Kullanıcı
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          ></div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Examination System ©2020 Created by Hatice Durmaz
        </Footer>
      </Layout>
    </Layout>
  );
};
export default StudentDashboard;
