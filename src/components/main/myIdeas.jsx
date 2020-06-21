import React from "react";
import Idea from "./idea";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { useStyles } from "../auth/styles";
import Typography from "@material-ui/core/Typography";
import Avatar1 from "../../images/aurel.jpg";

export default () => {
  const myIdeas = useSelector((state) => state.myIdeas);
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Your ideas:
        </Typography>{" "}
        {myIdeas.map((idea) => (
          <Idea
            key={idea.id}
            text={idea.text}
            img={Avatar1}
            time={idea.time}
            name={idea.name}
          />
        ))}
      </div>
    </Container>
  );
};
