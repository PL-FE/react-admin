import styled from 'styled-components'

const IconStyle = styled.div`
  display: inline-block;
  text-align: center;
  padding: 10px;
  cursor: pointer;

  p {
    margin: 0;
  }

  .IconFontItem {
    min-width: 150px;
    min-height: 70px;
    font-size: 30px;
    transition: all 0.3s;
  }
  &:hover {
    .IconFontItem {
      font-size: 70px;
    }
    background-color: #8ecafe;
  }
`
export { IconStyle }
