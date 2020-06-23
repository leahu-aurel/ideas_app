import { useState } from "react";
import firebase, { db } from "../../base";
import { useHistory } from "react-router-dom";

export default () => {
  const [credentials, setCredentials] = useState({});
  const { fName, lName, email, pass, pass2 } = credentials;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = null;
    if (pass === pass2 && fName && lName) {
      const displayName = `${fName} ${lName}`;
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
        .then(() => {
          const obj = { id: user.uid, displayName, image: "" };
          db.collection("users").doc(user.uid).set(obj);
          history.push("/verify_email");
        })
        .catch((error) => console.log(error.message));
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return [credentials, handleChange, handleSubmit];
};
