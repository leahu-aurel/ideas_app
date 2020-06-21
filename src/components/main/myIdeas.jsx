import React, { useEffect } from "react";
import Idea from "./idea";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import { useStyles } from "../auth/styles";
import Typography from "@material-ui/core/Typography";
import Avatar1 from "../../images/aurel.jpg";
import { fetchIdeas } from "../../redux/actions/asyncActionCreators";

export default () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("here");
    dispatch(fetchIdeas());
    console.log("aftermath");
  }, [dispatch, user]);

  const myIdeas = useSelector((state) => Object.values(state.myIdeas));
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        {user ? (
          <>
            <Typography component="h1" variant="h4">
              Your ideas:
            </Typography>{" "}
            {myIdeas.map((idea) => (
              <Idea key={idea.id} idea={idea} img={Avatar1} />
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
