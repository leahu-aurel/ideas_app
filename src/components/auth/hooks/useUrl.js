import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import getPhotoURL from "../../../utils/getPhotoURL";

import { addImage } from "../../../redux/actions/syncActionCreators";
export default () => {
  const [url, setURL] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const { uid, photoURL } = user;
    if (photoURL) {
      getPhotoURL(uid, photoURL).then((urlRef) => {
        dispatch(addImage(uid, urlRef));
        setURL(urlRef);
      });
    }
  }, [user]);

  return url;
};
