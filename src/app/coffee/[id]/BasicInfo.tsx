import Container from "@/app/components/Container";
import Label from "@/app/components/atoms/Label";
import LabelText from "@/app/components/atoms/LabelText";
import Title from "@/app/components/atoms/Title";
import { CoffeeResponse } from "@/app/types";
import Image from "next/image";
import React from "react";

type BasicInfoProps = CoffeeResponse;
const BasicInfo = (props: BasicInfoProps) => {
  const { brand, country_id, region_id, shop_id, picture } = props;
  return (
    <>
      <Title>{brand}</Title>
      <LabelText>
        <Label tag>産地</Label>
        <p>
          {country_id?.name}　{region_id?.name}
        </p>
      </LabelText>

      <LabelText>
        <Label tag>購入店舗</Label>
        <p>{shop_id?.name}</p>
      </LabelText>

      {picture && picture.length > 0 && (
        <div style={{ position: "relative", width: "300px", height: "300px" }}>
          <Image src={picture[0]} alt={""} layout="fill"></Image>
        </div>
      )}
    </>
  );
};

export default BasicInfo;
