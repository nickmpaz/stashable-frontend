import React, { FC } from "react";
import { LibraryItem } from "../../../app/definitions/types";
import {
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Box,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

export interface ILibraryItemProps {
  libraryItem: LibraryItem;
}

export const LibraryItemCard: FC<ILibraryItemProps> = ({ libraryItem }) => {
  return (
    <Container fixed maxWidth="md">
      <Box mt={3}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <Typography gutterBottom variant="h6" component="h3">
                  Rating
                </Typography>
                <Box mb={1}>
                  <Rating
                    name="simple-controlled"
                    value={0}
                    onChange={(event, newValue) => {}}
                  />
                </Box>
                <Typography gutterBottom variant="h6" component="h3">
                  Review
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  minRows={5}
                ></TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
