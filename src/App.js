import logo from "./images/pp_01.jpg";
import "./App.css";
import Intro from "./components/intro";
import NavBar from "./components/NavBar";

const skills = {
  backend: [
    { name: "spring-boot", icon: "devicon-spring-plain" },
    { name: "django", icon: "devicon-django-plain" },
    { name: "express", icon: "devicon-express-original" },
    { name: "dotnet", icon: "devicon-dotnetcore-plain" },
  ],
  frontend: [
    { name: "react", icon: "devicon-react-original" },
    { name: "angular", icon: "devicon-angularjs-plain" },
  ],
  database: [
    { name: "postgresql", icon: "devicon-postgresql-plain" },
    { name: "mongodb", icon: "devicon-mongodb-plain" },
    { name: "mysql", icon: "devicon-mysql-plain" },
  ],
  languages: [
    { name: "java", icon: "devicon-java-plain" },
    { name: "typescript", icon: "devicon-typescript-plain" },
    { name: "python", icon: "devicon-python-plain" },
    { name: "cpp", icon: "devicon-cplusplus-plain" },
    { name: "javascript", icon: "devicon-javascript-plain" },
    { name: "c#", icon: "devicon-csharp-line" },
    { name: "go", icon: "devicon-go-plain" },
  ],
};

const Profile = {
  name: "Omer Awwad",
  title: "Software Engineer",
  description:
    "I am a Software Engineer graduate from Faculty of Engineerin Ain Shams University with experience in building web applications and mobile applications.",
  avatar: logo,
};

const LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/omer-ashraf/",
    icon: "devicon-linkedin-plain",
  },
  {
    name: "GitHub",
    url: "https://github.com/omerawwad",
    icon: "devicon-github-original",
  },
];

const NAV_LINKS = [
  { name: "Brief", url: "#" },
  { name: "Education", url: "#" },
  { name: "Projects", url: "#" },
  {
    name: "Resume",
    url: "",
  },
];

function App() {
  return (
    <>
      <NavBar nav_links={NAV_LINKS} />
      <Intro profile={Profile} links={LINKS} skills={skills} />
    </>
  );
}

export default App;
