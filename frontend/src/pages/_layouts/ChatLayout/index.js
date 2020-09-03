import React from "react";

import { Content, Wrapper } from "./styles";

function ChatLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default ChatLayout;
