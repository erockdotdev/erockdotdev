import Image from "next/image";
import styles from "./styles.module.scss";
export default function Education({ education }: any) {
  return (
    <section>
      {education.institutions.map((school: any, index: any) => {
        return (
          <span key={`school-${index}`} className={styles.school}>
            <Image
              src={school.icon.src}
              alt={school.icon.src}
              width={48}
              height={48}
            />
            &nbsp; {school.name} • {school.year}
          </span>
        );
      })}
    </section>
  );
}
