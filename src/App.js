import React from "react";
import { Switch, Route } from "react-router-dom";

import Ideas from "./components/main/ideas";
import NavBar from "./components/nav/navBar";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import VerifyEmail from "./components/auth/emailVerify";
import SignOut from "./components/auth/signOut";
import Search from "./components/search/search";
export default () => {
  return (
    <div>
      <NavBar />
      <Switch>
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
          <Ideas />
        </Route>
      </Switch>
    </div>
  );
};
