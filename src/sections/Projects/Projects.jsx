import Project from "./Project/Project";
import "./Projects.scss";

import { projectsArray as projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__heading">
        <h2 className="main-heading">My Projects</h2>
        <h3 className="sub-heading">Swipe/scroll to see more</h3>
      </div>

      <div className="projects__container">
        {projects.map((project) => (
          <Project key={project.id} project={project} projects={projects} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
