import firebase, { db } from "../base";

export const handleFollow = (id, followed) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (followed) {
        db.collection("users")
          .doc(user.uid)
          .collection("following")
          .doc(id)
          .set({ id });
      } else {
        db.collection("users")
          .doc(user.uid)
          .collection("following")
          .doc(id)
          .delete();
      }
    }
  });
};
