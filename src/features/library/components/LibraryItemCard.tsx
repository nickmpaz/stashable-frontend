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
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useFormik } from "formik";
import { RadioChips } from "../../../app/components/RadioChips";
import { useAppDispatch } from "../../../app/hooks/hooks";
import { updateLibraryItem } from "../store/librarySlice";

export interface ILibraryItemProps {
  libraryItem: LibraryItem;
}

export const LibraryItemCard: FC<ILibraryItemProps> = ({ libraryItem }) => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      rating: libraryItem.rating,
      review: libraryItem.review,
      status: libraryItem.status,
      isOwned: libraryItem.isOwned,
    },
    onSubmit: (values) => {
      console.log({ values });
      dispatch(updateLibraryItem({ id: libraryItem.id, updates: values }));
    },
  });
  return (
    <Box mt={3}>
      <Card>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            {JSON.stringify(formik.values)}
            <Grid container>
              <Grid item lg={6} xs={12}>
                <Typography gutterBottom variant="h6" component="h3">
                  Status
                </Typography>
                <RadioChips
                  options={{
                    "Want to read": "want_to_read",
                    "In progress": "in_progress",
                    Finished: "finished",
                  }}
                  value={formik.values.status}
                  onChange={(value) => formik.setFieldValue("status", value)}
                ></RadioChips>
                <Typography gutterBottom variant="h6" component="h3">
                  Ownership
                </Typography>
                <RadioChips
                  options={{
                    "I own this book": true,
                    "I don't own this book": false,
                  }}
                  value={formik.values.isOwned}
                  onChange={(value) => formik.setFieldValue("isOwned", value)}
                ></RadioChips>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Typography gutterBottom variant="h6" component="h3">
                  Rating
                </Typography>
                <Box mb={1}>
                  <Rating
                    id="rating"
                    name="rating"
                    precision={0.5}
                    value={formik.values.rating}
                    onChange={(event, value) => {
                      formik.setFieldValue("rating", value);
                    }}
                  />
                </Box>
                <Typography gutterBottom variant="h6" component="h3">
                  Review
                </Typography>
                <TextField
                  id="review"
                  name="review"
                  variant="outlined"
                  fullWidth
                  multiline
                  minRows={5}
                  value={formik.values.review}
                  onChange={formik.handleChange}
                ></TextField>
              </Grid>
            </Grid>
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};
