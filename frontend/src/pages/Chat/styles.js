import styled from "styled-components";

export const Container = styled.div`
  strong {
    display: flex;
    flex: 1;
    margin: -16px 0 0 88px;
  }

  span {
    display: flex;
    flex-direction: row;

    input {
      margin: 0 auto;
      height: 28px;
    }

    button {
      margin-top: 0px;
      width: 160px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      height: 28px;
      line-height: 2px;
    }
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

export const Filter = styled.input`
  max-height: 28px;
  padding: 16px;
  border: none;
  box-shadow: 0 0 1px;
  padding: 1rem 0rem 1rem 3.5rem;
  width: 100%;
`;
