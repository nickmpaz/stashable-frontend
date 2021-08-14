import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { ChangeEvent, FC } from "react";
import { RadioChips } from "../../../app/components/RadioChips";
import {
  Book,
  LibraryItem,
  LibraryItemStatus,
} from "../../../app/definitions/types";
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
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                  <Box display="flex" justifyContent="center">
                    <RadioChips
                      options={statusOptions}
                      value={statusFilter}
                      //@ts-ignore
                      onChange={(value) => setStatusFilter(value)}
                    ></RadioChips>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box display="flex" justifyContent="center">
                    <RadioChips
                      options={isOwnedOptions}
                      value={isOwnedFilter}
                      //@ts-ignore
                      onChange={(value) => setIsOwnedFilter(value)}
                    ></RadioChips>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box display="flex" justifyContent="center">
                    <Rating
                      id="rating"
                      name="rating"
                      precision={0.5}
                      value={ratingFilter}
                      onChange={(event, value) => setRatingFilter(value)}
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <BookDisplay books={books}></BookDisplay>
    </>
  );
};
