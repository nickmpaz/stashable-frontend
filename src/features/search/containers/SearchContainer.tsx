import React from "react";
import { Layout } from "../../../app/components/Layout";
import { SearchBarContainer } from "./SearchBarContainer";
import { SearchResultsSectionContainer } from "./SearchResultsContainer";

export const SearchContainer = () => {
  return (
    <Layout>
      <SearchBarContainer></SearchBarContainer>
      <SearchResultsSectionContainer></SearchResultsSectionContainer>
    </Layout>
  );
};
