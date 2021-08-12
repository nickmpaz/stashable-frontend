import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { BookDetails } from "../components/BookDetails";
import {
  createLibraryItem,
  fetchBook,
  fetchLibraryItem,
  selectBook,
} from "../store/bookSlice";

export const BookDetailsContainer = () => {
  const { id: bookId } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const book = useAppSelector(selectBook);
  const onAddToCollection = () => dispatch(createLibraryItem(+bookId));

  useEffect(() => {
    dispatch(fetchBook(+bookId));
    dispatch(fetchLibraryItem(+bookId));
  }, []);

  return (
    <>
      {book && (
        <BookDetails
          book={book}
          onAddToCollection={onAddToCollection}
        ></BookDetails>
      )}
    </>
  );
};
