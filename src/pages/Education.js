import React from "react";
import "../style/Education.css";

function Education() {
  const EducationDetails = [
    {
      course: "Masters of Computer Application(MCA)",
      college: "Dehradun Institute of Technology(DIT)",
      session: "2020- 2022",
      scored: " CGPA-8.81",
    },
    {
      course: "Bachelor of Science in information Technology(B.Sc IT) ",
      college: "Institute of Technology & Management (ITM)",
      session: "2017 - 2020",
      scored: "CGPA-7.52",
    },
  ];
  return (
    <div className="ExpMain">
      {EducationDetails.map((data, idx) => (
        <div className="ExpInnerDiv">
          <div>
            <b>{data.course}</b>
          </div>
          <div>{data.college}</div>
          <div>{data.session}</div>
          <div>{data.scored}</div>
        </div>
      ))}
    </div>
  );
}

export default Education;
