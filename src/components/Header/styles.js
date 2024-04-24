import { FaUserCog } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #fff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
    height: 60px;
  }
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  color: ${props => (props.isActive ? '#d92419' : '#555')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`
export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555;
  }
`
export const PageLinkExit = styled.a`
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  color: #d92419;
`
export const IconManage = styled(FaUserCog)`
  font-size: 24px;
`
export const IconMenu = styled(FiMenu)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 26px;
    cursor: pointer;
  }
`
export const BtnLogout = styled.button`
  display: none;
  background: transparent;
  border: none;

  .icon {
    color: #000;
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
