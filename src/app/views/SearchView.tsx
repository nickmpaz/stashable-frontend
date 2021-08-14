import React from "react";
import { SearchBarContainer } from "../../features/search/containers/SearchBarContainer";
import { SearchResultsSectionContainer } from "../../features/search/containers/SearchResultsContainer";
import { Layout } from "../components/Layout";

export const SearchView = () => {
  return (
    <Layout>
      <SearchBarContainer></SearchBarContainer>
      <SearchResultsSectionContainer></SearchResultsSectionContainer>
    </Layout>
  );
};
