import MySpaceCard from "@/components/layouts/MySpaceCard";
import Image from "next/image";
import React from "react";

export default function Education({ education }: any) {
  return (
    <>
      {education.institutions.map((school: any, index: any) => {
        return (
          <p key={index}>
            <Image
              src={school.icon.src}
              alt={school.icon.src}
              width={48}
              height={48}
            />
            &nbsp; {school.name} • {school.year}
          </p>
        );
      })}
    </>
  );
}
