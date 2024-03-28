import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 182px;
  height: ${props => (props.isCard ? '45px' : '40px')};
  background: #d92419;
  border-radius: ${props => (props.isCard ? '8px' : '4%')};
  border: none;
  font-weight: ${props => (props.isCard ? 'bold' : '500')};
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  margin: ${props => (props.isCard ? '20px auto 0' : '20px auto')};

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.6;
  }
`
