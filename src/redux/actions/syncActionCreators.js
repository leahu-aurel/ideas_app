import { SIGN_IN, SIGN_OUT, UPDATE_USER, ADD_IDEA } from "./actions";
import { v4 } from "uuid";

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

export const addIdea = (text) => {
  return {
    type: ADD_IDEA,
    idea: {
      time: Date.now(),
      id: v4(),
      text,
    },
  };
};
