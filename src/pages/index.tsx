import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import styles from "@/styles/Home.module.css";
import MySpaceCard from "@/components/layouts/MySpaceCard";
import InfoCard from "@/components/modules/info-cards";

import { data } from "../static";

/**
 * Need 'experience' query param to hide and show cards, change about hide media player and comments
 *
 * need experience route to scroll to experience
 * need resume route to download resume
 */

const experience = [
  {
    company: {
      name: "Even Financial",
      url: "https://link/to/company",
      icon: {
        src: "/icons/experience/even-icon.jpeg",
        alt: "Even Financial",
      },
    },
    position: "Software Engineer",
    location: "Remote",
    startDate: "Aug 2021",
    endDate: "Oct 2022",
    description:
      "Core contributor to Even's financial service search platform.",
    skills: [
      "TypeScript",
      "React",
      "Redux",
      "Styled Components",
      "Jest",
      "React Testing Library",
      "OpenAPI",
    ],
  },
  {
    company: {
      name: "Equinox",
      website: "https://link/to/company",
      icon: {
        src: "/icons/experience/eqx-icon.jpeg",
        alt: "Equinox",
      },
    },
    position: "Software Engineer II",
    startDate: "Aug 2021",
    endDate: "Oct 2022",
    location: "NYC",
    description:
      "Responsible for planning, developing and releasing products & features related to Equinox’s broadest reaching channels as well as premium offerings.",
    skills: ["React", "Redux", "Contentful", "Shopify", "SCSS", "Bootstrap"],
  },
  {
    company: {
      name: "Dom & Tom",
      website: "https://domandtom.com",
      icon: {
        src: "/icons/experience/dt-icon.jpeg",
        alt: "Dom & Tom",
      },
    },
    position: "Web Developer",
    startDate: "Sep 2017",
    endDate: "Apr 2019",
    location: "NYC",
    description:
      "Frontend developer working on some Dom and Tom's top clients like Turner Broadcasting and Good Housekeeping – turning UI mockups into a robust, responsive, cross-browser compatible user interfaces for web applications, micro sites and e-commerce platforms.",
    skills: [
      "Next.js",
      "TypeScript",
      "SEO",
      "Contentful",
      "HTML5 video",
      "Analytics",
      "AB testing",
      "Feature Flagging",
      "Shopify",
    ],
  },
];

const contributions = [
  {
    title: "DeLorean Next Generation",
    description: "Social Media Manager",
    year: "2022",
    client: {
      name: "Kat DeLorean",
      website: "https:dngmotors.com",
      icon: {
        src: "/icons/projects/dng-logo.png",
        alt: "DeLorean Next Generation Logo",
      },
    },
    link: {
      url: "https://link/to/content",
    },
  },
  {
    title: "DeLorean Legacy Project",
    description: "Social Media Contributor",
    year: "2022",
    client: {
      name: "Kat DeLorean",
      website: "https://deloreanlegacy.com",
      icon: {
        src: "/icons/associations/delorean-legacy.png",
        alt: "DeLorean Legacy Project Logo",
      },
    },
  },
  {
    title: "Modern Occult Apparel",
    description: "Product Designer",
    year: "2022",
    client: {
      name: "",
      website: "https://modernoccultapparel.com",
      icon: {
        src: "/icons/projects/moa-logo.png",
        alt: "Modern Occult Apparel Logo",
      },
    },
    link: {
      url: "https://link/to/content",
    },
  },
  {
    title: "Infinite Shapes | Traveling Colors",
    description: "Book Layout Design",
    year: "2020",
    client: {
      name: "Alberte Bernier",
      website: "",
      icon: {
        src: "/icons/projects/alberte-logo.jpg",
        alt: "Alberte Bernier Logo",
      },
    },
    link: {
      url: "https://www.amazon.com/Infinite-Shapes-Traveling-Alberte-Bernier/dp/B08QBXWHY3/ref=sr_1_1?crid=7UKDB91UD8AJ&keywords=alberte+bernier&qid=1673935944&sprefix=alberte+bernier%2Caps%2C126&sr=8-1",
    },
  },
  {
    title: "The Field Where I Died",
    description: "Denoise and Color Balance video",
    year: "2020",
    client: {
      name: "All These Animals",
      website: "",
      icon: {
        src: "/icons/projects/ata-logo.jpeg",
        alt: "All These Animals Logo",
      },
    },
    link: {
      url: "https://www.youtube.com/watch?v=rpLqMWh4-1Y",
    },
  },
];

export default function Home(props: any) {
  const { overview, social, contact, about, education, associations } = props;

  return (
    <>
      <Head>
        <title>erockdotdev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.column}>
          <InfoCard data={overview} />
          <InfoCard data={social} />
          <InfoCard data={contact} />
          <InfoCard data={about} />
          <InfoCard data={education} />
          <InfoCard data={associations} />
        </div>
        <div className={styles.column}>
          <MySpaceCard title="MediaPlayer"></MySpaceCard>
          <MySpaceCard title="Events"></MySpaceCard>
          <MySpaceCard title="Posts">
            <p>Pined</p>
            <p>Recent</p>
            <p>See More</p>
          </MySpaceCard>
          <MySpaceCard title="Experience">
            {experience.map((role, index) => {
              return (
                <div style={{ padding: "10px" }} key={index + " role"}>
                  <Image
                    src={role.company.icon.src}
                    alt={role.company.icon.alt}
                    width={100}
                    height={100}
                  />
                  &nbsp;
                  <h4>{role.position}</h4>
                  <h5>{role.company.name}</h5>
                  <h5>
                    {role.startDate} – {role.endDate} • {role.location}
                  </h5>
                  <p style={{ paddingTop: "10px" }}>{role.description}</p>
                </div>
              );
            })}
          </MySpaceCard>
          <MySpaceCard title="Contributions">
            {contributions.map((contribution, index) => {
              return (
                <div style={{ padding: "10px" }} key={index + " role"}>
                  <Image
                    src={contribution.client.icon.src}
                    alt={contribution.client.icon.alt}
                    width={100}
                    height={100}
                  />
                  &nbsp;
                  <h4>
                    {contribution.title} • {contribution.year}
                  </h4>
                  <h5>{contribution.client.name}</h5>
                  <p style={{ paddingTop: "10px" }}>
                    {contribution.description}
                  </p>
                </div>
              );
            })}
          </MySpaceCard>
          <MySpaceCard title="Friends"></MySpaceCard>
          <MySpaceCard title="Comments"></MySpaceCard>
        </div>
      </main>
      <footer>PUNCH THE MONKEY</footer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      overview: data.overview,
      social: data.social,
      contact: data.contact,
      about: data.about,
      education: data.education,
      associations: data.associations,
    },
  };
};
