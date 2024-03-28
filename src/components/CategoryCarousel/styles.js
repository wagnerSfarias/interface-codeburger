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
  .rec.rec-arrow:hover {
    border: 2px solid #d92419;
    background-color: #efefef;
    color: #efefef;
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
export const CategoryImg = styled.img``
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  height: 200px;
`
