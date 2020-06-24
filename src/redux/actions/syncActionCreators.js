import {
  SIGN_IN,
  SIGN_OUT,
  ADD_IDEA,
  EDIT_IDEA,
  REMOVE_IDEA,
  SET_IDEAS,
  ADD_IMAGE,
  ADD_URL,
  UPDATE_USER,
  ADD_NAME,
} from "./actions";

export const signIn = (user) => {
  return {
    type: SIGN_IN,
    user,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
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
export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
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

export const addImage = (id, image) => {
  return {
    type: ADD_IMAGE,
    id,
    image,
  };
};

export const addName = (id, name) => {
  return {
    type: ADD_NAME,
    id,
    name,
  };
};

export const addURL = (id, url) => {
  return {
    type: ADD_URL,
    id,
    url,
  };
};
