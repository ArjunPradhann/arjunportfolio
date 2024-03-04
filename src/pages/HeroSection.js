import React from "react";
import "../style/HeroSection.css";
import SkillBox from "../components/SkillBox";
import TypewriterComponent from "typewriter-effect";

function HeroSection() {
  const Typewriter = TypewriterComponent;

  return (
    <div className="HSMainDiv">
      <div className="HsInnerDiv">
        <p className="HSMainHead">
          Hi, I&rsquo;m <span style={{ color: "#0066ff" }}>Arjun</span>
        </p>
        <p className="HSSubheader">
          a &nbsp;
          <span className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  "Professioal coder",
                  "FrontEnd Developer",
                  "BackEnd Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
        <p className="HSPara">
          Front End Developer with two years of experience working with Reactjs,
          Javascript, HTML/CSS to deliver exceptional customer experiences.
          Adept at contributing to a highly collaborative work environment,
          finding solutions, and determining customer satisfaction.
        </p>
        <div className="HSSkill">
          <SkillBox />
        </div>
      </div>

      <div className="HSImage">
        <img
          src="./arjunportfolio/Arjun1.svg"
          alt="ArjunImage"
          style={{ maxWidth: "100%", maxHeight: "100%", height: "650px" }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
