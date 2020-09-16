import React from 'react'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'

export default [
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
