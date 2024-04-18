import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 10px;
  display: flex;
  gap: 12px;
  padding: 12px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
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
  color: #222;
`
export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  color: #555;
  margin-top: 15px;
  margin-bottom: 15px;
`
