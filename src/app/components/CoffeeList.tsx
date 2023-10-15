import React from "react";
import { AllCoffeeResponse } from "../types";
import Link from "next/link";
const fetchAllCoffee = async (): Promise<AllCoffeeResponse[]> => {
  const res = await fetch("http://localhost:3000/api/coffee", {
    method: "GET",
    cache: "no-cache",
  });
  const data = await res.json();
  return data.data;
};

const CoffeeList = async () => {
  const coffeeArr = await fetchAllCoffee();
  console.log(coffeeArr);

  return (
    <section>
      <ul>
        {coffeeArr.map((v) => (
          <li key={v.id}>
            <Link href={`/coffee/${v.id}`}>
              <p>{v.brand}</p>
              <div>{v.country_id?.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CoffeeList;
