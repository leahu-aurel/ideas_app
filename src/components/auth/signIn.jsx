import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "./copyright";
import MuiAlert from "@material-ui/lab/Alert";

import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/syncActionCreators";
import { getResponse } from "../../utils/getResponse";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState("");
  console.log(error);
  const submitHandle = (e) => {
    e.preventDefault();
    getResponse(email, pass).then(({ user, error }) =>
      user
        ? (console.log(user), dispatch(signIn(user)), history.push("/"))
        : setError(error.message)
    );
    // ;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={submitHandle} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={handleEmailChange}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={pass}
            onChange={handlePassChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {error && (
            <Alert className={classes.error} severity="error">
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <Grid container justify="center">
            <Grid item>
              <Link href="/sign_up" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Copyright />
    </Container>
  );
}
