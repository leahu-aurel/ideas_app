import { ADD_URL } from "../actions/actions";

export default (state = {}, { type, id, url }) => {
  switch (type) {
    case ADD_URL:
      return { ...state, [id]: url };
    default:
      return state;
  }
};
