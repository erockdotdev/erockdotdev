import React from "react";
import styles from "./styles.module.scss";

interface IMySpacePage {
  children: React.ReactNode;
}

const MySpacePage: React.FC<IMySpacePage> = ({ children }) => {
  return <div className={styles["my-space-page"]}>{children}</div>;
};

export default MySpacePage;
