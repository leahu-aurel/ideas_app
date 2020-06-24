import React from "react";
import { useSelector } from "react-redux";
import useIdeas from "../hooks/useIdeas";
import Ideas from "./ideas";

export default () => {
  const ideas = useSelector((state) => Object.values(state.ideas));

  const activePage = useIdeas();
  return <Ideas ideas={ideas} activePage={activePage} />;
};
