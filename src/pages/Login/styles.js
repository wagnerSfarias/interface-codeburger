import { FaCircleNotch } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

import Background from '../../assets/background.svg'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`
export const IconLoading = styled(FaCircleNotch)`
  animation: ${rotate} 1s linear infinite;
  color: #3498db;
`
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  height: 70%;
`
export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    margin-top: 20px;
  }
`
export const Label = styled.p`
  color: #fff;
  font-weight: 500;
  line-height: 14px;
  margin: 15px 0 5px;
`
export const Input = styled.input`
  width: 391px;
  height: 38px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignInlink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }
`
