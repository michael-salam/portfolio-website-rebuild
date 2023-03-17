import { useState } from "react";

import "./Project.scss";

import ProjectDetails from "../ProjectDetails/ProjectDetails";

import githubIcon from "../../../images/icon-github.svg";
import externalLinkIcon from "../../../images/icon-external-link.svg";
import verticalMenuIcon from "../../../images/icon-menu-vertical.svg";

const Project = ({ project, projects }) => {
  // const [projectId, setProjectId] = useState();
  const [isRenderingDetails, setIsRenderingDetails] = useState(false);

  const handleTogglePopup = () => {
    setIsRenderingDetails((prev) => !prev);
    // setProjectId(project.id);
  };

  return (
    <>
      {isRenderingDetails && (
        <ProjectDetails
          project={project}
          projects={projects}
          handleTogglePopup={handleTogglePopup}
        />
      )}
      <div className="project">
        <div className="img-container">
          <div className={`img img-${project.img}`}></div>
        </div>

        <div className="text">
          <h3>{project.title}</h3>

          <div className="actions">
            <a
              href={project.gitHubUrl}
              target="_blank"
              rel="noreferrer"
              className="view-code"
            >
              <img src={githubIcon} alt="GitHub" />
              <p>View code on GitHub</p>
            </a>

            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="open-site"
            >
              <img src={externalLinkIcon} alt="Open" />
              <p>Open Live Site</p>
            </a>

            <button className="more-details" onClick={handleTogglePopup}>
              <img
                src={verticalMenuIcon}
                alt="More details"
                title="More details"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
