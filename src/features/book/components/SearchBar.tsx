import React, { ChangeEvent, FC, KeyboardEvent } from "react";
import { Container, TextField } from "@material-ui/core";

export interface ISearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

export const SearchBar: FC<ISearchBarProps> = ({
  onKeyDown,
  onChange,
  value,
}) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    ></TextField>
  );
};
