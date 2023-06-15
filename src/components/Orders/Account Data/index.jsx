import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Button from "../../Login/components/Button";
import { useSelector } from "react-redux";

export default function AccountData() {

  const user = useSelector((store) => store.user)
  const styles = {
    wrapper: {
      width: "27%",
      marginTop: "73px",
      marginLeft: "27px",
    },

    h1: {
      fontSize: "23px",
      color: "#66ab59",
      fontWeight: 700,
    },

    sum: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "27px",
    },

    buttonWrapper: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      marginTop: "23px",
    },

    button: {
      width: "55%",
      height: '53px',
      marginTop: '3px',
      borderRadius: "25px",
      fontSize: '18px',
      fontWeight: 700,
      color: '#9d4946',
      background: "#e6ccd0",
      border: 'none',
    },
  };
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h1" sx={styles.h1}>
        My info
      </Typography>
      <Box sx={styles.sum}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Name:
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {user.name}
        </Typography>
      </Box>
      <Box sx={styles.sum}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Email:
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {user.email}
        </Typography>
      </Box>
      <Box sx={styles.buttonWrapper}>
        <Button text={"Delete account"} style={styles.button} />
      </Box>
    </Box>
  );
}
