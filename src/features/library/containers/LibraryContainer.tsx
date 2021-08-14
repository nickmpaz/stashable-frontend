import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { Library } from "../components/Library";
import { fetchLibraryItems, selectLibraryItems } from "../store/librarySlice";

export const LibraryContainer = () => {
  const libraryItems = useAppSelector(selectLibraryItems);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchLibraryItems());
  });
  return <Library libraryItems={libraryItems}></Library>;
};
