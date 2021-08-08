import React, { FC } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

import { useAppDispatch } from "../../../app/hooks/hooks";
import { authenticate } from "../store/authSlice";

export const AuthProvider: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const redirectIfUnauthenticated = (user: firebase.User | null) => {
    if (!user) {
      history.push("/login");
    }
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        console.log({ user });
        dispatch(authenticate(!!user));
        redirectIfUnauthenticated(user);
      });
    return () => unregisterAuthObserver();
  }, []);

  return <>{children}</>;
};
