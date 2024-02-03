import { CoffeeResponse } from "@/app/types";
import { Typography, Rating } from "@mui/material";
import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Label from "@/app/components/atoms/Label";
import LabelText from "@/app/components/atoms/LabelText";

type CharacteristicsProps = CoffeeResponse;
const Characteristics = (props: CharacteristicsProps) => {
  const { characteristic, impression, roasting, acidity, rich, favorite } =
    props;
  return (
    <>
      <Label tag>特徴</Label>
      <h3>{`「${characteristic}」`}</h3>

      <LabelText>
        <Label>焙煎</Label>
        <Rating readOnly size="large" value={roasting} />
      </LabelText>
      <LabelText>
        <Label>酸味</Label>
        <Rating readOnly size="large" value={acidity} />
      </LabelText>
      <LabelText>
        <Label>コク</Label>
        <Rating readOnly size="large" value={rich} />
      </LabelText>
      <LabelText>
        <Label>好み</Label>
        <Rating
          readOnly
          size="large"
          value={favorite}
          icon={<Favorite fontSize="inherit" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
          sx={{ color: "#ab361c" }}
        />
      </LabelText>

      <Label tag>感想</Label>
      <p>{impression}</p>
    </>
  );
};

export default Characteristics;
