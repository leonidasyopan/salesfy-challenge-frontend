import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 11% auto 4%;
  align-content: stretch;
  color: #767676;

  header {
    grid-column: 1 / span 4;
    background: #6d2177;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 50px;
  }

  #content {
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: stretch;
  }

  footer {
    grid-column: 1 / span 4;
    display: flex;
    justify-content: stretch;

    div:nth-of-type(1) {
      flex: 1;
      background: #fdb834;
    }
    div:nth-of-type(2) {
      flex: 1;
      background: #34c2e0;
    }
    div:nth-of-type(3) {
      flex: 1;
      background: #97cb31;
    }
  }
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

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainerLeft = styled.div`
  animation: ${appearFromLeft} 1500ms;
  min-width: 400px;
  flex: 1;
  section {
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const AnimationContainerRight = styled.div`
  animation: ${appearFromRight} 1500ms;
  min-width: 400px;
  flex: 1;
  section {
    padding: 30px 50px;
  }
`;
