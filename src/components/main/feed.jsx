import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Ideas from "./ideas";
import getFollowingIdeas from "../../utils/getFollowingIdeas";

export default () => {
  const [ideas, setIdeas] = useState([]);
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
