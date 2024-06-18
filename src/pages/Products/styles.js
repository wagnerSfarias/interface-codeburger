import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 60px);
    justify-content: space-between;
  }
`
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    padding: 10px 0;
    margin-top: 2px;
  }
`
export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #d92419'};
  color: ${props => (props.isActiveCategory ? '#d92419' : '#9a9a9d')};
  font-size: 17px;
  padding-bottom: 5px;

  @media screen and (max-width: 768px) {
    width: 60%;
    height: 40px;
    border-radius: 5px;
    font-weight: 500;
    border: none;
    background: ${props =>
      props.isActiveCategory ? '#d92419' : 'transparent'};
    color: ${props => (props.isActiveCategory ? '#FFF' : '#9a9a9d')};
  }
`
export const ProductsContainer = styled.div`
  display: ${props => (props.isProduct ? 'grid' : 'none')};
  grid-template-columns: repeat(auto-fill, 370px);
  gap: 12px;
  padding: 30px;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, 350px);
  }
`
