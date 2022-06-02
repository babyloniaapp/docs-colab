import React from "react";
import TextField from "@mui/material/TextField";

const textField = ({
  id,
  label,
  variant,
  fullWidth,
  InputProps,
  type,
  size,
  color,
  error,
  onChange,
  name,
  onClick,
  onFocus,
  value,
  defaultValue,
  inputProps,
  sx,
  required,
  helperText,
  style,
}) => (
  <TextField
    style={style}
    helperText={helperText}
    inputProps={inputProps}
    sx={sx}
    error={error}
    id={id}
    label={label}
    variant={variant}
    fullWidth={fullWidth}
    required={required}
    type={type}
    color={color}
    InputProps={InputProps}
    size={size}
    onChange={onChange}
    onClick={onClick}
    name={name}
    onFocus={onFocus}
    value={value}
    defaultValue={defaultValue}
  />
);

export default textField;
