import React, { FC } from "react";
import { useHistory } from "react-router";
import { BOOK } from "../../../app/definitions/routes";
import { Book } from "../../../app/definitions/types";
import { BookTile } from "../components/BookTile";

export interface IBookTileContainerProps {
  book: Book;
}

export const BookTileContainer: FC<IBookTileContainerProps> = ({ book }) => {
  const history = useHistory();
  const onClick = () => history.push(BOOK.replace(":id", book.id));

  return <BookTile book={book} onClick={onClick}></BookTile>;
};
