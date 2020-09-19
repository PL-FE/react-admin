import styled from 'styled-components'

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  .ant-input-affix-wrapper {
    background-color: #f0f2f5;
    input {
      background-color: #f0f2f5;
    }
  }
`
export { IconContainer }
