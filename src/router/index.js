import React from 'react'
import { Redirect } from 'react-router-dom'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
import NotFound from '@/components/notFound/index.jsx'
import Home from '@/views/home/index.jsx'
import China from '@/views/home/china/index.jsx'
import IconFont from '@/views/home/iconfont/index.jsx'
import Components from '@/views/components/index.jsx'
import Ant from '@/views/components/ant/index.jsx'

export default [
  {
    path: '/',
    exact: true,
    name: 'root',
    component: () => <Redirect to={'/home/china'} />,
  },
  {
    path: '/home',
    component: Home,
    icon: <UserOutlined />,
    name: '首页',
    children: [
      { path: '/home/china', component: China, name: '中国加油 ❤' },
      { path: '/home/iconFont', component: IconFont, name: 'IconFont' },
    ],
  },
  {
    path: '/components',
    icon: <LaptopOutlined />,
    name: '组件',
    component: Components,
    children: [{ path: '/components/ant', component: Ant, name: 'ant' }],
  },
  {
    path: '/plugins',
    name: 'plugins',
    icon: <NotificationOutlined />,
  },
  {
    path: '/404',
    name: '404',
    icon: <NotificationOutlined />,
    component: NotFound,
  },
  {
    path: '*',
    name: 'all',
    component: () => <Redirect to={'/404'} />,
  },
]
