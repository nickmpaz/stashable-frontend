import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/library",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const LoginButton = () => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};
