import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    outline: none;

   body{
 
    .react-select-status__option{
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
    }
 }
}
`
