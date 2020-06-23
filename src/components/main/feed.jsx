import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Ideas from "./ideas";
import getFollowingIdeas from "../../utils/getFollowingIdeas";

export default () => {
  const [ideas, setIdeas] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log("getting ideas");
    getFollowingIdeas(user.uid).then((ideasRef) => {
      console.log("got ideas for real");
      setIdeas(ideasRef);
    });
    console.log("got ideas");
  }, [user]);
  return <Ideas ideas={ideas} activePage={""} />;
};
