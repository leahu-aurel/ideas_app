import { ADD_IDEA } from "../actions/actions";
export default (state = [], { type, idea }) => {
  switch (type) {
    case ADD_IDEA:
      return [idea, ...state];
    default:
      return state;
  }
};
