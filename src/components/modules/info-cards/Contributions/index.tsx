import Image from "next/image";
import styles from "./styles.module.scss";

export default function Contributions(props: any) {
  const { data, id } = props;
  return (
    <section id={id}>
      {data.projects.map((project: any, index: number) => {
        return (
          <div key={`contribution-${index}`} className={styles.contribution}>
            <div className={styles.client}>
              <div className={styles["client-logo"]}>
                <Image
                  src={project.client.icon.src}
                  alt={project.client.icon.alt}
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles["client-info"]}>
                <h4>{project.title}</h4>
                <h5>
                  {project.client.name} | {project.year}
                </h5>
                <h5></h5>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
