import { Link } from "react-router-dom";

export default function ProjectBlock({ name, link, description, image }) {
  return (
    <div className="project_container">
      <div className="project_name">
        <Link className="project_link" to={link}>
          {name}
        </Link>
      </div>

      <div className="project_des_img">
        <div className="project_description">
          <Link className="project_link" to={link}>
            {description}
          </Link>
        </div>

        <Link className="project_link" to={link}>
          <img className="project_image" src={image} />
        </Link>
      </div>
    </div>
  );
}
