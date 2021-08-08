import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { FC } from "react";
import { Book } from "../../../app/definitions/types";
import { BookTile } from "./BookTile";

export interface IBookDisplayProps {
  books: Book[];
}

export const BookDisplay: FC<IBookDisplayProps> = ({ books }) => {
  return (
    <Box pt={10}>
      <Container fixed maxWidth="lg">
        <Grid container spacing={10}>
          {books.map((searchResult) => {
            return (
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <BookTile book={searchResult}></BookTile>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
