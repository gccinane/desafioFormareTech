import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { format, parseISO } from "date-fns";
import api from "~/services/api";

import store from "~/store";
import Message from "~/components/Message";
import { Form, SendText, Container } from "./styles";

const socket = io("localhost:3333");

socket.on("connect", () => {
  console.tron.log(`Socket conectado ${socket.id}`);
});

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  const [search, setSearch] = useState("");
  const [ascOrder, setAscOrder] = useState(true);
  const { username, isAdmin } = store.getState().auth;

  useEffect(() => {
    async function LoadMessages() {
      const response = await api.get(`/messages?username=${search}`);
      const parsedMessages = response.data.mensagens.map((message) => ({
        author: `${format(parseISO(message.createdAt), "dd/MM/yyyy")} - ${
          message.author
        } - ${format(parseISO(message.createdAt), "HH:mm")}`,
        content: message.content,
        id: message._id,
      }));

      setMessages(parsedMessages);
    }

    LoadMessages();
  }, [search]);

  useEffect(() => {
    socket.on("receivedMessage", (data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, []);

  async function handleSendMessage(event) {
    event.preventDefault();
    const response = await api.post("/messages", {
      author: username,
      content: newMessage,
    });
    console.tron.log(response);

    const { author, content, createdAt, _id } = response.data;

    const parsedMessage = {
      author: `${format(
        parseISO(createdAt),
        "dd/MM/yyyy"
      )} - ${author} - ${format(parseISO(createdAt), "HH:mm")}`,
      content,
      id: _id,
    };

    try {
      socket.emit("sendMessage", {
        author: parsedMessage.author,
        content: parsedMessage.content,
        id: parsedMessage.id,
      });
      setMessages([...messages, parsedMessage]);
    } catch (error) {
      console.tron.log(error);
    }
  }

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  async function handleDeleteMessage(id) {
    try {
      await api.delete(`/messages?id=${id}`);
    } catch (error) {
      console.tron.log(error);
    }

    messages.filter((message) => message.id === id);
  }

  return (
    <Container>
      {isAdmin && (
        <header>
          <h1>deus</h1>
        </header>
      )}
      <Form onSubmit={handleSendMessage}>
        <ul>
          {messages.map((message) => (
            <Message
              author={message.author}
              content={message.content}
              id={message.id}
              isAdmin={isAdmin}
              handler={handleDeleteMessage}
            />
          ))}
        </ul>
        <SendText>
          <input
            type="text"
            name="message"
            placeholder="Digite uma mensagem"
            onChange={handleNewMessage}
          />
          <button type="submit">Enviar</button>
        </SendText>
      </Form>

      <strong>User: {username}</strong>
    </Container>
  );
}

export default Chat;
