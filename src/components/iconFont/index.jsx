import React, { Component } from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import { IconStyle } from './styled'
import copy from 'copy-to-clipboard'
import { message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2078739_jkffti4ncns.js',
})

export default class Icon extends Component {
  constructor(props) {
    super()
    this.state = {
      type: props.type,
      flag: props.flag,
    }
  }

  handleIconClick = () => {
    const { type } = this.state
    if (!type) return message.warning(`什么也木有😜`)
    const isCopy = copy(type)
    if (isCopy) return message.success(`[${type}] copied 🎉`)
    message.error(`不小心失败了😭`)
  }

  init() {
    if (!this.state.type) {
      return <LoadingOutlined />
    }
  }
  render() {
    return (
      <IconStyle onClick={this.handleIconClick}>
        {!this.props.type && <LoadingOutlined className="IconFontItem" />}
        {this.props.type && (
          <IconFont className="IconFontItem" type={this.props.type}></IconFont>
        )}
        <p>{this.props.name}</p>
        {!this.state.flag && <p>{this.props.type}</p>}
      </IconStyle>
    )
  }
}
