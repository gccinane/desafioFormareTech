import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { format, parseISO } from "date-fns";
import api from "~/services/api";

import store from "~/store";
import Message from "~/components/Message";
import { Form, SendText, Container, Filter } from "./styles";

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
      const filteredMessages = messages.filter((message) => message.id !== id);

      setMessages(filteredMessages);
    } catch (error) {
      console.tron.log(error);
    }
  }

  async function handleChangeOrder() {
    console.tron.log(ascOrder);
    const response = !ascOrder
      ? await api.get(`/messages?order=asc&username=${search}`)
      : await api.get(`/messages?order=desc&username=${search}`);

    setAscOrder(!ascOrder);

    const parsedMessages = response.data.mensagens.map((message) => ({
      author: `${format(parseISO(message.createdAt), "dd/MM/yyyy")} - ${
        message.author
      } - ${format(parseISO(message.createdAt), "HH:mm")}`,
      content: message.content,
      id: message._id,
    }));
    setMessages(parsedMessages);
  }

  return (
    <Container>
      {isAdmin && (
        <header>
          <span>
            <Filter
              value={search}
              type="search"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Digite o username"
            />

            <button type="button" onClick={handleChangeOrder}>
              Mudar Ordem
            </button>
          </span>
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
