import React, { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks/hooks";
import { SearchBar } from "../components/SearchBar";
import { fetchSearchResults } from "../store/searchSlice";

export const SearchBarContainer = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      dispatch(fetchSearchResults(query));
    }
  };

  return <SearchBar value={query} onChange={onChange} onKeyDown={onKeyDown} />;
};
