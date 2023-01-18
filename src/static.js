/**
 * @todos: reorganize static images
 */

const overview = {
  type: "overview",
  title: "erockdotdev",
  avatar: {
    src: "/profile/avatar.jpeg",
    alt: "avatar",
  },
  name: "Eric Sanchez",
  subtitle:
    '"Are you telling me you built a time machine... out of a DeLorean"',
  location: "Asheville, NC",
  nav: [
    { label: "Experience", url: "#experience" },
    { label: "Contributions", url: "#contributions" },
    { label: "Projects", url: "#projects" },
  ],
};

const social = {
  type: "social",
  title: "Social",
  socialLinks: [
    {
      name: "instagram",
      link: {
        label: "@erockdanger",
        url: "https://instagram.com/erockdanger",
      },
      icon: {
        src: "/icons/social/insta.png",
        alt: "instagram logo",
      },
    },
    {
      name: "Linkedin",
      link: {
        label: "Eric Sanchez",
        url: "https://www.linkedin.com/in/ericsanchez87/",
      },
      icon: {
        src: "/icons/social/linkedin.png",
        alt: "Linkedin logo",
      },
    },
    {
      name: "github",
      link: {
        label: "erockdotdev",
        url: "https://github.com/erockdotdev",
      },
      icon: {
        src: "/icons/social/gh.png",
        alt: "LinkedInlogo",
      },
    },
  ],
};

const contact = {
  type: "contact",
  title: "Contact",
  email: "eric@erock.dev",
};

const about = {
  type: "about",
  title: "About",
  about:
    "Software Engineer with 5+ years experience specializing in developing and launching Web Applications using modern technologies like React, Next.js and Node. I have extensive experience working with large brands and consumer facing, revenue driving products with 1M+ monthly visits.",
  skills: ["JavaScript", "Node", "TypeScript", "HTML", "CSS"],
  resume: {
    src: "/pdfs/eric-sanchez-resume.pdf",
  },
};

const education = {
  type: "education",
  title: "Education",
  institutions: [
    {
      name: "General Assembly",
      year: "2017",
      text: "Web Development Immersive Certificate",
      icon: {
        src: "/icons/experience/ga.jpeg",
        alt: "General Assembly Logo",
      },
    },
    {
      name: "Brooklyn College",
      year: "2011",
      text: "Bachelor's of Arts in Philosophy",
      icon: {
        src: "/icons/experience/bc.jpeg",
        alt: "Brooklyn College Logo",
      },
    },
  ],
};
// add Modern Occult Apparel, Blue Bat Society, Imbueme
const associations = {
  type: "associations",
  title: "Associations",
  institutions: [
    {
      name: "Mariners 67 F.&A.M.",
      icon: {
        src: "/icons/associations/mariners.png",
        alt: "Mariners 67",
      },
    },
    {
      name: "General Assembly Alumni",
      icon: {
        src: "/icons/experience/ga.jpeg",
        alt: "General Assembly",
      },
    },
  ],
};
const experience = {
  type: "experience",
  title: "Experience",
  roles: [
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
  ],
};

const contributions = {
  type: "contributions",
  title: "Contributions",
  projects: [
    {
      title: "DeLorean Next Generation",
      description: "Social Media Manager",
      year: "2022-Current",
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
      year: "2022-Current",
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
      title: "Infinite Shapes Traveling Colors",
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
  ],
};

const projects = {
  type: "projects",
  title: "Projects",
  projects: [
    {
      title: "Imbueme",
      description: "Co-founder",
      year: "2022",
      client: {
        name: "",
        website: "https://modernoccultapparel.com",
        icon: {
          src: "/icons/projects/imbueme-logo.png",
          alt: "Modern Occult Apparel Logo",
        },
      },
      link: {
        url: "https://link/to/content",
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
  ],
};
export const data = {
  overview,
  social,
  contact,
  about,
  education,
  associations,
  experience,
  contributions,
  projects,
};
