import SKILLS_ICONS from "../../data/skills_icons";
import "../../styles/projects/projects.css";

function Projects({ projects }) {
  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function Project({ project }) {
  return (
    <a
      href={project.url || null}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      <div className="project">
        <div className="project-header">
          <h3 className="project-title">{project.name}</h3>
          <i className="devicon-github-plain" />
        </div>
        <p className="project-description">{project.description}</p>
        <SkillList skills={project.skills} />
      </div>
    </a>
  );
}

function SkillList({ skills }) {
  return (
    <>
      {skills.length > 0 && (
        <div className="skill-icons">
          {skills.map((skill) => (
            <SkillIcon key={skill} skill={skill} />
          ))}
        </div>
      )}
    </>
  );
}

function SkillIcon({ skill }) {
  return (
    <div className="skill-icon">
      <i className={`${SKILLS_ICONS[skill]} colored `}></i>
    </div>
  );
}

export default Projects;
