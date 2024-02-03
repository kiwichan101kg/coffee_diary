import React, { ReactNode } from "react";
import styles from "../../styles/title.module.css";

const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className={styles.basic}>{children}</h1>;
};

export default Title;
