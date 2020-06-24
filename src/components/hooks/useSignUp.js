import { useState } from "react";
import firebase, { db } from "../../base";
import { useHistory } from "react-router-dom";

export default () => {
  const [credentials, setCredentials] = useState({});
  const { fName, lName, email, pass, pass2 } = credentials;
  const history = useHistory();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = null;
    if (!(fName && lName)) {
      setError("The name fields aren't filled");
    } else {
      if (pass && pass2 && pass === pass2) {
        const displayName = `${fName} ${lName}`;
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, pass)
          .then(() => {
            user = firebase.auth().currentUser;
            user.sendEmailVerification();
          })
          .then(() => {
            const obj = { id: user.uid, displayName, image: "" };
            db.collection("users").doc(user.uid).set(obj);
            history.push("/verify_email");
          })
          .catch((error) => setError(error.message));
      } else {
        setError("The password fields are not the same/are not filled");
      }
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return [credentials, handleChange, handleSubmit, error];
};
