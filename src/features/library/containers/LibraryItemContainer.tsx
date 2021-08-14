import React from "react";
import { useAppSelector } from "../../../app/hooks/hooks";
import { LibraryItemCard } from "../components/LibraryItemCard";
import { selectLibraryItem } from "../store/librarySlice";

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
