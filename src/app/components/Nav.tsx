import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
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
