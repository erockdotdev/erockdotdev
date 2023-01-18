import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Social({ social }: any) {
  return (
    <section>
      {social.socialLinks.map((channel: any, index: any) => {
        return (
          <Link key={`social-channel-${index}`} href={channel.link.url}>
            <a className={styles.social}>
              <div className={styles["social-icon"]}>
                <Image
                  src={channel.icon.src}
                  alt={channel.icon.alt}
                  width={25}
                  height={25}
                />
              </div>
              <span>{channel.link.label}</span>
            </a>
          </Link>
        );
      })}
    </section>
  );
}
