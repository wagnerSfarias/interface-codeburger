import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
  }
`
export const ItemsContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? 'rgba(217, 36, 25, 0.88)' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;
  .icon {
    color: #fff;
  }
`
export const ListLink = styled(Link)`
  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  margin-left: 8px;
`
