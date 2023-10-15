import Container from "@/app/components/Container";
import { CoffeeResponse } from "@/app/types";
import Image from "next/image";
import React from "react";

type BasicInfoProps = CoffeeResponse;
const BasicInfo = (props: BasicInfoProps) => {
  const { brand, country_id, region_id, shop_id, picture } = props;
  return (
    <>
      <h1>{brand}</h1>
      <h3>産地</h3>
      <p>{country_id?.name}</p>
      <p>{region_id?.name}</p>
      <h3>購入店舗</h3>
      <p>{shop_id?.name}</p>

      {picture && picture.length > 0 && (
        <div style={{ position: "relative", width: "300px", height: "300px" }}>
          <Image
            src={picture[0]}
            alt={""}
            layout="fill"
            // width={500}
            // height={500}
          ></Image>
        </div>
      )}
    </>
  );
};

export default BasicInfo;
