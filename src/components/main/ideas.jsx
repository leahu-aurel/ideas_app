import React from "react";
import Idea from "./idea";
import { Container } from "@material-ui/core";
import { useStyles } from "../auth/styles";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

import useIdeas from "./hooks/useIdeas";

export default () => {
  const user = useSelector((state) => state.user);
  const ideas = useSelector((state) => Object.values(state.ideas));
  const activePage = useIdeas();
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        {activePage ? (
          <>
            {user && user.uid === activePage ? (
              <>
                <Typography component="h1" variant="h4">
                  Your ideas:
                </Typography>
              </>
            ) : (
              <>{""}</>
            )}
            {ideas.map((idea) => (
              <Idea key={idea.id} idea={idea} id={activePage} />
            ))}
          </>
        ) : (
          <Typography component="h1" variant="h4">
            Log in{" "}
          </Typography>
        )}
      </div>
    </Container>
  );
};
