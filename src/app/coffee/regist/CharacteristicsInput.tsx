import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Typography } from "@mui/material";
import React from "react";

const CharacteristicsInput = () => {
  return (
    <>
      <h3>特徴</h3>
      <input></input>
      <Typography>焙煎</Typography>
      <Rating size="large" />
      <Typography>酸味</Typography>
      <Rating size="large" />
      <Typography>コク</Typography>
      <Rating size="large" />
      <Typography>好み</Typography>
      <Rating
        size="large"
        icon={<Favorite fontSize="inherit" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        sx={{ color: "#ab361c" }}
      />
      <p>感想</p>
      <input></input>
    </>
  );
};

export default CharacteristicsInput;
