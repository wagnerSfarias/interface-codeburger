import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;

  .MuiTableContainer-root {
    width: 90%;
    margin: 2% auto;
  }
  .price {
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 60px);
    justify-content: space-between;

    .MuiTable-root {
      table-layout: fixed;
    }
    .MuiTableCell-root {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .button {
      width: 50%;
      padding: 0;
      text-align: center;
    }
  }
  @media screen and (max-width: 480px) {
    .MuiTableContainer-root {
      width: 100%;
    }
  }
`
export const ContainerWarn = styled.div`
  background-color: #fff;
  width: 70%;
  margin: 5% auto;
  color: #555;
  text-align: center;
  padding: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  h2 {
    font-weight: 400;
    font-size: 22px;
  }

  a {
    display: flex;
    justify-content: center;
    width: min-content;
    margin: 1% auto;
    font-size: 35px;

    svg {
      color: #55a576;
      transition: transform 450ms;

      &:hover {
        transform: scale(1.3);
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 5% auto 10%;

    h2 {
      font-size: 18px;
    }
    a {
      font-size: 30px;
      svg {
        &:hover {
          transform: none;
        }
      }
    }
  }
`
