import React, { useEffect, useRef } from "react";
import Idea from "./idea";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import { useStyles } from "../auth/styles";
import Typography from "@material-ui/core/Typography";
import Avatar1 from "../../images/aurel.jpg";
import { fetchIdeas } from "../../redux/actions/asyncActionCreators";
import { storage } from "../../base";

export default () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const img = useRef();

  useEffect(() => {
    dispatch(fetchIdeas());
  }, [dispatch, user]);

  useEffect(() => {
    const path = `photos/${user.uid}/${user.photoURL}`;
    const pathReference = storage.ref(path);
    pathReference.getDownloadURL().then((url) => {
      img.current = url;
      console.log(img.current);
    });
  }, [user]);

  const myIdeas = useSelector((state) => Object.values(state.myIdeas));
  const classes = useStyles();
  console.log(img);
  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        {user ? (
          <>
            <Typography component="h1" variant="h4">
              Your ideas:
            </Typography>{" "}
            {myIdeas.map((idea) => (
              <Idea key={idea.id} idea={idea} img={img.current} />
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
