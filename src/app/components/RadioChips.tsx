import { Box, Chip } from "@material-ui/core";
import React, { FC } from "react";

export interface RadioChipsProps<T> {
  options: { [key: string]: T };
  value: T | null;
  onChange: (value: T | null) => void;
}

export const RadioChips = <T extends unknown>({
  options,
  value,
  onChange,
}: RadioChipsProps<T>) => {
  return (
    <Box display="flex" mb={2}>
      {Object.keys(options).map((key) => {
        return (
          <Box mr={1}>
            <Chip
              label={key}
              color={options[key] === value ? "primary" : undefined}
              onClick={() =>
                onChange(value === options[key] ? null : options[key])
              }
            ></Chip>
          </Box>
        );
      })}
    </Box>
  );
};
