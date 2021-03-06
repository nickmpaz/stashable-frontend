import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { FC } from "react";
import { Book } from "../../../app/definitions/types";
import { BookTileContainer } from "../containers/BookTIleContainer";
export interface IBookDisplayProps {
  books: Book[];
}

export const BookDisplay: FC<IBookDisplayProps> = ({ books }) => {
  return (
    <Box pt={8}>
      <Container fixed maxWidth="lg">
        <Grid container spacing={8}>
          {books.map((searchResult) => {
            return (
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <BookTileContainer book={searchResult}></BookTileContainer>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
