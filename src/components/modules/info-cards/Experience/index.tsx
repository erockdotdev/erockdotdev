import Image from "next/image";
import React from "react";

import styles from "./styles.module.scss";

export default function Experience(props: any) {
  const { id, data } = props;
  return (
    <section id={id}>
      {data.roles.map((role: any, index: any) => {
        return (
          <div key={`role-${index}`} className={styles.role}>
            <div className={styles.company}>
              <div className={styles["company-logo"]}>
                <Image
                  src={role.company.icon.src}
                  alt={role.company.icon.alt}
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles["company-info"]}>
                <h4>{role.position}</h4>
                <h5>{role.company.name}</h5>
                <span>
                  {role.startDate} – {role.endDate} • {role.location}
                </span>
              </div>
            </div>
            <p>{role.description}</p>
          </div>
        );
      })}
    </section>
  );
}
