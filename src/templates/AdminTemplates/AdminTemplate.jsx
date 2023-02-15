import { useState } from 'react';
import { Redirect, Route, Router } from 'react-router'
import { NavLink } from 'react-router-dom';
import { Row, Col, SubMenu } from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    CalendarOutlined
} from '@ant-design/icons';




import { Layout, Menu, theme } from 'antd';
import { USER_LOGIN } from '../../util/settings';
import { history } from '../../App';


const { Header, Sider, Content } = Layout;

export default function AdminTemplate(props) {

    const [collapsed, setCollapsed] = useState(false);

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('bạn k có quyền truy cập trang này')
        return <Redirect to='/' />
    }

    return <Route path={props.path} render={(propsRoute) => {
        return <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key='1' icon={<UserOutlined />}>
                            <NavLink to='/admin/users'>User</NavLink>
                        </Menu.Item>
                        <Menu.Item key='2' icon={<VideoCameraOutlined />}>
                            <NavLink to='/admin/films'>Films</NavLink>
                        </Menu.Item>
                        <Menu.Item key='3' icon={<CalendarOutlined />}>
                            <NavLink to='/admin/showtimes'>Showtimes</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header >
                        {collapsed ? <MenuUnfoldOutlined style={{ color: 'white' }} onClick={() => {
                            setCollapsed(!collapsed)
                        }} /> : <MenuFoldOutlined style={{ color: 'white' }} onClick={() => {
                            setCollapsed(!collapsed)
                        }} />}

                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: '100vh',
                        }}
                    >
                        <Row>
                            <props.component {...propsRoute} />
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    }}
    />
}