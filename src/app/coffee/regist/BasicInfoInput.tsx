import { TextField } from "@mui/material";
import React from "react";

const BasicInfoInput = () => {
  return (
    <>
      <h2>銘柄</h2>
      <TextField sx={"background-color:red;"}></TextField>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
      <h3>産地</h3>
      <input></input>
      <input></input>
      <h3>購入店舗</h3>
      <input></input>
    </>
  );
};

export default BasicInfoInput;
