import { db } from "../base";

const getIdeas = async (ids) => {
  const ideas = await ids.reduce(async (prevArr, id) => {
    const nextArr = await prevArr;

    const idRef = db.collection("users").doc(id).collection("ideas").limit(3);
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
  const sortedIdeas = ideas.sort((a, b) => a.time - b.time);
  return sortedIdeas;
};
