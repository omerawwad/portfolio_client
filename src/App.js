import PROFILE from "./data/profile.json";
import SKILLS from "./data/skills.json";
import LINKS from "./data/links.json";
import CERTIFICATES from "./data/certificates.json";
import PROJECTS from "./data/projects";

import NAV_LINKS from "./data/nav_links.json";

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Intro from "./components/intro";
import NavBar from "./components/NavBar";
import Certificates from "./components/education/certificates";
import Projects from "./components/projects/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar
          nav_links={NAV_LINKS.links}
          resume_link={NAV_LINKS.resume_link}
          active_link={NAV_LINKS.links[0].name}
        />
        <Intro profile={PROFILE} links={LINKS.links} skills={SKILLS} />
      </>
    ),
  },
  {
    path: "/education",
    element: (
      <>
        <NavBar
          nav_links={NAV_LINKS.links}
          resume_link={NAV_LINKS.resume_link}
          active_link={NAV_LINKS.links[1].name}
        />
        <Certificates certificates={CERTIFICATES.certificates} />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <NavBar
          nav_links={NAV_LINKS.links}
          resume_link={NAV_LINKS.resume_link}
          active_link={NAV_LINKS.links[2].name}
        />
        <Projects projects={PROJECTS.projects} />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
