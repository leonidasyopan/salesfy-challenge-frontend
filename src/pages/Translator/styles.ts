import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  height: 100vh;
  width: 100vw;
  color: #767676;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  text-align: center;

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
    font-size: 20px;
  }

  div h2 {
    margin-top: 20px;
  }

  input {
    padding: 10px 5px 10px 10px;
    border-radius: 5px;
  }

  button {
    margin-left: 20px;
    padding: 10px 20px;
    border-radius: 3px;
  }

  ul {
    list-style-type: none;
  }
`;
