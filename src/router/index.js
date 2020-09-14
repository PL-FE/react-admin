import React from 'react'
import { Redirect } from 'react-router-dom'

import NotFound from '@/components/notFound/index.jsx'
import IconView from '@/views/iconView/index.jsx'
import Ant from '@/views/ant/index.jsx'

export default [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={'/home'} />,
  },
  {
    path: '/home',
    component: IconView,
  },
  {
    path: '/components',
    component: Ant,
  },
  {
    path: '*',
    component: NotFound,
    routes: [],
  },
]
