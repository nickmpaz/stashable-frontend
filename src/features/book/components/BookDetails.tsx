import React, { FC } from "react";
import { Book } from "../../../app/definitions/types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Theme,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core";

export interface IBookDetailsProps {
  book: Book;
  onAddToCollection: () => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bookDetailsCard: {
      height: "100%",
    },
    cardContent: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    bookDescription: {
      flexGrow: 1,
    },
  })
);
export const BookDetails: FC<IBookDetailsProps> = ({
  book,
  onAddToCollection,
}) => {
  const styles = useStyles();
  return (
    <Container fixed maxWidth="md">
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Card>
            <CardMedia
              component="img"
              src={book.thumbnail}
              title={book.title}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item md={8} xs={12}>
          <Card className={styles.bookDetailsCard}>
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom variant="h4" component="h2">
                {book.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                by {book.authors.map((author) => author.name).join(", ")}
              </Typography>
              {book.categories.length &&
                book.categories.map((category) => {
                  return (
                    <span>
                      <Chip label={category.name}></Chip>
                    </span>
                  );
                })}
              <Box py={2}>
                <Divider></Divider>
              </Box>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                className={styles.bookDescription}
              >
                {book.description}
              </Typography>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onAddToCollection()}
                >
                  Add to my collection
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
