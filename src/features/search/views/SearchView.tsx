import React from "react";
import { Layout } from "../../../app/components/Layout";
import { SearchBarContainer } from "../containers/SearchBarContainer";
import { SearchResultsSectionContainer } from "../containers/SearchResultsContainer";

export const SearchView = () => {
  return (
    <Layout>
      <SearchBarContainer></SearchBarContainer>
      <SearchResultsSectionContainer></SearchResultsSectionContainer>
    </Layout>
  );
};
