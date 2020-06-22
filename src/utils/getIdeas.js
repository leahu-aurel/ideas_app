import { db } from "../base";

export const getIdeas = (id) => {
  const userRef = db.collection("users").doc(id).collection("posts");
  return userRef.get().then((user) => user.docs.map((doc) => doc.data()));
};
