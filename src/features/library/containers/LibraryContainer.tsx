import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { Library } from "../components/Library";
import { fetchLibraryItems, selectLibraryItems } from "../store/librarySlice";

export const LibraryContainer = () => {
  const libraryItems = useAppSelector(selectLibraryItems);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  const queryOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchLibraryItems());
  });

  return (
    <Library
      books={libraryItems.map((item) => item.book)}
      query={query}
      queryOnChange={queryOnChange}
    ></Library>
  );
};
