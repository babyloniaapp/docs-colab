import React from "react";
import Avatar from "@mui/material/Avatar";

const ImageAvatars = ({ src, alt, sx }) => {
  return <Avatar alt={alt} src={src} sx={sx} />;
};

export default ImageAvatars;
