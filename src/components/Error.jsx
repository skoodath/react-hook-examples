import Error from "../styles/error.style";

const { Wrapper, Inner, Message } = Error;

const ErrorComponent = ({ message }) => {
  return (
    <Wrapper>
      <Inner>
        <Message>{message}</Message>
      </Inner>
    </Wrapper>
  );
};

export default ErrorComponent;
