import React from "react";
import { Layout } from "../components/Layout";
import { BookDetailsContainer } from "../../features/book/containers/BookDetailsContainer";

export const BookView = () => {
  return (
    <Layout>
      <BookDetailsContainer></BookDetailsContainer>
    </Layout>
  );
};
