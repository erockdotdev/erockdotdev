import Image from "next/image";
import Link from "next/link";

export default function Overview({ overview }: any) {
  return (
    <section>
      <div>
        <Image
          src={overview.avatar.src}
          alt={overview.avatar.alt}
          width={100}
          height={100}
        />
        <p>{overview.name}</p>
        <p>{overview.subtitle}</p>
        <p>{overview.location}</p>
      </div>
      <nav>
        {overview.nav.map((link: any, index: string) => {
          return (
            <Link key={`nav-link-${index}`} href={link.url}>
              {link.label} &nbsp;
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
