import React from "react";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "120px 120px",
      }}
    >
      {EducationDetails.map((data, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            textAlign: "center",
            margin: "10px",
            padding: "20px",
            borderRadius: "16px",
            height: "200px",
            width: "50%",
            fontFamily: "__Inter_aaf875",
            fontWeight: "400",
            fontSize: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
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
