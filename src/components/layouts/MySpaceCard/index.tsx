import styles from "./styles.module.scss";

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
