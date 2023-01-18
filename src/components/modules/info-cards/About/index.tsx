// import styles from "./styles/module.scss";

export default function About({ about }: any) {
  return (
    <section>
      <p>{about.about}</p>
      <h3>Skills:</h3>
      <p>
        {about.skills.map((skill: any, index: any) => {
          return <span key={`skill-${index}`}>{skill}&nbsp;</span>;
        })}
      </p>
      <h3>Resume:</h3>
      <a href={about.resume.src} download="Eric Sanchez Resume">
        download
      </a>
      {` | `}
      <a href={about.resume.src} rel="noreferrer" target="_blank">
        view
      </a>
    </section>
  );
}
