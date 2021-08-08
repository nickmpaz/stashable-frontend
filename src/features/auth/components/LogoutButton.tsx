import React from "react";
import firebase from "firebase";

export const LogoutButton = () => {
  return <button onClick={() => firebase.auth().signOut()}>Sign Out</button>;
};
