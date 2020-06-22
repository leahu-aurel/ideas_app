import { db } from "../base";

export const getDisplayName = async (id) => {
  const userRef = db.collection("users").doc(id);
  const displayName = await userRef
    .get()
    .then((user) => user.data().displayName);
  return displayName;
};
