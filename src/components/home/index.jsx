import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import routes from '@/router/index.js'
import { Layout, Menu, Breadcrumb } from 'antd'
import { HeaderContainer } from './styled'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
class App extends Component {
  constructor() {
    super()
    this.BreadcrumbItems = []
  }

  render() {
    const MenuData = [
      {
        key: '/home',
        title: '首页',
        icon: <UserOutlined />,
        items: [{ key: '/iconView', title: '图标' }],
      },
      {
        key: '/components',
        title: '组件',
        icon: <LaptopOutlined />,
        items: [{ key: '/ant', title: 'ant' }],
      },
      {
        key: '/plugins',
        title: '插件',
        icon: <NotificationOutlined />,
        items: [],
      },
      {
        key: '/404',
        title: '404',
        icon: <NotificationOutlined />,
        items: [{ key: '/404', title: '404' }],
      },
    ]

    const hanldMenuClick = ({ item, key, keyPath, domEvent }) => {
      console.log('keyPath', { item, key, keyPath, domEvent })
    }

    const menuItem = (baseUrl, items) => {
      return items.map(({ key, title }) => {
        if (baseUrl === '/') baseUrl = ''
        let router = `${baseUrl}${key}`
        console.log('router :>> ', router)
        return (
          <Menu.Item key={key}>
            <Link to={router}>{title}</Link>
          </Menu.Item>
        )
      })
    }

    const subMenuItems = MenuData.map(({ key, title, icon, items }) => (
      <SubMenu key={key} icon={icon} title={title}>
        {menuItem(key, items)}
      </SubMenu>
    ))

    console.log('this :>> ', this)
    return (
      <HeaderContainer>
        <Layout>
          <Header className="header">
            <div className="header-content">
              <span className="logo">(ノ▽｀*)ノ[你回来啦♪]=з=з=з</span>
              <span className="user">admin</span>
            </div>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                onClick={hanldMenuClick}
                defaultSelectedKeys={['/iconView']}
                defaultOpenKeys={['/home']}
                style={{ height: '100%', borderRight: 0 }}
              >
                {subMenuItems}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {renderRoutes(routes)}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </HeaderContainer>
    )
  }
}

export default App
