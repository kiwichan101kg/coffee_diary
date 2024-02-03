import React from "react";
import { AllCoffeeResponse } from "../types";
import Link from "next/link";
import CoffeeListPart from "./CoffeeListPart";
import styles from "../styles/coffee-list.module.css";
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
  return (
    <section>
      <ul className={styles.gap}>
        {coffeeArr &&
          coffeeArr.length !== 0 &&
          coffeeArr.map((v) => <CoffeeListPart {...v} key={v.id} />)}
      </ul>
    </section>
  );
};

export default CoffeeList;
