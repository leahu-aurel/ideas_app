import React from "react";
import Idea from "./idea";
import { Container } from "@material-ui/core";
import { useStyles } from "../auth/styles";

import UserProfile from "./userProfile";
export default ({ ideas, activePage }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        {activePage && (
          <>
            <UserProfile id={activePage}></UserProfile>
          </>
        )}
        {ideas.map((idea) => (
          <Idea key={idea.id} idea={idea} />
        ))}
      </div>
    </Container>
  );
};
