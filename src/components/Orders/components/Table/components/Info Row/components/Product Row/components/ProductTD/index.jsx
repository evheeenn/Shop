import React from "react";
import { Box } from "@mui/material";

export default function ProductTD({ width, justifyContent }) {
  const styles = {

    main: {
      width: width,
      height: "137px",
      padding: "0",
      alignItems: "center",
      display: "flex",
      justifyContent: justifyContent
    },

  };

  return <Box sx={styles.main}></Box>;
}
