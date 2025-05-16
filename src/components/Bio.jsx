import { Fragment } from "react";
import "../styles/Bio.css";
import cvFile from "../assets/cvFile/CV.pdf";

const Bio = () => {
  return (
    <section className="bio-section" id="about">
      <div className="bio-container">
        <div className="bio-layout">
          <div className="bio-title-column">
            <h2 className="bio-title">About me</h2>
          </div>
          <div className="bio-content-column">
            <>
              <p className="bio-text">
                I'm a software developer with a passion for building things that
                matter. I'm driven by curiosity, honesty, and a desire to
                understand people as deeply as I understand code. While I'm always
                chasing the next challenge in tech, I'm equally invested in
                meaningful connections and unfiltered conversations. I question
                everything, think ten steps ahead, and don't believe in
                sugarcoating. I believe growth comes from discomfort, and the best
                stories are usually the messy, real ones. Whether I'm debugging
                code or unpacking someone's silence, I'm all in or not at all.
              </p>
              <div className="bio-resume-button-container">
                <a href={cvFile} className="bio-resume-button" download="CV.pdf">
                  Download Resume
                </a>
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
