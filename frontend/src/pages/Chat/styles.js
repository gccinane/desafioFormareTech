import styled from "styled-components";

export const Container = styled.div`
  strong {
    display: flex;
    flex: 1;
    margin: -16px 0 0 88px;
  }
`;

export const Form = styled.form`
  ul {
    overflow: auto;
    max-height: 350px;
  }
`;

export const SendText = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;

  margin: 20px 0 0 324px;

  input {
    margin-top: 4px;
  }
  button {
    line-height: 2px;
    height: 38px;
    margin-left: 4px;
  }
`;
