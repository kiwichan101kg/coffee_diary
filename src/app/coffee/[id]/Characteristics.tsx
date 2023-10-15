import { CoffeeResponse } from "@/app/types";
import { Typography, Rating } from "@mui/material";
import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

type CharacteristicsProps = CoffeeResponse;
const Characteristics = (props: CharacteristicsProps) => {
  const { characteristic, impression, roasting, acidity, rich, favorite } =
    props;
  return (
    <>
      <h3>{`「${characteristic}」`}</h3>
      <Typography>焙煎</Typography>
      <Rating readOnly size="large" value={roasting} />
      <Typography>酸味</Typography>
      <Rating readOnly size="large" value={acidity} />
      <Typography>コク</Typography>
      <Rating readOnly size="large" value={rich} />
      <Typography>好み</Typography>
      <Rating
        readOnly
        size="large"
        value={favorite}
        icon={<Favorite fontSize="inherit" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        sx={{ color: "#ab361c" }}
      />
      <p>{impression}</p>
    </>
  );
};

export default Characteristics;
