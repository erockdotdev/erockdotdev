import Image from "next/image";

export default function Associations({ associations }: any) {
  return (
    <>
      {associations.institutions.map((association: any, index: any) => {
        return (
          <p key={index}>
            <Image
              src={association.icon.src}
              alt={association.icon.src}
              width={48}
              height={48}
            />
            &nbsp; {association.name}
          </p>
        );
      })}
    </>
  );
}
