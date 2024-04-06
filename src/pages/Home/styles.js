import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const HomeImg = styled.img`
  width: 100%;
  min-height: 50vh;
  max-height: 60vh;

  @media screen and (max-width: 970px) {
    min-height: 40vh;
  }
  @media screen and (max-width: 768px) {
    min-height: 25vh;
  }
`
