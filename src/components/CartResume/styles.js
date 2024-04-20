import styled from 'styled-components'

export const ContainerResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

  @media screen and (max-width: 970px) {
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 5px;

  .container-top {
    display: grid;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';
    grid-gap: 10px 50px;

    .title {
      grid-area: title;
      font-weight: 500;
      margin-bottom: 20px;
      text-align: center;
    }
    .items {
      grid-area: items;
    }
    .items-price {
      grid-area: items-price;
      justify-self: end;
    }
    .delivery-tax {
      grid-area: delivery-tax;
    }
    .delivery-tax-price {
      grid-area: delivery-tax-price;
      justify-self: end;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 500;
    margin-top: 40px;
  }

  @media screen and (max-width: 970px) {
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    padding: 10px;

    .title {
      font-size: 22px;
    }
  }
`
