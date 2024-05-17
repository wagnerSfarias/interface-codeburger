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
      width: 80%;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 60px);
  }

  @media screen and (max-width: 480px) {
    align-items: start;
    padding-top: 25%;

    form {
      width: 100%;
      box-shadow: none;
    }
  }
`
