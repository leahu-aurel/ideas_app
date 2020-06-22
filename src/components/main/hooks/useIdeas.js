import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchIdeas } from "../../../redux/actions/asyncActionCreators";
import { storage, db } from "../../../base";
import { isARealUser } from "../../../utils/isARealUser";

export default (id) => {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    id && isARealUser(id).then((isUser) => isUser && setActivePage(id));
  }, [id]);

  useEffect(() => {
    if (activePage) {
      const userRef = db.collection("users").doc(id).collection("image");
      userRef
        .get()
        .then((userRef) => userRef.docs[0].data().name)
        .then((img) => {
          const path = `photos/${id}/${img}`;
          const pathReference = storage.ref(path);
          pathReference.getDownloadURL().then((urlRef) => {
            setUrl(urlRef);
          });
        });
    }
  }, [activePage, id]);

  useEffect(() => {
    activePage && dispatch(fetchIdeas(activePage));
  }, [dispatch, activePage]);

  return [activePage, url];
};
