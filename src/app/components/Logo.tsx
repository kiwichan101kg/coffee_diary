import Link from "next/link";
import React from "react";
import styles from "../styles/logo.module.css";

const Logo = ({ boxOn = false }: { boxOn?: boolean }) => {
  return (
    <Link href={"/"} className={boxOn ? styles.box : styles.basic}>
      Coffee Diary
    </Link>
  );
};

export default Logo;
