import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPhotoURL from "../../utils/getPhotoURL";
import { addImage } from "../../redux/actions/syncActionCreators";

export const useURL = (id, image) => {
  const [url, setURL] = useState("");
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id && image) {
      getPhotoURL(id, image).then((urlRef) => {
        if (!(images[id] === urlRef)) {
          dispatch(addImage(id, urlRef));
        }
        setURL(urlRef);
      });
    }
  }, [id, image, dispatch]);

  if (images[id]) {
    return images[id];
  }
  return url;
};
