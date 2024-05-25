import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  width: 100%;
  position: relative;
  color: #424242;
  padding: 2% 0;

  img {
    margin-left: 5%;
  }

  @media screen and (max-width: 768px) {
    img {
      margin-left: 2%;
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: auto;
    padding: 5% 0;

    img {
      width: 160px;
      margin: 0 auto;
    }
  }
`
export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  width: 100%;

  svg {
    font-size: 30px;
    background-color: transparent;
    color: #424242;
    transition: transform 500ms;
  }
  svg:hover {
    transform: scale(1.3);
    color: #d92419;
  }

  @media screen and (max-width: 768px) {
    svg:hover {
      transform: none;
      color: #424242;
    }
  }
`

export const Details = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;

  @media screen and (max-width: 768px) {
    transform: translate(90%, -50%);
    right: 50%;
    left: 0;
    gap: 2px;
    p {
      text-align: center;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    position: static;
    transform: none;
  }
`

export const Copy = styled.p`
  text-align: center;
  font-size: 14px;
`
