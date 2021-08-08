import React from "react";
import { useAppSelector } from "../../../app/hooks/hooks";
import { BookDisplay } from "../components/BookDisplay";
import { selectSearchResults } from "../store/searchSlice";

export const SearchResultsSectionContainer = () => {
  const searchResults = useAppSelector(selectSearchResults);
  return <BookDisplay books={searchResults}></BookDisplay>;
};
