import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { Library } from "../components/Library";
import { fetchLibraryItems, selectLibraryItems } from "../store/librarySlice";
import Fuse from "fuse.js";
import { Book, LibraryItemStatus } from "../../../app/definitions/types";

export const LibraryContainer = () => {
  const libraryItems = useAppSelector(selectLibraryItems);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [statusFilter, setStatusFilter] = useState<LibraryItemStatus | null>(
    null
  );
  const [isOwnedFilter, setIsOwnedFilter] = useState<boolean | null>(null);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);

  const queryOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchLibraryItems());
  }, []);

  const statusOptions = {
    "Want to read": LibraryItemStatus.WANT_TO_READ,
    "In progress": LibraryItemStatus.IN_PROGRESS,
    Finished: LibraryItemStatus.FINISHED,
    "Did not finish": LibraryItemStatus.DID_NOT_FINISH,
  };

  const isOwnedOptions = {
    "I own this book": true,
    "I don't own this book": false,
  };

  useEffect(() => {
    let filteredLibraryItems = libraryItems;

    if (query.length > 0) {
      const fuse = new Fuse(libraryItems, { keys: ["book.title"] });
      const results = fuse.search(query);
      filteredLibraryItems = results.map((result) => result.item);
    }

    if (statusFilter !== null) {
      filteredLibraryItems = filteredLibraryItems.filter(
        (item) => item.status === statusFilter
      );
    }

    if (isOwnedFilter !== null) {
      filteredLibraryItems = filteredLibraryItems.filter(
        (item) => item.isOwned === isOwnedFilter
      );
    }

    if (ratingFilter !== null) {
      filteredLibraryItems = filteredLibraryItems.filter(
        (item) => item.rating !== null && item.rating >= ratingFilter
      );
    }

    setFilteredBooks(filteredLibraryItems.map((item) => item.book));
  }, [libraryItems, query, statusFilter, isOwnedFilter, ratingFilter]);

  return (
    <Library
      books={filteredBooks}
      query={query}
      queryOnChange={queryOnChange}
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
      statusOptions={statusOptions}
      isOwnedFilter={isOwnedFilter}
      setIsOwnedFilter={setIsOwnedFilter}
      isOwnedOptions={isOwnedOptions}
      ratingFilter={ratingFilter}
      setRatingFilter={setRatingFilter}
    ></Library>
  );
};
