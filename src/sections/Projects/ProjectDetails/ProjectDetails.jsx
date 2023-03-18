import "./ProjectDetails.scss";

import closeIcon from "../../../images/icon-close.svg";

const ProjectDetails = ({ project, handleTogglePopup }) => {
  return (
    <>
      <div className="overlay" onClick={handleTogglePopup}></div>
      <div className="deets">
        <div className="title">
          <h1>{project.title}</h1>
          <button className="closeBtn" onClick={handleTogglePopup}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <div className="about">
          <p>{project.about}</p>
          <div className="stack">
            <h3>Tech Stack:</h3>
            <ul>
              {project.techStack.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
