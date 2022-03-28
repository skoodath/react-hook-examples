import styled from "styled-components";

const Loader = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: teal;
    height: 100vh;
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
    color: #ffffff;
  `
};

export default Loader;
