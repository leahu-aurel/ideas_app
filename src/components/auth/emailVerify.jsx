import React from "react";
import Avatar from "@material-ui/core/Avatar";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "./copyright";
import { useStyles } from "./styles";
import Link from "@material-ui/core/Link";
export default () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          Now you have to verify your email, go to your email service and click
          the link in the message we sent you. Then you will be able to{" "}
          <Link color="inherit" href="/sign_in">
            log in
          </Link>
          . It could take up to some minutes for you to get the email message.
        </Typography>
      </div>
      <Copyright />
    </Container>
  );
};
