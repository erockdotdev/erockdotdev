import styles from "./styles.module.scss";

interface IInfoCardList {
  children: React.ReactNode;
}

const InfoCardList: React.FC<IInfoCardList> = ({ children }) => {
  return <div className={styles["info-card-list"]}>{children}</div>;
};

export default InfoCardList;
