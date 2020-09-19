import React, { Component } from 'react'
import renderRoutes from '@/utils/cusRenderRouter.js'
import getRoute from '@/utils/getRoute.js'
import { Link, withRouter } from 'react-router-dom'
import routes from '@/router/index.js'
import { Layout, Menu, Breadcrumb } from 'antd'
import { HeaderContainer } from './styled'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
class layout extends Component {
  constructor(props) {
    super()
    this.state = {
      breadcrumbItems: props.location.pathname,
    }
  }

  setBreadcrumbItems = (route) => {
    this.setState({
      breadcrumbItems: route,
    })
  }

  render() {
    const breadcrumbItems = this.state.breadcrumbItems
    const menuItem = (children) => {
      // this.setBreadcrumbItems(path)
      if (!children) return
      return children.map(({ path, name }) => {
        return (
          <Menu.Item key={path}>
            <Link onClick={() => this.setBreadcrumbItems(path)} to={path}>
              {name}
            </Link>
          </Menu.Item>
        )
      })
    }

    const subMenuItems = routes.map(({ path, name, icon, children }) => {
      if (path === '/' || path === '*' || !name) return <div key={path}></div>
      return (
        <SubMenu key={path} icon={icon} title={name}>
          {menuItem(children)}
        </SubMenu>
      )
    })
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
                defaultSelectedKeys={[breadcrumbItems]}
                defaultOpenKeys={['/home']}
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
              >
                {subMenuItems}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {getRoute(this.state.breadcrumbItems).map((it) => {
                  return <Breadcrumb.Item key={it}>{it}</Breadcrumb.Item>
                })}
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  overflow: 'auto',
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

export default withRouter(layout)
