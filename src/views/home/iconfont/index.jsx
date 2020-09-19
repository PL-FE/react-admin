import React, { Component } from 'react'
import { Input } from 'antd'
import IconFont from '@/components/iconFont/index.jsx'
import iconSymbol from '@/asstes/iconSymbol'
import { IconContainer } from './styled'

export default class table extends Component {
  constructor() {
    super()
    this.state = {
      cusIconType: '',
    }
  }

  changeData(e) {
    e.persist()
    const value = e.target.value

    if (value && iconSymbol.map(({ type }) => type).includes(value)) {
      this.setState({ cusIconType: value })
    } else {
      this.setState({ cusIconType: '' })
    }
  }

  componentDidMount() {
    this.refs.iconInput.focus()
  }
  render() {
    const { cusIconType } = this.state
    return (
      <div>
        <IconContainer>
          <div style={{ margin: '0 15px' }}>
            <IconFont type={cusIconType} flag={true} />
            <Input
              ref="iconInput"
              type="text"
              allowClear={true}
              placeholder="Input Type"
              onChange={(e) => this.changeData(e)}
            />
          </div>
          {iconSymbol.map(({ type, name }) => (
            <IconFont type={type} name={name} key={type} />
          ))}
        </IconContainer>
      </div>
    )
  }
}
