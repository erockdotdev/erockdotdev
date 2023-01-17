import React from "react";
import styles from "@/styles/myspace-card.module.css";

interface IMySpaceCard {
  title?: string;
  children?: React.ReactNode;
}

const MySpaceCard: React.FC<IMySpaceCard> = ({ title, children }) => {
  return (
    <div className={styles["myspace-card"]}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default MySpaceCard;
