import "./ProjectDetails.scss";

import closeIcon from "../../../images/icon-close.svg";

const ProjectDetails = ({ project, projects, handleTogglePopup }) => {
  const clickedProject = projects.filter((item) => item.id === project.id)[0];
  return (
    <>
      <div className="overlay" onClick={handleTogglePopup}></div>
      <div className="deets">
        <button className="closeBtn" onClick={handleTogglePopup}>
          <img src={closeIcon} alt="Close" />
        </button>
        <h1>{clickedProject.title}</h1>
        <p>{clickedProject.about}</p>
      </div>
    </>
  );
};

export default ProjectDetails;
