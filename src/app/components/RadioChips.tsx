import { Box, Chip } from "@material-ui/core";
import React, { FC } from "react";

export interface RadioChipsProps {
  options: { [key: string]: unknown };
  value: unknown;
  onChange: (value: unknown) => void;
}

export const RadioChips: FC<RadioChipsProps> = ({
  options,
  value,
  onChange,
}) => {
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
