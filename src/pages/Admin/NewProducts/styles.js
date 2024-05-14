import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 60%;
    padding: 30px 30px 80px;
    box-shadow: 3px 10px 18px rgba(0, 0, 0, 0.15);

    h2 {
      font-weight: 500;
    }
  }

  @media screen and (max-width: 970px) {
    form {
      width: 70%;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 60px);
  }

  @media screen and (max-width: 480px) {
    align-items: normal;

    form {
      padding: 30px;
      width: 100%;
      box-shadow: none;
    }
  }
`
export const Label = styled.p`
  font-size: 14px;
`
export const Input = styled.input`
  height: 40px;
  background: #e5e5e5;
  border-radius: 8px;
  border: none;
  width: 90%;
  padding-left: 10px;
  box-shadow: 3px 10px 18px rgba(0, 0, 0, 0.15);
  font-size: 15px;
`
export const Button = styled.button`
  padding: 2% 5%;
  background-color: #d92419;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  bottom: 2%;
  right: 2%;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    bottom: 20%;
    right: 5%;
  }
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 2px dashed #7f7f7f;
  width: 70%;
  gap: 10px;
  padding: 10px;
  font-size: 14px;

  input {
    opacity: 0;
    width: 1px;
  }
`
export const ReactSelectStyle = styled(ReactSelect)`
  .react-select__control {
    width: 70%;
    background: transparent;
    border: none;
    box-shadow: 3px 5px 14px rgba(0, 0, 0, 0.2);
  }

  .react-select__menu {
    background: #e5e5e5;
  }
  .react-select__option--is-selected {
    color: #fff;
  }
  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 20px;
    height: 20px;
    box-shadow: 3px 5px 14px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`
