import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "./copyright";
import { useStyles } from "./styles";
import useSignUp from "../hooks/useSignUp";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default () => {
  const classes = useStyles();
  const [
    credentials,
    handleChange,
    handleSubmit,
    isDisabled,
    error,
  ] = useSignUp();
  const { fname, lname, email, pass, pass2 } = credentials;
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="fName"
                variant="outlined"
                required
                fullWidth
                value={fname}
                onChange={handleChange}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lName"
                variant="outlined"
                required
                fullWidth
                value={lname}
                onChange={handleChange}
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={handleChange}
                label="Email Address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="pass"
                variant="outlined"
                required
                fullWidth
                value={pass}
                onChange={handleChange}
                label="Password"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="pass2"
                variant="outlined"
                required
                fullWidth
                value={pass2}
                onChange={handleChange}
                label="Repeat password"
                type="password"
              />
            </Grid>
          </Grid>
          {error && (
            <Alert className={classes.error} severity="error">
              {error}
            </Alert>
          )}
          <Button
            disabled={isDisabled}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="/sign_in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Copyright />
    </Container>
  );
};
