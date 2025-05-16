import { Fragment } from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationItems = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'AAST',
      year: '2019 - 2023',
      description: 'Studied computer science fundamentals, data structures, algorithms, and web development.'
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-items-wrapper">
          {educationItems.map((item, index) => (
            <div className="education-item" key={index}>
              <div className="education-bullet"></div>
              <div className="education-content">
                <>
                  <h3 className="education-degree">{item.degree}</h3>
                  <p className="education-institution">
                    {item.institution} | {item.year}
                  </p>
                  <p className="education-description">
                    {item.description}
                  </p>
                </>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
