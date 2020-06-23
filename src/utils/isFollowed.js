import firebase, { db } from "../base";

export const isFollowed = async (id) => {
  firebase.auth().onAuthStateChanged((user) => {
    return db
      .collection("users")
      .doc(user.uid)
      .collection("following")
      .doc(id)
      .get()
      .then((snapShot) => snapShot.exists);
  });
};
