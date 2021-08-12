import React, { FC } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import {
  selectInitialized,
  setAuthenticated,
  setInitialized,
} from "../store/authSlice";

export const AuthProvider: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const initialized = useAppSelector(selectInitialized);

  const redirectIfUnauthenticated = (user: firebase.User | null) => {
    if (!user) {
      history.push("/login");
    }
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch(setAuthenticated(!!user));
        dispatch(setInitialized(true));
        redirectIfUnauthenticated(user);
      });
    return () => unregisterAuthObserver();
  }, []);

  return <>{initialized && children}</>;
};
