import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 60px);
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 30px;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`
