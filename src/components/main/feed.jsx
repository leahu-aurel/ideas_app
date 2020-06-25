import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Ideas from "./ideas";
import getFollowingIdeas from "../../utils/getFollowingIdeas";
import { useLocation } from "react-router-dom";
import querystring from "query-string";
import firebase from "../../base";

export default () => {
  const [ideas, setIdeas] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const activationCode = querystring.parse(search).oobCode;
    if (activationCode) {
      firebase.auth().applyActionCode(activationCode);
    }
  }, [search]);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      getFollowingIdeas(user.uid).then((ideasRef) => {
        setIdeas(ideasRef);
      });
    }
  }, [user]);
  return <Ideas ideas={ideas} activePage={""} />;
};
