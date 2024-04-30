import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #d92419;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
  .rec-dot_active {
    background-color: #d92419;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 1px 3px;
    width: 12px;
    height: 12px;
  }
`
export const CategoryImg = styled.img`
  @media screen and (max-width: 970px) {
    width: 240px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    width: inherit;
    text-decoration: none;
  }
`
export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  height: 200px;
`
