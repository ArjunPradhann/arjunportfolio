import React from "react";

function SkillBox() {
  const skills = [
    {
      title: "HTML",
    },
    {
      title: "CSS",
    },
    {
      title: "Javascript",
    },
    {
      title: "Reactjs",
    },
    {
      title: "Nextjs",
    },
    {
      title: "Nodejs",
    },
    {
      title: "Expressjs",
    },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {skills.map((skill, idx) => (
        <div
          key={idx}
          style={{
            margin: "5px",
            padding: "10px 30px",
            border: "1px solid gray",
            borderRadius: "22px",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0066ff";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "initial";
          }}
        >
          {skill.title}
        </div>
      ))}
    </div>
  );
}

export default SkillBox;
