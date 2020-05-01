import styled, { keyframes } from "styled-components";
import { shade } from "polished";

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
    justify-content: center;
    color: #fff;
  }

  #content {
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
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
  min-width: 450px;
  max-width: 600px;
  flex: 1;
  section {
    padding: 10% 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;

      label {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        font-size: 1.2em;
      }

      input {
        display: block;
        width: 100%;
        height: 70px;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 40px;
        text-align: right;
        background: rgba(0, 0, 0, 0.75);
        color: #f15a5b;

        ::placeholder {
          color: #f15a5b;
        }

        ::-webkit-inner-spin-button {
          padding-right: 20px;
          margin-left: 40px;
        }
      }

      span {
        margin-top: 5px;
        color: #c53030;
      }

      button {
        margin-left: auto;
        width: 250px;
        height: 80px;
        border-radius: 10px;
        margin-top: 20px;
        background: #34c2e0;
        font-weight: bold;
        color: #fff;
        letter-spacing: 0.05em;
        transition: background 300ms;

        &:hover {
          background: ${shade(0.1, "#34c2e0")};
        }
      }
    }

    p {
      margin-top: 70px;
      font-size: 1.2em;
    }

    #current-translation {
      margin: 10px 0 90px 0;
      width: 100%;
      height: 200px;
      background: #fff;
      border-radius: 10px;
      padding: 20px 20px;
      font-size: 2em;
      display: flex;
      align-items: center;
      overflow-y: auto;
      color: #97cb31;
    }

    h3 {
      font-size: 1.5em;
    }
  }
`;

export const AnimationContainerRight = styled.div`
  animation: ${appearFromRight} 1500ms;
  min-width: 450px;
  max-width: 600px;
  flex: 1;
  section {
    padding: 10% 5%;

    h2 {
      display: flex;
      align-items: center;
      height: 80px;
      border: 2px solid rgba(0, 0, 0, 0.75);
      padding: 10px 50px;
      background: rgba(0, 0, 0, 0.75);
      color: #fff;
      margin-bottom: 4px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    ul {
      list-style-type: none;
      overflow-y: auto;
      max-height: 65vh;
      display: flex;
      flex-direction: column;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      li {
        display: flex;
        align-items: center;
        padding: 20px 50px;
        margin: 2px 0;
        background: #fff;
        min-height: 80px;
        flex: 1;
      }

      li:nth-of-type(n + 1) {
        color: #fdb834;
      }
      li:nth-of-type(2n + 1) {
        color: #34c2e0;
      }
      li:nth-of-type(3n + 1) {
        color: #97cb31;
      }

      li.equalToCounter {
        background: #f35a5d;
        color: #fff;
      }
    }
  }
`;
