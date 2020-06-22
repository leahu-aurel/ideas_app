import { db } from "../base";

export const queryUsers = async (substr) => {
  const userRef = db.collection("users");
  const snapShot = await userRef.get();
  snapShot.docs.map((doc) => {
    console.log(
      doc.data().displayName.toLowerCase().indexOf(substr.toLowerCase())
    );
  });
};
