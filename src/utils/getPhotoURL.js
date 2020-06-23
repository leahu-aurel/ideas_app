import { storage } from "../base";
import { useDispatch } from "react-redux";
import { addImage } from "../redux/actions/syncActionCreators";
export default (id, image) => {
  const dispatch = useDispatch();
  const path = `photos/${id}/${image}`;
  const pathReference = storage.ref(path);
  return pathReference.getDownloadURL().then((urlRef) => {
    dispatch(addImage(id, urlRef));
    return urlRef;
  });
};
