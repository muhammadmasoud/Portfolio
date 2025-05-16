import { Fragment } from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skillsData = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 75 },
    { name: "Photoshop", level: 80 },
    { name: "Adobe XD", level: 75 },
    { name: "Node.js", level: 65 },
    { name: "WordPress", level: 55 },
  ];

  const focusAreas = [
    "UI/UX Design",
    "Responsive Design",
    "Web Design",
    "Mobile App Design",
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-intro-wrapper">
          <p className="skills-intro-text">
            My focus lies in crafting intuitive and impactful digital
            experiences through UI/UX design, responsive layouts, web design,
            and mobile app interfaces. I specialize in designing user-centered
            solutions that not only look sleek but also function seamlessly
            across devices. Whether it's a website or a mobile app, I aim to
            create designs that are visually engaging, purpose-driven, and
            optimized for real-world use.
          </p>
        </div>

        <div className="skills-content-wrapper">
          <div className="skills-focus-area">
            <Fragment>
              <h3 className="skills-focus-title">MY FOCUS</h3>
              <hr className="skills-focus-divider" />
              <ul className="skills-focus-list">
                {focusAreas.map((area, index) => (
                  <li key={index} className="skills-focus-item">
                    {area}
                  </li>
                ))}
              </ul>
            </Fragment>
          </div>

          <div className="skills-bars-wrapper">
            {skillsData.map((skill, index) => (
              <div className="skill-bar-container" key={index}>
                <Fragment>
                  <div className="skill-name">{skill.name}</div>
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </Fragment>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
