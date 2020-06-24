import { ADD_IMAGE } from "../actions/actions";

export default (state = {}, { type, id, image }) => {
  switch (type) {
    case ADD_IMAGE:
      return { ...state, [id]: image };
    default:
      return state;
  }
};
