import { db } from "../base";

export const isARealUser = (id) => {
  const userRef = db.collection("users").doc(id);
  return userRef.get().then((user) => !!user);
};
