import Loader from "../styles/loader.style";

const { Wrapper, Inner, Message } = Loader;

const LoaderComponent = ({ message }) => {
  return (
    <Wrapper>
      <Inner>
        <Message>{message}</Message>
      </Inner>
    </Wrapper>
  );
};

export default LoaderComponent;
