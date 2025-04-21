import ProjectBlock from "../components/ProjectBlock";
import mrImage from "../../public/images/midiroutersample.png";

export default function Home() {
  return (
    <section>
      <h2 className="homeTitle text-5xl font-bold mb-4">
        Welcome to My Projects
      </h2>
      <ProjectBlock
        description={`Midi Router its a tool to help you route incoming midi notes to different outcoming notes. \n
        Why do you need this? Well ... have you ever tried to use a midi drum groove from one company with a different company's vst? Exactly, its a pain to route within most plugins. \n
        Here you have an easy way to do it without complex routing, just tell it what midi goes in and what do you want out.`}
        name="Midi Router"
        image={mrImage}
        link="/midirouter"
      />
    </section>
  );
}
