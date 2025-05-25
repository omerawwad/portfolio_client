import SKILLS_ICONS from "../data/skills_icons";
import "../App.css";
import "../styles/intro.css";

import { TfiEmail } from "react-icons/tfi";

import { useState } from "react";

function Intro({ profile, links, skills, email }) {
  return (
    <div className="container">
      <div className="intro">
        <div className="into-name-bar">
          <h1>{profile.name}</h1>
          <LinkList links={links} email={email} />
        </div>
        <h2>{profile.title}</h2>
        <span>{profile.description}</span>
      </div>
      <SkillList skills={skills} />
    </div>
  );
}

function LinkList({ links, email }) {
  return (
    <div className="links">
      <a
        key="email"
        href={email}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <TfiEmail className="link-icon" style={{ verticalAlign: "top" }} />
      </a>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <i className={`${link.icon} link-icon`}></i>
        </a>
      ))}
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <>
      <h2 className="section-title">What I Work With</h2>
      <div className="skills">
        {Object.keys(skills).map((category) => (
          <SkillCategory
            key={category}
            category={category}
            skills={skills[category]}
          />
        ))}
      </div>
    </>
  );
}

function SkillCategory({ category, skills }) {
  return (
    <div className="skill-category">
      <h3>{category}</h3>
      <div className="skill-icons">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ skill }) {
  const [isHovered, setIsHovered] = useState(false);
  // console.log(isHovered);
  return (
    <div
      className="skill-icon colored"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <i
        className={`${SKILLS_ICONS[skill.name]} ${isHovered ? "colored" : ""}`}
      ></i>
    </div>
  );
}

export default Intro;
