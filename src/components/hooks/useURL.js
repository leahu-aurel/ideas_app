import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPhotoURL from "../../utils/getPhotoURL";
import { addImage, addURL } from "../../redux/actions/syncActionCreators";
import { getImage } from "../../utils/getImage";

export const useURL = (id) => {
  const image = useSelector((state) => state.images[id]);
  const url = useSelector((state) => state.urls[id]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (image) {
      getPhotoURL(id, image).then((urlRef) => {
        if (url !== urlRef) {
          dispatch(addURL(id, urlRef));
        }
      });
    } else {
      getImage(id).then((img) => dispatch(addImage(id, img)));
    }
  }, [id, url, image, dispatch]);

  return url;
};
