import React, { ReactNode } from "react";
import styles from "../../styles/label.module.css";

const Label = ({
  tag = false,
  children,
}: {
  tag?: boolean;
  children: ReactNode;
}) => {
  return <label className={tag ? styles.tag : styles.basic}>{children}</label>;
};

export default Label;
