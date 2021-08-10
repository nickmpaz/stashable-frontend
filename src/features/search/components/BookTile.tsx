import React, { FC, useState } from "react";
import { Book } from "../../../app/definitions/types";
import {
  Card,
  CardMedia,
  makeStyles,
  createStyles,
  Theme,
  CardContent,
  Typography,
} from "@material-ui/core";

export interface IBookTileProps {
  book: Book;
  onClick: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardMedia: {
      aspectRatio: "10/14",
    },
  })
);

export const BookTile: FC<IBookTileProps> = ({ book, onClick }) => {
  const classes = useStyles();
  const [raised, setRaised] = useState(false);
  return (
    <Card
      raised={raised}
      onMouseEnter={() => setRaised(true)}
      onMouseLeave={() => setRaised(false)}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        src={book.thumbnail}
        title={book.title}
        classes={{ root: classes.cardMedia }}
      ></CardMedia>
      <CardContent>
        <Typography>{book.title}</Typography>
      </CardContent>
    </Card>
  );
};
