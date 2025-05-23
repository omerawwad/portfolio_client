import "../App.css";
import "../styles/navbar.css";
import { useState } from "react";

function NavBar({ nav_links }) {
  //   const [selectedLink, setSelectedLink] = useState(nav_links[0].name);
  const [selectedLink, setSelectedLink] = useState(nav_links[0].name);

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
      </div>
    </div>
  );
}

function NavLink({ nav_link, isSelectedLink, onClick }) {
  return (
    <span
      className={`nav-link ${isSelectedLink ? "selected" : ""}`}
      onClick={onClick}
    >
      {nav_link.name}
    </span>
  );
}

export default NavBar;
