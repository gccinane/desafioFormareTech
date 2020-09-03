import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  background: #7a7a66;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  height: 75%;
  max-width: 715px;
  background: #eee;
  border-radius: 4px;
  text-align: center;

  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 18px;
    margin: 0 0 10px;
  }

  button {
    margin: 4px 0 32px;
    background: #84dcc6;
    border: 0;
    border-radius: 4px;
    padding: 19px;
    color: #fff;
    &:hover {
      background: ${darken(0.09, "#84dcc6")};
    }
  }
`;
