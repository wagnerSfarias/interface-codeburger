import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: 65%;

  @media screen and (max-width: 970px) {
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    padding: 5px;
    width: 100%;
    border-radius: 0;

    p:first-child {
      display: none;
    }
  }
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: inherit;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    color: #b5b5b5;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: inherit;

  img {
    width: 120px;
    height: 130px;
  }
  p {
    font-size: 16px;
    color: #000;
    text-align: center;
    align-self: center;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
    p {
      margin-top: 5px;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 10px 5px;

    img {
      display: none;
    }
  }
`
export const EmpyCart = styled.p`
  padding: 10px;
  text-align: center;
  font-weight: bold;
`
