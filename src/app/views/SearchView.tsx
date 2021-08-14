import React from "react";
import { SearchBarContainer } from "../../features/book/containers/SearchBarContainer";
import { SearchResultsSectionContainer } from "../../features/book/containers/SearchResultsContainer";
import { Layout } from "../components/Layout";

export const SearchView = () => {
  return (
    <Layout>
      <SearchBarContainer></SearchBarContainer>
      <SearchResultsSectionContainer></SearchResultsSectionContainer>
    </Layout>
  );
};
