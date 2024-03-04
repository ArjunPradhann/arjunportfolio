import React from "react";

function Achievement() {
  const Certification = [
    {
      title: "Reverse Engineering & Malware Analysis.",
    },
    {
      title: "Advance diploma in Computer Application from IGCSM (1 year).",
    },
    {
      title: "Java Basic from Udemy.",
    },
    {
      title:
        "Certification in PHP & MySQL offered by Spoken Tutorial (IIT Bombay).   ",
    },
    {
      title: "Web Development course from PMKVY.",
    },
  ];
  return (
    <div
      style={{
        padding: "90px 140px",
      }}
    >
      {Certification.map((data, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "4%",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px",
            width: "fit-content",
          }}
        >
          {data.title}
        </div>
      ))}
    </div>
  );
}

export default Achievement;
