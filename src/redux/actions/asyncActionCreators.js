import {
  signOut,
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

export const updateOnServer = (id, key, value) => {
  return (dispatch) => {
    db.collection("users")
      .doc(id)
      .update({ [key]: value });
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
          .collection("ideas")
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
          .collection("ideas")
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
          .collection("ideas")
          .doc(idea.id)
          .delete();
        return dispatch(removeIdea(idea));
      }
    });
  };
};

export const fetchIdeas = (id) => {
  return (dispatch) => {
    const userRef = db.collection("users").doc(id).collection("ideas");
    userRef.get().then((snapShot) => {
      const ideas = {};
      snapShot.docs.forEach((doc) => {
        ideas[doc.id] = doc.data();
      });
      return dispatch(setIdeas(ideas));
    });
  };
};
