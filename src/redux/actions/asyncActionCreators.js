import {
  signOut,
  updateUser,
  addIdea,
  removeIdea,
  editIdea,
  setIdeas,
} from "./syncActionCreators";
import firebase, { db } from "../../base";
import { v4 } from "uuid";

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

export const addIdeaOnServer = (text) => {
  const idea = {
    time: Date.now(),
    id: v4(),
    text,
  };
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .collection("posts")
          .doc(idea.id)
          .set(idea);
        return dispatch(addIdea(idea));
      }
    });
  };
};
export const editIdeaOnServer = (idea) => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .collection("posts")
          .doc(idea.id)
          .set(idea);
        return dispatch(editIdea(idea));
      }
    });
  };
};

export const removeIdeaOnServer = (idea) => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .collection("posts")
          .doc(idea.id)
          .delete();
        return dispatch(removeIdea(idea));
      }
    });
  };
};
export const fetchIdeas = () => {
  return (dispatch) => {
    console.log("inFetchIdeas");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .collection("posts")
          .get()
          .then((info) => {
            const ideas = {};
            console.log(ideas);
            info.docs.forEach((doc) => {
              ideas[doc.id] = doc.data();
            });
            console.log(ideas);
            return dispatch(setIdeas(ideas));
          });
      }
    });
  };
};
