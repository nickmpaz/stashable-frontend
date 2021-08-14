import { TextField } from "@material-ui/core";
import React, { ChangeEvent, FC } from "react";
import { Book, LibraryItem } from "../../../app/definitions/types";
import { BookDisplay } from "../../book/components/BookDisplay";

export interface LibraryProps {
  books: Book[];
  query: string;
  queryOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Library: FC<LibraryProps> = ({ books, query, queryOnChange }) => {
  return (
    <>
      <TextField
        variant="outlined"
        fullWidth
        label="Search"
        value={query}
        onChange={queryOnChange}
      ></TextField>
      <BookDisplay books={books}></BookDisplay>
    </>
  );
};
