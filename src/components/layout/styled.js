import styled from 'styled-components'

const HeaderContainer = styled.div`
  .ant-layout {
    height: calc(100vh - 64px);
  }

  .header-content {
    user-select: none;
    color: #fff;
    span {
      color: #fff;
      font-weight: 500;
      font-size: 20px;
    }

    .user {
      float: right;
      margin-right: 20px;
    }
  }
`
export { HeaderContainer }
