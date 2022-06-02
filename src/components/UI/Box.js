import React from "react";
import Box from "@mui/material/Box";

export default function box({ children, sx }) {
  return <Box sx={sx}>{children}</Box>;
}
