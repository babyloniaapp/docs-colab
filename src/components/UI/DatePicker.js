import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "./Typography";

export default function datePicker({
  label,
  fullWidth,
  size,
  onChange,
  value,
  className,
  helperText,
  color,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="dd/MM/yyyy"
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            color={color}
            helperText={
              <Typography component={"span"} fontSize={12} color="error">
                {helperText}
              </Typography>
            }
            {...params}
            fullWidth={fullWidth}
            size={size}
            className={className}
          />
        )}
      />
    </LocalizationProvider>
  );
}
