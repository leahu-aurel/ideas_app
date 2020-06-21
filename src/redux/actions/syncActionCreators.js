import {
  SIGN_IN,
  SIGN_OUT,
  UPDATE_USER,
  ADD_IDEA,
  EDIT_IDEA,
  REMOVE_IDEA,
  SET_IDEAS,
} from "./actions";

export const signIn = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type: SIGN_IN,
    user,
  };
};

export const signOut = () => {
  localStorage.removeItem("user");
  return {
    type: SIGN_OUT,
  };
};

export const updateUser = (user) => {
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type: UPDATE_USER,
    user,
  };
};

export const addIdea = (idea) => {
  return {
    type: ADD_IDEA,
    idea,
  };
};
export const editIdea = (idea) => {
  return {
    type: EDIT_IDEA,
    idea,
  };
};
export const removeIdea = (idea) => {
  return {
    type: REMOVE_IDEA,
    idea,
  };
};

export const setIdeas = (ideas) => {
  return {
    type: SET_IDEAS,
    ideas,
  };
};
