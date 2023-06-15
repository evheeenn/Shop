import React from "react";
import { useState } from "react";

export default function Counter({ value }) {

  const styles = {
    main: {
      height: "35px",
      border: "1.7px solid #9e9e9e",
      borderRadius: "5px",
    },
  };
  
  return <input type="number" value={value} style={styles.main}/>;
}
