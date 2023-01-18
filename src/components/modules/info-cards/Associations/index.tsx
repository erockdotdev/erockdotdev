import Image from "next/image";
import styles from "./styles.module.scss";

export default function Associations({ associations }: any) {
  return (
    <section>
      {associations.institutions.map((association: any, index: any) => {
        return (
          <span key={index} className={styles.association}>
            <Image
              src={association.icon.src}
              alt={association.icon.src}
              width={48}
              height={48}
            />
            &nbsp; {association.name}
          </span>
        );
      })}
    </section>
  );
}
