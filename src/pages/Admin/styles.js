import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #e5e5e5;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const ContainerItems = styled.div`
  width: 70%;
  margin-left: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`
