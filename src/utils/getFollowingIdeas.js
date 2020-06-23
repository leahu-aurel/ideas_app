import { db } from "../base";

const getIdeas = async (ids) => {
  const ideas = await ids.reduce(async (prevArr, id) => {
    const nextArr = await prevArr;

    const idRef = db.collection("users").doc(id).collection("ideas");
    const ideas = await idRef
      .get()
      .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()));
    nextArr.push(...ideas);
    return nextArr;
  }, []);
  return ideas;
};

export default async (id) => {
  const followingRef = db.collection("users").doc(id).collection("following");
  const ids = await followingRef
    .get()
    .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.id));
  const ideas = await getIdeas(ids);
  return ideas;
};
