import { ADD_IMAGE } from "../actions/actions";

export default (state = {}, { type, id, url }) => {
  switch (type) {
    case ADD_IMAGE:
      return { ...state, [id]: url };
    default:
      return state;
  }
};
