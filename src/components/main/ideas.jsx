import React from "react";
import Idea from "./idea";
import { Container } from "@material-ui/core";
import { useStyles } from "../auth/styles";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

import useIdeas from "../hooks/useIdeas";
import UserProfile from "./userProfile";
export default () => {
  const ideas = useSelector((state) => Object.values(state.ideas));
  const activePage = useIdeas();
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        {activePage && (
          <>
            <UserProfile id={activePage}></UserProfile>
            {ideas.map((idea) => (
              <Idea key={idea.id} idea={idea} id={activePage} />
            ))}
          </>
        )}
      </div>
    </Container>
  );
};
