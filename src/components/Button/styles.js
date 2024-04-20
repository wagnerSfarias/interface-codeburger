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

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 768px) {
    width: ${props => props.isCard && '100%'};
    height: 40px;
    font-weight: 500;

    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }
`
