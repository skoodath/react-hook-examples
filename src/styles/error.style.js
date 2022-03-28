import styled from "styled-components";

const Error = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
  `,
  Inner: styled.div`
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Message: styled.div`
    width: 250px;
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;
    background-color: #ff000099;
    color: #ffffff;
  `
};

export default Error;
