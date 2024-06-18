import Edit from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 5% 0 10%;

  .MuiTableContainer-root {
    width: 80%;
    margin: 2% auto;
  }

  .MuiTable-root {
    table-layout: fixed;
    min-width: 0;
  }

  .MuiTableCell-root {
    width: 80%;
    min-width: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cell-image {
    text-align: center;

    img {
      width: 70px;
      height: 65px;
      border-radius: 5px;
    }
  }
  .edit {
    width: 50%;
    padding: 0;
    text-align: center;
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 60%;
    padding: 30px 30px 80px;
    box-shadow: 3px 2px 10px 5px rgba(0, 0, 0, 0.15);
    border-radius: 4px;

    h2 {
      font-weight: 500;
    }
  }

  @media screen and (max-width: 970px) {
    form {
      width: 80%;
    }
  }

  @media screen and (max-width: 480px) {
    .MuiTableContainer-root {
      width: 94%;
    }

    form {
      padding: 30px 30px 20%;
      width: 94%;
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
  font-size: 15px;
  border: ${props => (props.errorExist ? '1px solid #cc1717' : 'none')};
  width: 90%;
  padding-left: 10px;
  box-shadow: 3px 5px 10px 5px rgba(0, 0, 0, 0.15);
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
    bottom: 8%;
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

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`

export const EditIcon = styled(Edit)`
  cursor: pointer;
  color: #323d5d;
`
