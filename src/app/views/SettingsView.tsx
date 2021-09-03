import { Button } from "@material-ui/core";
import React from "react";
import { Layout } from "../components/Layout";
import firebase from "firebase";

export const SettingsView = () => {
  return (
    <Layout>
      <Button
        color="primary"
        variant="contained"
        onClick={() => firebase.auth().signOut()}
      >
        Sign Out
      </Button>
    </Layout>
  );
};
