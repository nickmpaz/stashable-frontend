import React from "react";
import { Button } from "@material-ui/core";
import { Layout } from "../components/Layout";
import firebase from "firebase";

export const SocialView = () => {
  return (
    <Layout>
      <Button variant="contained" onClick={() => firebase.auth().signOut()}>
        Sign Out
      </Button>
    </Layout>
  );
};
