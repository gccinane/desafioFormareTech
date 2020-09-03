import produce from "immer";

const INITIAL_STATE = {
  token: null,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.username = action.payload.username;
        draft.signed = true;
        draft.isAdmin = action.payload.isAdmin;
        break;
      }
      case "@auth/SIGN_FAILURE": {
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
