import { SIGN_IN, SIGN_OUT, UPDATE_USER } from "../actions/actions";
const initialUser = JSON.parse(localStorage.getItem("user"));

export default (state = initialUser, { type, user }) => {
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
