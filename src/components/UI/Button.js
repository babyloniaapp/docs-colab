import React from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

const button = ({
  children,
  color,
  variant,
  fullWidth,
  style,
  disabled,
  onClick,
  className,
  startIcon,
  size,
  component,
}) => (
  <Button
    size={size}
    className={className}
    color={color}
    variant={variant}
    fullWidth={fullWidth}
    style={style}
    disabled={disabled}
    onClick={onClick}
    startIcon={startIcon}
    component={component}>
    {children}
  </Button>
);
export const Lbutton = ({
  children,
  color,
  variant,
  fullWidth,
  style,
  disabled,
  onClick,
  loading,
  component,
}) => (
  <LoadingButton
    color={color}
    variant={variant}
    fullWidth={fullWidth}
    style={style}
    disabled={disabled}
    loading={loading}
    onClick={onClick}
    component={component}>
    {children}
  </LoadingButton>
);
export default button;
