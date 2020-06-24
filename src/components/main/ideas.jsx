import React from "react";
import Idea from "./idea";
import { Container } from "@material-ui/core";
import { useStyles } from "../auth/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Link from "@material-ui/core/Link";

import { Avatar, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import UserProfile from "./userProfile";
import { useSelector } from "react-redux";
export default ({ ideas, activePage }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        {activePage ? (
          <>
            <UserProfile id={activePage}></UserProfile>
          </>
        ) : user ? (
          <>
            {" "}
            <Avatar className={classes.avatar}>
              <HomeIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Feed
            </Typography>{" "}
          </>
        ) : (
          <Container component="main" maxWidth="sm">
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">
                To have feed, you have to{" "}
                <Link color="inherit" href="/sign_in">
                  log in
                </Link>{" "}
                and follow someone.
              </Typography>
            </div>
          </Container>
        )}
        {ideas.length ? (
          <>
            {ideas.map((idea) => (
              <Idea key={idea.id} idea={idea} />
            ))}
          </>
        ) : (
          user &&
          (activePage ? (
            activePage === user.uid ? (
              <Typography variant="h5">Write your first idea.</Typography>
            ) : (
              <>
                <Typography variant="h5">
                  No ideas from this user yet.
                </Typography>
              </>
            )
          ) : (
            <>
              <Typography variant="h5">
                You don't follow anyone. To have feed, you have to follow
                someone.
              </Typography>
            </>
          ))
        )}
      </div>
    </Container>
  );
};
