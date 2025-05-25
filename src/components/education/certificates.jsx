import SKILLS_ICONS from "../../data/skills_icons";

import mern from "../../images/certificates/mern.jpg";
import supMl from "../../images/certificates/sup_ml.jpg";
import postman from "../../images/certificates/postman.png";
import nti from "../../images/certificates/nti.jpg";
import edges from "../../images/certificates/edges.jpg";

import "../../styles/education/education.css";

const certificateImages = {
  mern: mern,
  supMl: supMl,
  postman: postman,
  nti: nti,
  edges: edges,
};

function Certificates({ certificates }) {
  return (
    <div className="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-list">
        {certificates.map((certificate) => (
          <Certificate key={certificate.name} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

function Certificate({ certificate }) {
  return (
    <div className="certificate">
      {certificateImages[certificate.url] && (
        <img
          width={"100%"}
          src={certificateImages[certificate.url]}
          alt={certificate.name}
          className="certificate-image"
        />
      )}
      <h3 className="certificate-title">{certificate.name}</h3>
      <p className="certificate-description">{certificate.description}</p>
      <SkillList skills={certificate.skills} />
    </div>
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
      <i className={`${SKILLS_ICONS[skill]} colored`}></i>
    </div>
  );
}

export default Certificates;
