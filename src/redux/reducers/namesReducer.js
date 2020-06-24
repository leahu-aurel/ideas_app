import { ADD_NAME } from "../actions/actions";

export default (state = {}, { type, id, name }) => {
  switch (type) {
    case ADD_NAME:
      return { ...state, [id]: name };
    default:
      return state;
  }
};
