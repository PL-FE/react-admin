import React, { Component } from 'react'
import IconFont from '@/components/iconFont/index.jsx'
import iconSymbol from '@/asstes/iconSymbol'
import { IconContainer } from './styled'
export default class table extends Component {
  render() {
    return (
      <IconContainer>
        {iconSymbol.map(({ type, name }) => (
          <IconFont type={type} name={name} key={type} />
        ))}
      </IconContainer>
    )
  }
}
