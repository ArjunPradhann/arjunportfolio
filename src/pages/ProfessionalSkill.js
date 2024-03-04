import React from "react";

function ProfessionalSkill() {
  const FrontEndPart = [
    {
      skilsName: "HTML/CSS",
      percentage: "90%",
    },
    {
      skilsName: "Javascript",
      percentage: "80%",
    },
    {
      skilsName: "Reactjs",
      percentage: "80%",
    },
    {
      skilsName: "Redux",
      percentage: "70%",
    },
    {
      skilsName: "Nextjs",
      percentage: "70%",
    },
  ];

  const BackendPart = [
    {
      skilsName: "Nodejs",
      percentage: "70%",
    },
    {
      skilsName: "Express",
      percentage: "70%",
    },
    {
      skilsName: "Git",
      percentage: "70%",
    },
  ];

  const StylingPart = [
    {
      skilsName: "Material UI",
      percentage: "70%",
    },
    {
      skilsName: "TailwindCss",
      percentage: "70%",
    },
    {
      skilsName: "Bootstrap",
      percentage: "70%",
    },
  ];

  const renderSkills = (skills) => (
    <>
      {skills.map((skill, idx) => (
        <div key={idx} style={{ marginBottom: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "350px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                marginTop: "20px",
                fontFamily: "__Inter_aaf875",
                fontWeight: "500",
                fontSize: "25px",
              }}
            >
              {skill.skilsName}
            </span>
          </div>
          <div
            style={{
              height: "10px",
              background: "#ccc",
              borderRadius: "5px",
              marginTop: "14px",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                width: skill.percentage,
                borderRadius: "5px",
                background: `linear-gradient(to right, #01409E, #013D98,#0166FE)`,
                position: "absolute",
                top: 0,
                left: 0,
              }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "100px",
      }}
    >
      <div>{renderSkills(FrontEndPart)}</div>
      <div>{renderSkills(BackendPart)}</div>
      <div>{renderSkills(StylingPart)}</div>
    </div>
  );
}
export default ProfessionalSkill;
