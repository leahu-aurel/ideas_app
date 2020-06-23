import { storage } from "../base";

export default (id, image) => {
  const path = `photos/${id}/${image}`;
  const pathReference = storage.ref(path);
  return pathReference.getDownloadURL().then((urlRef) => {
    return urlRef;
  });
};
