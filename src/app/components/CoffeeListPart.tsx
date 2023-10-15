import React from "react";
import { AllCoffeeResponse } from "../types";
import Link from "next/link";
import styles from "../styles/coffee-list-part.module.css";

type CoffeeListPartProps = AllCoffeeResponse;
const CoffeeListPart = ({ id, brand, country_id }: CoffeeListPartProps) => {
  return (
    <>
      <li key={id}>
        <Link href={`/coffee/${id}`} className={styles.whiteContainer}>
          <h3>{brand}</h3>
          <div>{country_id?.name}</div>
        </Link>
      </li>
    </>
  );
};

export default CoffeeListPart;
