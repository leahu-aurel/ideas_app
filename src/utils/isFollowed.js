import { db } from "../base";

export const isFollowed = async (user_id, id) => {
  const isFollowed = await db
    .collection("users")
    .doc(user_id)
    .collection("following")
    .doc(id)
    .get()
    .then((snapShot) => snapShot.exists);
  console.log(isFollowed);
  return isFollowed;
};
