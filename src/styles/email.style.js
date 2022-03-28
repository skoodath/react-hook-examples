import styled from "styled-components";

const Email = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Inner: styled.div`
    padding: 3rem 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `,
  Card: styled.article`
    width: 250px;
    height: 160px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.35),
      -1px -1px 4px rgba(255, 255, 255, 0.35);
    background-image: linear-gradient(
      -135deg,
      rgba(255, 255, 255, 0.35),
      rgba(0, 0, 0, 0.25)
    );
    border-radius: 8px;
    margin: 0.5rem;
  `,
  CardTitle: styled.h2`
    font-size: 1rem;
  `,
  Contact: styled.div`
    margin: 0 auto 1rem 0;
  `,
  SubTitle: styled.h3`
    font-size: 0.8rem;
    margin: 0;
  `,
  Links: styled.a`
    display: block;
    font-size: 0.8rem;
  `
};

export default Email;
