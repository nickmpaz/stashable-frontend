import React, { FC } from "react";
import { LibraryItem } from "../../../app/definitions/types";
import { Card, Container } from "@material-ui/core";

export interface ILibraryItemProps {
  libraryItem: LibraryItem;
}

export const LibraryItemCard: FC<ILibraryItemProps> = ({ libraryItem }) => {
  return (
    <Container fixed maxWidth="md">
      <Card>
        <div>{JSON.stringify(libraryItem)}</div>; hello
      </Card>
    </Container>
  );
};
