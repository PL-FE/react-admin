import React, { Component } from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import { IconStyle } from './styled'
import copy from 'copy-to-clipboard'
import { message } from 'antd'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2078739_jkffti4ncns.js',
})

export default class Icon extends Component {
  constructor(props) {
    super()
    this.state = {
      type: props.type,
    }
  }
  handleIconClick = () => {
    const isCopy = copy(this.state.type)
    if (isCopy) message.success(`[${this.state.type}] copied 🎉`)
  }
  render() {
    return (
      <IconStyle onClick={this.handleIconClick}>
        <IconFont className="IconFontItem" type={this.props.type}></IconFont>
        <p>{this.props.name}</p>
        <p>{this.props.type}</p>
      </IconStyle>
    )
  }
}
