import React from "react";
import BasicInfo from "./BasicInfo";
import Characteristics from "./Characteristics";
import { CoffeeResponse } from "@/app/types";
import Container from "@/app/components/Container";

const fetchCoffee = async (id: string): Promise<CoffeeResponse> => {
  const res = await fetch(`http://localhost:3000/api/coffee/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await res.json();
  return data.data[0];
};

const page = async ({ params }: { params: { id: string } }) => {
  const coffeeInfo = await fetchCoffee(params.id);
  console.log(coffeeInfo);

  return (
    <>
      <Container>
        <BasicInfo {...coffeeInfo} />
        <Characteristics {...coffeeInfo} />
      </Container>
    </>
  );
};

export default page;
