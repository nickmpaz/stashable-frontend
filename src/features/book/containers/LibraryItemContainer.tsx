import React from "react";
import { useAppSelector } from "../../../app/hooks/hooks";
import { LibraryItemCard } from "../components/LibraryItem";
import { selectLibraryItem } from "../store/bookSlice";

export const LibraryItemContainer = () => {
  const libraryItem = useAppSelector(selectLibraryItem);
  return (
    <>
      {libraryItem && (
        <LibraryItemCard libraryItem={libraryItem}></LibraryItemCard>
      )}
    </>
  );
};
