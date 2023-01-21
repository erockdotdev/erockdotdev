import MySpaceCard from "@/components/layouts/MySpaceCard";
import About from "./About";
import Associations from "./Associations";
import Contact from "./Contact";
import Contributions from "./Contributions";
import Education from "./Education";
import Experience from "./Experience";
import Overview from "./Overview";
import Social from "./Social";
import Projects from "./Projects";
import MediaPlayer from "./MediaPlayer";
const AudioPlayer = dynamic(() => import("./AudioPlayer"), {
  // loading: () => "Loading...",
  ssr: false,
});
import dynamic from "next/dynamic";

const marshallInfoCards = (props: any) => {
  const { id, data } = props;
  let infoCard = null;

  //@todo refactor other cards to use {...data} instead of named props
  switch (data.type) {
    case "overview":
      infoCard = <Overview overview={data} />;
      break;
    case "social":
      infoCard = <Social social={data} />;
      break;
    case "contact":
      infoCard = <Contact contact={data} />;
      break;
    case "about":
      infoCard = <About about={data} />;
      break;
    case "education":
      infoCard = <Education education={data} />;
      break;
    case "associations":
      infoCard = <Associations associations={data} />;
      break;
    case "experience":
      infoCard = <Experience {...props} />;
      break;
    case "contributions":
      infoCard = <Contributions {...props} />;
      break;
    case "projects":
      infoCard = <Projects {...props} />;
      break;
    case "audio-player":
      infoCard = <AudioPlayer {...props} />;
      break;
    default:
      infoCard = <div />; // how to handle no op?
  }
  return <MySpaceCard title={data.title}>{infoCard}</MySpaceCard>;
};
// is calling this 'marshalling' correct
export default function InfoCard(data: any) {
  return marshallInfoCards(data);
}
