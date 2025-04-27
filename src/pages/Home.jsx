import ProjectBlock from "../components/ProjectBlock";
import { useContext } from "react";
import { MyContext } from "../context/Context";

export default function Home() {
  const { projects, api } = useContext(MyContext);
  return (
    <section>
      <h2 className="homeTitle text-5xl font-bold mb-4">
        Welcome to My Projects
      </h2>
      {projects?.map((p) => {
        const mainImageUrl = p.mainImageUrl.includes("http")
          ? p.mainImageUrl
          : api + p.mainImageUrl;

        const download = api + `/projects/${p.id}/download`;
        return (
          <ProjectBlock
            key={p.id}
            description={p.description}
            name={p.name}
            image={mainImageUrl}
            link={`/project/${p.id}`}
            download={download}
            project={p}
          />
        );
      })}
    </section>
  );
}
