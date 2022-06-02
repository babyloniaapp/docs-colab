import React from "react";
import Alert from "@mui/material/Alert";

const alert = ({ children, severity, icon, action }) => (
  <Alert severity={severity} icon={icon} action={action}>
    {children}
  </Alert>
);

export default alert;
