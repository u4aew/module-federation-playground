import React, { useState } from 'react';
import { Layout, Button, theme } from 'antd';
import Nav from "@host/components/Nav/Nav";
const { Header, Sider, Content } = Layout;

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

export const MainLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return <Layout style={{minHeight:"100vh"}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Nav />
        </Sider>
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
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
}
