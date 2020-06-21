import {
  ADD_IDEA,
  EDIT_IDEA,
  REMOVE_IDEA,
  SET_IDEAS,
} from "../actions/actions";
export default (state = {}, { type, idea, ideas }) => {
  switch (type) {
    case SET_IDEAS:
      return ideas;
    case REMOVE_IDEA:
      const { [idea.id]: value, ...leftIdeas } = state;
      return leftIdeas;
    case EDIT_IDEA:
      return { ...state, [idea.id]: idea };
    case ADD_IDEA:
      return { [idea.id]: idea, ...state };
    default:
      return state;
  }
};
