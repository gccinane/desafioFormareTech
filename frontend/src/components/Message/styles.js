import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  flex-direction: row;
  text-align: justify;
  position: relative;

  h1 {
    margin: 10px 20px 8px 80px;
    padding: 10px;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
  }

  p {
    text-align: left;
    margin: 10px 80px 8px 0;
    word-break: break-all;
    background: #ddd;
    padding: 10px;
    border-radius: 15px;
  }

  button {
    position: absolute;
    right: 0;
    margin-top: 14px;
    background: #eee;
    padding: 5px;
    &:hover {
      background: none;
    }
  }
`;
