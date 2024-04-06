import styled from 'styled-components'

export const BannerImg = styled.img`
  width: 100%;
  min-height: 50vh;
  max-height: 60vh;

  @media screen and (max-width: 970px) {
    min-height: 40vh;
  }
  @media screen and (max-width: 768px) {
    min-height: 25vh;
    display: ${props => (props.isProduct ? 'none' : 'block')};
  }
`
