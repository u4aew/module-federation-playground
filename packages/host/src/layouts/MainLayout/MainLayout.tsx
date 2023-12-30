import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Button, Row, Col, Select, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Nav from '@host/components/Nav/Nav';
import { userSelector } from '@host/store/features/common/selectors';
import { setUserRole } from '@host/store/features/common/slice';
import { AppDispatch } from '@host/store/store';

const { Option } = Select;
const { Header, Sider, Content, Footer } = Layout;

export const MainLayout = ({ children }) => {
  const dispatch: AppDispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const user = useSelector(userSelector);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleRoleChange = (value) => {
    dispatch(setUserRole(value));
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
                  style={{ width: 110, marginLeft: 10, textAlign: 'left' }}
                  onChange={handleRoleChange}
                >
                  <Option value="MANAGER">Manager</Option>
                  <Option value="ADMIN">Admin</Option>
                  <Option value="USER">User</Option>
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
        <Footer style={{ textAlign: 'center' }}>
          <a
            href="https://github.com/u4aew/module-federation-playground"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository Link
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};
