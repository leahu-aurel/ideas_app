import firebase from "../base";

export const getResponse = async (email, pass) => {
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then(({ user }) => {
      if (user.emailVerified) {
        return {
          user,
        };
      } else {
        throw new Error("Email wasn't verified yet.");
      }
    })
    .catch((error) => {
      return {
        error,
      };
    });
  return response;
};
