import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 10px;
  display: flex;
  gap: 12px;
  padding: 16px;
  margin-bottom: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
`

export const ProductName = styled.p`
  font-size: 18px;
  line-height: 19px;
  color: #000;
  width: 180px;
`
export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  color: #000;
  margin-top: 15px;
  margin-bottom: 15px;
`
