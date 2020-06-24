import {
  signOut,
  addIdea,
  removeIdea,
  editIdea,
  setIdeas,
  addImage,
  addName,
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

export const addIdeaOnServer = (text) => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const idea = {
          time: Date.now(),
          id: v4(),
          text,
          userID: user.uid,
        };
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
export const updateOnServer = (id, key, value) => {
  return (dispatch) => {
    db.collection("users")
      .doc(id)
      .update({ [key]: value })
      .then((user) => {
        console.log("here");
        console.log(user);
      });
  };
};
export const addImageOnServer = (image) => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users").doc(user.uid).update({ image });
        return dispatch(addImage(user.uid, image));
      }
    });
  };
};
export const addNameOnServer = (displayName) => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users").doc(user.uid).update({ displayName });
        dispatch(addName(user.uid, displayName));
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
    const userRef = db
      .collection("users")
      .doc(id)
      .collection("ideas")
      .orderBy("time", "desc");
    userRef.get().then((snapShot) => {
      const ideas = {};
      snapShot.docs.forEach((doc) => {
        ideas[doc.id] = doc.data();
      });
      return dispatch(setIdeas(ideas));
    });
  };
};
