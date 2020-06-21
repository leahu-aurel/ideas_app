import { signOut, updateUser } from "./syncActionCreators";
import firebase from "../../base";

export const signOutOnServer = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signOut());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateNameOnServer = (displayName) => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        user.updateProfile({
          displayName,
        });
        return dispatch(updateUser(user));
      }
    });
  };
};
