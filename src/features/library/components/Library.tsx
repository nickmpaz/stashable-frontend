import React, { FC } from "react";
import { LibraryItem } from "../../../app/definitions/types";
import { BookDisplay } from "../../book/components/BookDisplay";

export interface LibraryProps {
  libraryItems: LibraryItem[];
}

export const Library: FC<LibraryProps> = ({ libraryItems }) => {
  return (
    <BookDisplay books={libraryItems.map((item) => item.book)}></BookDisplay>
  );
};
