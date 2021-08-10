import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { BookDetails } from "../components/BookDetails";
import { fetchBook, selectBook } from "../store/bookSlice";

export const BookDetailsContainer = () => {
  const { id: bookId } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const book = useAppSelector(selectBook);

  useEffect(() => {
    dispatch(fetchBook(+bookId));
  });

  return <>{book && <BookDetails book={book}></BookDetails>}</>;
};
