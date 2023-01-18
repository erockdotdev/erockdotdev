import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Overview({ overview }: any) {
  return (
    <section className={styles.overview}>
      <div className={styles.profile}>
        <div className={styles["user-avatar"]}>
          <Image
            src={overview.avatar.src}
            alt={overview.avatar.alt}
            width={150}
            height={150}
          />
        </div>
        <div className={styles["user-info"]}>
          <p>{overview.name}</p>
          <p>
            <i>{overview.subtitle}</i>
          </p>
          <p>{overview.location}</p>
        </div>
      </div>
      <nav>
        {overview.nav.map((link: any, index: number) => {
          const isLast = overview.nav.length - 1 === index;
          return (
            <Link key={`nav-link-${index}`} href={link.url}>
              <a>
                {link.label} {!isLast && ` | `}
              </a>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
