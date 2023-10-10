import Link from "next/link";
import React from "react";
import styles from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href={"/coffee/regist"}>Post</Link>
        </li>
        <li>
          <Link href={"/coffee/regist"}>Login</Link>
        </li>
        <li>
          <Link href={"/coffee/regist"}>coffee Info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
