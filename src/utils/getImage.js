import { db } from "../base";

export const getImage = async (id) => {
  const userRef = db.collection("users").doc(id);
  const image = await userRef.get().then((user) => user.data().image);
  return image;
};
