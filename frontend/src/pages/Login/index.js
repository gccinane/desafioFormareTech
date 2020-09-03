import React, { useState } from "react";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { signInRequest } from "~/store/modules/auth/actions";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um username válido")
    .required("username é obrigatório"),
  password: Yup.string().required("Senha é obrigatória"),
});

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInRequest(username, password));
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} schema={schema}>
      <p>SEU USERNAME</p>
      <input
        placeholder="Ananias"
        name="username"
        type="text"
        onChange={handleUsername}
      />
      <p>SUA SENHA</p>
      <input
        placeholder="Senha secreta"
        name="password"
        type="password"
        onChange={handlePassword}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default SignIn;
