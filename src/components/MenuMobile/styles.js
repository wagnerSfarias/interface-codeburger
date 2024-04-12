import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 300px);
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  background-color: rgba(218, 219, 245, 0.9);
  transform: translateY(300px);
  transition: 500ms;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      height: 100vh;
      z-index: 99;
    `}
`
export const Container = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  top: 0;
  bottom: 0;
  background-color: #3c3c3c;
  display: flex;
  font-size: 20px;
  color: #fff;

  > svg {
    transform: rotate(140deg);
    transition: transform 4s;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      > svg {
        transform: rotate(0deg);
      }
    `}

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
export const Close = styled(MdClose)`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 30px;
`
export const ContainerNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  width: 80%;
  gap: 4%;
`

export const Option = styled(Link)`
  border-left: 2px solid #d92419;
  display: flex;
  align-items: center;
  gap: 20px;

  cursor: pointer;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  padding-left: 20px;

  svg {
    font-size: 24px;
  }
`
