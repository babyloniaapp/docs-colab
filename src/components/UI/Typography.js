import React from "react";
import Typography from "@mui/material/Typography";

const typography = ({
  variant,
  children,
  fontSize,
  fontWeight,
  color,
  align,
  onClick,
  className,
  marginTop,
  style,
  component,
}) => (
  <Typography
    style={style}
    className={className}
    color={color}
    variant={variant}
    component={component}
    align={align}
    sx={{ fontSize, fontWeight, marginTop }}
    onClick={onClick}>
    {children}
  </Typography>
);

export default typography;
