import React, { Component } from 'react'
import renderRoutes from '@/utils/cusRenderRouter.js'

export default class components extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: props.route,
    }
  }
  render() {
    const route = this.state.route

    return <span>{renderRoutes(route.children)}</span>
  }
}
