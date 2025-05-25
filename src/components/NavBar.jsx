import "../App.css";
import "../styles/navbar.css";
import { useEffect, useState } from "react";
import { ExternalLink } from "./graphics/ExternalLink";
import { Link } from "react-router-dom";

function NavBar({ nav_links, resume_link, active_link }) {
  //   const [selectedLink, setSelectedLink] = useState(nav_links[0].name);
  const [selectedLink, setSelectedLink] = useState(active_link);

  useEffect(() => {
    setSelectedLink(active_link);
  }, [active_link]);

  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName);
  };

  return (
    <div className="navbar">
      <div className="nav-links">
        {nav_links.map((nav_link) => (
          <NavLink
            key={nav_link.name}
            nav_link={nav_link}
            isSelectedLink={selectedLink === nav_link.name}
            onClick={() => handleLinkClick(nav_link.name)}
          />
        ))}
        <a
          href={resume_link}
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="resume">
            Resume
            <ExternalLink className="external-link" />
          </span>
        </a>
      </div>
    </div>
  );
}

function NavLink({ nav_link, isSelectedLink, onClick }) {
  return (
    <Link className="nav-link" to={nav_link.url} onClick={onClick}>
      <span className={` ${isSelectedLink ? "selected" : ""}`}>
        {nav_link.name}
      </span>
    </Link>
  );
}

export default NavBar;
