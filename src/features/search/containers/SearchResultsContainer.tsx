import React from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks/hooks";
import { BookDisplay } from "../components/BookDisplay";
import { selectSearchResults } from "../store/searchSlice";

export const SearchResultsSectionContainer = () => {
  const history = useHistory();
  const searchResults = useAppSelector(selectSearchResults);
  return <BookDisplay books={searchResults}></BookDisplay>;
};