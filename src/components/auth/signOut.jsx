import React from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { signOutOnServer } from "../../redux/actions/asyncActionCreators";
export default () => {
  const dispatch = useDispatch();
  dispatch(signOutOnServer());
  return <Redirect to="/sign_in" />;
};
