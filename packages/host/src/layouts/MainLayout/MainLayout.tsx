import React, { useState } from 'react';
import { Layout, Button, Row, Col, Select, theme } from 'antd';
import Nav from '@host/components/Nav/Nav';
const { Header, Sider, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { userSelector } from '@host/store/features/account/selectors';

const { Option } = Select;

export const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const user = useSelector(userSelector);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleRoleChange = (newRole) => {
    console.log('Selected Role:', newRole);
    // Handle role change here (e.g., update state or make API call)
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Nav />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row align="middle" style={{ height: '100%' }}>
            <Col>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col flex="auto" style={{ textAlign: 'right', paddingRight: 24 }}>
              <span>
                <b>NAME</b>: {user?.name}
                <Select
                  defaultValue={user?.role}
                  style={{ width: 120, marginLeft: 10 }}
                  onChange={handleRoleChange}
                >
                  <Option value="manager">Manager</Option>
                  <Option value="admin">Admin</Option>
                  <Option value="user">User</Option>
                </Select>
              </span>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
