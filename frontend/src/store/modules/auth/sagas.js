import { all, takeLatest, call, put } from "redux-saga/effects";

import api from "~/services/api";
import history from "~/services/history";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  const { username, password } = payload;

  try {
    const response = yield call(api.post, "sessions", { username, password });

    const { token, user } = response.data;
    console.tron.log(response.data);
    yield put(signInSuccess(token, username, user.isAdmin));

    api.defaults.headers.Authorization = `Bearer ${token}`;
    history.push("/chat");
  } catch (error) {
    console.tron.log(error);
    yield put(signFailure());
  }
}

export function signOut() {
  history.push("/");
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
  takeLatest("persist/REHYDRATE", setToken),
]);
