import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link, withRouter } from 'react-router-dom'
import routes from '@/router/index.js'
import { Layout, Menu, Breadcrumb } from 'antd'
import { HeaderContainer } from './styled'
import MenuData from './menu.js'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
class App extends Component {
  constructor(props) {
    super()
    this.state = {
      breadcrumbItems: props.location.pathname.split('/').slice(1),
    }
  }

  setBreadcrumbItems = (route) => {
    this.setState({
      breadcrumbItems: route.split('/').slice(1),
    })
  }

  render() {
    const menuItem = (baseUrl, items) => {
      return items.map(({ key, title }) => {
        if (baseUrl === '/') baseUrl = ''
        let router = `${baseUrl}${key}`
        return (
          <Menu.Item key={key}>
            <Link onClick={() => this.setBreadcrumbItems(router)} to={router}>
              {title}
            </Link>
          </Menu.Item>
        )
      })
    }

    const subMenuItems = MenuData.map(({ key, title, icon, items }) => (
      <SubMenu key={key} icon={icon} title={title}>
        {menuItem(key, items)}
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
                defaultSelectedKeys={['/iconView']}
                defaultOpenKeys={['/home']}
                style={{ height: '100%', borderRight: 0 }}
              >
                {subMenuItems}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {this.state.breadcrumbItems.map((it) => (
                  <Breadcrumb.Item key={it}>{it}</Breadcrumb.Item>
                ))}
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

export default withRouter(App)
