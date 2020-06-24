import { SIGN_IN, SIGN_OUT, UPDATE_USER } from "../actions/actions";

export default (state = null, { type, user }) => {
  switch (type) {
    case UPDATE_USER:
      return user;
    case SIGN_IN:
      return user;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
};
