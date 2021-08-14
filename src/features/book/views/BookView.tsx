import React from "react";
import { Layout } from "../../../app/components/Layout";
import { BookDetailsContainer } from "../containers/BookDetailsContainer";

export const BookView = () => {
  return (
    <Layout>
      <BookDetailsContainer></BookDetailsContainer>
    </Layout>
  );
};
