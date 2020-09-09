import React, { Component, useState } from 'react'
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
        key: 'sub1',
        title: 'subnav 1',
        icon: <UserOutlined />,
        items: [
          { key: 1, title: 'option1' },
          { key: 2, title: 'option2' },
          { key: 3, title: 'option3' },
          { key: 4, title: 'option4' },
        ],
      },
      {
        key: 'sub2',
        title: 'subnav 2',
        icon: <LaptopOutlined />,
        items: [
          { key: 5, title: 'option5' },
          { key: 6, title: 'option6' },
          { key: 7, title: 'option7' },
          { key: 8, title: 'option8' },
        ],
      },
      {
        key: 'sub3',
        title: 'subnav 3',
        icon: <NotificationOutlined />,
        items: [
          { key: 9, title: 'option9' },
          { key: 10, title: 'option10' },
          { key: 11, title: 'option11' },
          { key: 12, title: 'option12' },
        ],
      },
    ]

    const hanldMenuClick = ({ item, key, keyPath, domEvent }) => {
      console.log('keyPath', { item, key, keyPath, domEvent })
    }

    const menuItem = (items) => {
      return items.map(({ key, title }) => (
        <Menu.Item key={key}>{title}</Menu.Item>
      ))
    }

    const subMenuItems = MenuData.map(({ key, title, icon, items }) => (
      <SubMenu key={key} icon={icon} title={title}>
        {menuItem(items)}
      </SubMenu>
    ))

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
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
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
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </HeaderContainer>
    )
  }
}

export default App
