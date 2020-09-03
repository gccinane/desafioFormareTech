import React from "react";
import PropTypes from "prop-types";
import { FiDelete } from "react-icons/fi";
import { Container } from "./styles";

function Message({ author, content, isAdmin, handler, id }) {
  return (
    <Container>
      <h1>{author}</h1>
      <p>{content}</p>
      {isAdmin && (
        <button type="button" onClick={handler(id)}>
          <FiDelete size={20} color="red" />
        </button>
      )}
    </Container>
  );
}

export default Message;

Message.defaultProps = {
  isAdmin: false,
  handler: null,
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
  handler: PropTypes.func,
};
