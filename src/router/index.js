import React from 'react'
import { Redirect } from 'react-router-dom'
import {
  FireOutlined,
  HomeOutlined,
  ThunderboltOutlined,
  NumberOutlined,
} from '@ant-design/icons'
import NotFound from '@/components/notFound/index.jsx'
import Home from '@/views/home/index.jsx'
import China from '@/views/home/china/index.jsx'
import IconFont from '@/views/home/iconfont/index.jsx'
import Components from '@/views/components/index.jsx'
import Table from '@/views/components/table/index.jsx'

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
    icon: <HomeOutlined />,
    name: '首页',
    children: [
      { path: '/home/china', component: China, name: '中国加油 ❤' },
      { path: '/home/iconFont', component: IconFont, name: 'IconFont' },
    ],
  },
  {
    path: '/components',
    icon: <FireOutlined />,
    name: '组件',
    component: Components,
    children: [{ path: '/components/table', component: Table, name: 'table' }],
  },
  {
    path: '/plugins',
    name: 'plugins',
    icon: <ThunderboltOutlined />,
  },
  {
    path: '/404',
    name: '404',
    icon: <NumberOutlined />,
    component: NotFound,
  },
  {
    path: '*',
    name: 'all',
    component: () => <Redirect to={'/404'} />,
  },
]
