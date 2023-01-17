export default function About({ about }: any) {
  return (
    <>
      <p>{about.aboutMe}</p>
      <br />
      <h3>Skills:</h3>
      {about.skills.map((skill: any, index: any) => {
        return <span key={`skill-${index}`}>{skill}&nbsp;</span>;
      })}
      <h3>Resume:</h3>
      <a href={about.resume.src} download="Eric Sanchez Resume">
        download &nbsp;
      </a>
      <a href={about.resume.src} rel="noreferrer" target="_blank">
        view
      </a>
    </>
  );
}
