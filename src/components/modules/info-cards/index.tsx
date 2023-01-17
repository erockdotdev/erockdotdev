import MySpaceCard from "@/components/layouts/MySpaceCard";
import About from "./About";
import Associations from "./Associations";
import Contact from "./Contact";
import Education from "./Education";
import Overview from "./Overview";
import Social from "./Social";

const marshallInfoCards = (data: any) => {
  let infoCard = null;
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
    default:
      infoCard = <div />; // how to handle no op?
  }
  return <MySpaceCard title={data.title}>{infoCard}</MySpaceCard>;
};
// is calling this 'marshalling' correct
export default function InfoCard({ data }: any) {
  return marshallInfoCards(data);
}
