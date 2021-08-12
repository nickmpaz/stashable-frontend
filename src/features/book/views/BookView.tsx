import React from "react";
import { Layout } from "../../../app/components/Layout";
import { BookDetailsContainer } from "../containers/BookDetailsContainer";
import { LibraryItemContainer } from "../containers/LibraryItemContainer";

export const BookView = () => {
  return (
    <Layout>
      <BookDetailsContainer></BookDetailsContainer>
      <LibraryItemContainer></LibraryItemContainer>
    </Layout>
  );
};
