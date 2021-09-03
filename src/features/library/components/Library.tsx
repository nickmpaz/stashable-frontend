import React, { ChangeEvent, FC } from "react";
import {
  Box,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { RadioChips } from "../../../app/components/RadioChips";
import { Book, LibraryItemStatus } from "../../../app/definitions/types";
import { BookDisplay } from "../../book/components/BookDisplay";

export interface LibraryProps {
  books: Book[];
  query: string;
  queryOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  statusFilter: LibraryItemStatus | null;
  setStatusFilter: (value: LibraryItemStatus | null) => void;
  statusOptions: { [key: string]: LibraryItemStatus };
  isOwnedFilter: boolean | null;
  setIsOwnedFilter: (value: boolean | null) => void;
  isOwnedOptions: { [key: string]: boolean };
  ratingFilter: number | null;
  setRatingFilter: (value: number | null) => void;
}

export const Library: FC<LibraryProps> = ({
  books,
  query,
  queryOnChange,
  statusFilter,
  setStatusFilter,
  statusOptions,
  isOwnedFilter,
  setIsOwnedFilter,
  isOwnedOptions,
  ratingFilter,
  setRatingFilter,
}) => {
  return (
    <>
      <TextField
        variant="outlined"
        fullWidth
        label="Search"
        value={query}
        onChange={queryOnChange}
      ></TextField>
      <Box pt={8}>
        <Container fixed maxWidth="lg">
          <Card>
            <Box mt={2} mx={2}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom>
                    Status
                  </Typography>
                  <RadioChips
                    options={statusOptions}
                    value={statusFilter}
                    onChange={(value) => setStatusFilter(value)}
                  ></RadioChips>
                  <RadioChips
                    options={isOwnedOptions}
                    value={isOwnedFilter}
                    onChange={(value) => setIsOwnedFilter(value)}
                  ></RadioChips>
                </Grid>
                <Grid item xs={6}>
                  <Rating
                    id="rating"
                    name="rating"
                    precision={0.5}
                    value={ratingFilter}
                    onChange={(event, value) => setRatingFilter(value)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Container>
      </Box>
      <BookDisplay books={books}></BookDisplay>
    </>
  );
};
