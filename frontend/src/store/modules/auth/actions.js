export function signInRequest(username, password) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: {
      username,
      password,
    },
  };
}

export function signInSuccess(token, username, isAdmin) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: {
      token,
      username,
      isAdmin,
    },
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
