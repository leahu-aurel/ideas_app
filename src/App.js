import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import IndividualPage from "./components/main/individualPage";
import NavBar from "./components/nav/navBar";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import VerifyEmail from "./components/auth/emailVerify";
import SignOut from "./components/auth/signOut";
import Search from "./components/search/search";
import Feed from "./components/main/feed";

import firebase from "./base";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/actions/syncActionCreators";
export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        user.emailVerified && dispatch(updateUser(user));
      }
    });
  });
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/log_out">
          <SignOut />
        </Route>
        <Route exact path="/sign_in">
          <SignIn />
        </Route>
        <Route exact path="/sign_up">
          <SignUp />
        </Route>
        <Route exact path="/verify_email">
          <VerifyEmail />
        </Route>
        <Route exact path="/:id">
          <IndividualPage />
        </Route>
      </Switch>
    </div>
  );
};
