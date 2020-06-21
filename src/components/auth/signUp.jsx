import React, { useState } from "react";
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
import firebase from "../../base";
import { useHistory } from "react-router-dom";
export default () => {
  const classes = useStyles();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = null;
    if (pass === pass2 && fname && lname) {
      const displayName = `${fname} ${lname}`;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          user = firebase.auth().currentUser;
          user.sendEmailVerification();
        })
        .then(() => {
          user.updateProfile({
            displayName,
          });
        })
        .then(() => history.push("/verify_email"))
        .catch((error) => console.log(error.message));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };
  const handleLnameChange = (e) => {
    setLname(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  const handlePass2Change = (e) => {
    setPass2(e.target.value);
  };
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
                name="firstName"
                variant="outlined"
                required
                fullWidth
                value={fname}
                onChange={handleFnameChange}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={lname}
                onChange={handleLnameChange}
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={handleEmailChange}
                label="Email Address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={pass}
                onChange={handlePassChange}
                label="Password"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={pass2}
                onChange={handlePass2Change}
                label="Repeat password"
                type="password"
              />
            </Grid>
          </Grid>
          <Button
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
