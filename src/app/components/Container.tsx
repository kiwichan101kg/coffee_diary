import React, { ReactElement, ReactNode } from "react";
import styles from "../styles/container.module.css";

export const Container = ({
  large = false,
  children,
}: {
  large?: boolean;
  children: ReactNode;
}) => {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
};

export default Container;
