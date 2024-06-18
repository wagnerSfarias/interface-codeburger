import Edit from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 10%;

  .MuiTableContainer-root {
    width: 96%;
    margin: 2% auto;
  }

  .offer-icon {
    text-align: center;
  }

  @media screen and (max-width: 970px) {
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
    .close {
      width: 80px;
      padding: 0;
      text-align: center;
    }
    .edit {
      width: 50%;
      padding: 0;
      text-align: center;
    }
  }

  @media screen and (max-width: 480px) {
    .MuiTableContainer-root {
      width: 94%;
    }
    .close {
      display: none;
    }
  }
`
export const Img = styled.img`
  width: 70px;
  border-radius: 5px;
`
export const EditIcon = styled(Edit)`
  cursor: pointer;
  color: #323d5d;
`
