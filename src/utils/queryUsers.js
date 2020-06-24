import { db } from "../base";

export const queryUsers = async (substr) => {
  const userRef = db.collection("users").limit(5);
  const snapShot = await userRef.get();
  const queries = snapShot.docs.map((doc) => doc.data());
  const filteredQueries = queries.filter(
    (doc) => doc.displayName.toLowerCase().indexOf(substr.toLowerCase()) > -1
  );
  return filteredQueries;
  // const finalSnapshots = filteredSnapshot.docs.map((doc) => doc.data());
  // console.log(finalSnapshots);
};
