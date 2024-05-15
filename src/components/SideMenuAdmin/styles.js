import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  width: 30%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;

  hr {
    margin: 50px 15px;
  }

  @media screen and (max-width: 768px) {
    position: static;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 30px;
    background: #e5e5e5;

    hr {
      display: none;
    }
  }
`
export const ItemsContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? 'rgba(217, 36, 25, 0.88)' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ContainerButton = styled.button`
  position: fixed;
  bottom: 30px;
  height: 40px;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 8px;
  padding-left: 20px;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;

  .icon {
    font-size: 26px;
  }

  @media screen and (max-width: 768px) {
    position: static;
    color: #000;
    font-size: 0;
    gap: 0;
    height: auto;
    padding: 0;
    margin: 0;
  }
`
export const ListLink = styled(Link)`
  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  margin-left: 8px;
`
export const MenuMobile = styled(FiMenu)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 26px;
    cursor: pointer;
  }
`
