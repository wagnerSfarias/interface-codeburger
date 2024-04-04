import { FaCircleNotch } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

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
  min-height: 100vh;
  background: linear-gradient(
    130deg,
    rgba(66, 66, 66, 0.96) 30%,
    rgba(66, 66, 66, 0.65) 50%,
    rgba(66, 66, 66, 1) 95%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerItens = styled.div`
  display: flex;
  max-width: 85%;
  min-width: 80vw;
  max-height: 90%;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 970px) {
    max-width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    border-radius: 0;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
    width: 100%;
    height: 100vh;
  }
`
export const Logo = styled.img`
  width: 50%;
  min-height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ContainerForm = styled.div`
  background: #424242;
  padding: 25px 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  img {
    width: 180px;
    min-height: 150px;
    margin: 0 auto;
  }

  h1 {
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;

    form {
      width: 80%;
    }
  }
  @media screen and (max-width: 480px) {
    form {
      width: 100%;
    }
    img {
      width: 150px;
      min-height: 120px;
    }
  }
`
export const Label = styled.p`
  color: #fff;
  font-weight: 500;
  line-height: 14px;
  margin: 15px 0 5px;
`
export const Input = styled.input`
  height: 38px;
  background: #fff;
  border-radius: 5px;
  border: ${props =>
    props.error ? '2px solid rgba(249, 54, 54, 0.91)' : 'none'};
  padding-left: 10px;
  font-size: 15px;
`

export const SignInlink = styled.p`
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  color: #fff;

  a {
    cursor: pointer;
    text-decoration: none;
    color: rgba(249, 54, 54, 0.91);
    color: #d92419;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`
