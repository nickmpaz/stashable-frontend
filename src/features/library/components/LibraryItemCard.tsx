import React, { ChangeEvent, FC } from "react";
import {
  LibraryItemStatus,
  LibraryItemUpdate,
} from "../../../app/definitions/types";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { FormikProps } from "formik";
import { RadioChips } from "../../../app/components/RadioChips";

export interface ILibraryItemProps {
  formik: FormikProps<LibraryItemUpdate>;
  statusOptions: { [key: string]: LibraryItemStatus };
  statusOnChange: (value: unknown) => void;
  isOwnedOptions: { [key: string]: boolean };
  isOwnedOnChange: (value: unknown) => void;
  ratingOnChange: (event: ChangeEvent<{}>, value: number | null) => void;
}

export const LibraryItemCard: FC<ILibraryItemProps> = ({
  formik,
  statusOptions,
  statusOnChange,
  isOwnedOptions,
  isOwnedOnChange,
  ratingOnChange,
}) => {
  return (
    <Box mt={3}>
      <Card>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <Typography gutterBottom variant="h6" component="h3">
                  Status
                </Typography>
                <RadioChips
                  options={statusOptions}
                  value={formik.values.status}
                  onChange={statusOnChange}
                ></RadioChips>
                <Typography gutterBottom variant="h6" component="h3">
                  Ownership
                </Typography>
                <RadioChips
                  options={isOwnedOptions}
                  value={formik.values.isOwned}
                  onChange={isOwnedOnChange}
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
                    onChange={ratingOnChange}
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
