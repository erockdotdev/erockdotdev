import MySpaceCard from "@/components/layouts/MySpaceCard";
import Image from "next/image";

export default function Social({ social }: any) {
  return (
    <>
      {social.socialLinks.map((channel: any, index: any) => {
        return (
          <a key={`social-channel-${index}`} href={channel.link?.url}>
            <Image
              src={channel.icon.src}
              alt={channel.icon.alt}
              width={25}
              height={25}
            />{" "}
          </a>
        );
      })}
    </>
  );
}
