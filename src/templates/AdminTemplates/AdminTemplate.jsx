/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Redirect, Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import {
  Row, Layout, Menu
} from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { ROUTES_NAME, USER_LOGIN } from 'constant'
import userImg from '../../assets/img/user.png'

const { Header, Sider, Content } = Layout

export default function AdminTemplate(props) {
  const [collapsed, setCollapsed] = useState(false)

  let userParam = {}

  if (localStorage.getItem(USER_LOGIN)) {
    userParam = JSON.parse(localStorage.getItem(USER_LOGIN))
  } else {
    alert('bạn k có quyền truy cập trang này')
    return <Redirect to="/" />
  }

  if (userParam.maLoaiNguoiDung !== 'QuanTri') {
    alert('bạn k có quyền truy cập trang này')
    return <Redirect to="/" />
  }

  return (
    <Route
      path={props.path}
      render={(propsRoute) => (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['']}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                <NavLink to={ROUTES_NAME.ADMIN_USERS}>User</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <NavLink to={ROUTES_NAME.ADMIN_FILMS}>Films</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header style={{ position: 'relative' }}>
              {collapsed ? (
                <MenuUnfoldOutlined
                  style={{ color: 'white' }}
                  onClick={() => {
                    setCollapsed(!collapsed)
                  }}
                />
              ) : (
                <MenuFoldOutlined
                  style={{ color: 'white' }}
                  onClick={() => {
                    setCollapsed(!collapsed)
                  }}
                />
              )}
              <div
                className="d-flex"
                style={{
                  position: 'absolute', right: '6em', color: '#fff', top: 0, justifyContent: 'center', alignItems: 'center'
                }}
              >

                <span><img style={{ width: '60px', cursor: 'pointer' }} src={userImg} alt="" /></span>
                <span style={{
                  fontWeight: 'bold', fontSize: '1em'
                }}
                >
                  {' '}
                  {userParam.hoTen || ''}
                </span>

              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: '100vh'

              }}
            >
              <Row>
                <props.component {...propsRoute} />
              </Row>
            </Content>
          </Layout>
        </Layout>
      )}
    />
  )
}
