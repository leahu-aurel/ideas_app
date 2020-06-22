import { db } from "../../../base";
import getPhotoURL from "../../../utils/getPhotoURL";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addImage } from "../../../redux/actions/syncActionCreators";
export const useImage = (id) => {
  const [url, setUrl] = useState("");
  const images = useSelector((state) => state.images);

  const dispatch = useDispatch();
  useEffect(() => {
    const userRef = db.collection("users").doc(id);

    userRef
      .get()
      .then((userRef) => userRef.data().image)
      .then((img) => {
        console.log("get_photo");
        return getPhotoURL(id, img);
      })
      .then((urlRef) => {
        console.log("dispatching");
        dispatch(addImage(id, urlRef));
        setUrl(urlRef);
      });
  }, [id]);
  return url;
};
