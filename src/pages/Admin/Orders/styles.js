import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: 100vh;

  .MuiTableContainer-root {
    width: 90%;
    margin: 2% auto;
  }
  .price {
    font-weight: 700;
    font-size: 16px;
  }
  .number-order {
    display: none;
  }
  @media screen and (max-width: 970px) {
    .MuiTable-root {
      table-layout: fixed;
    }
    .MuiTableCell-root {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .button {
      width: 30%;
      padding: 0;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    .close-table {
      display: none;
    }
    .number-order {
      display: block;
    }
  }
  @media screen and (max-width: 480px) {
    .MuiTableContainer-root {
      width: 100%;
    }
  }
`

export const ReactSelectStyle = styled(ReactSelect)`
  .css-13cymwt-control {
    cursor: pointer;
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  padding-top: 3%;
  margin: 0 2%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-color: #e5e5e5;
    padding: 10px 0;
    margin: 2px 0 0;
    border-top: 2px solid #fff;
  }
`

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  color: #323d5d;
  cursor: pointer;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${props =>
    props.isActiveStatus ? '2px solid #d92419' : 'none'};
  padding-bottom: 5px;
  line-height: 20px;
  font-size: 17px;

  @media screen and (max-width: 768px) {
    width: 60%;
    height: 40px;
    border-radius: 5px;
    font-weight: 500;
    border: none;
    background: ${props => (props.isActiveStatus ? '#d92419' : 'transparent')};
    color: ${props => (props.isActiveStatus ? '#FFF' : '#9a9a9d')};
  }
`
