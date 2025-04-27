import { Link } from "react-router-dom";
import DownloadCard from "./DownloadCard";

export default function ProjectBlock({
  name,
  link,
  description,
  image,
  download,
  project
}) {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = download; // tu variable de descarga
    // link.download = ""; // podés especificar el nombre del archivo si querés
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="project_container">
      <div className="project_name">
        <Link className="project_link" to={link}>
          {name}
        </Link>
      </div>

      <div className="project_des_img">
        <div className="project_description">
          <Link className="project_link mb-3" to={link}>
            {description}
          </Link>
          {/* <div className="project_download">
            <div className="project_download-button" onClick={handleDownload}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="project_download_file_icon h-5 w-5 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 2a2 2 0 00-2 2v16c0 1.103.897 2 2 2h12a2 2 0 002-2V8l-6-6H6zm7 1.414L18.586 9H13V3.414zM9 7h2v2H9V7zm0 3h2v2H9v-2zm0 3h2v2H9v-2zm0 3h2v2H9v-2z" />
              </svg>
              <p>Download</p>
            </div>
          </div> */}
      <DownloadCard project={project} download={download} long />
        </div>

        <Link className="project_link" to={link}>
          <img className="project_image" src={image} />
        </Link>
      </div>
    </div>
  );
}
