import React from "react";
import "../style/Achievement.css";

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
    <div className="AchieveMain">
      {Certification.map((data, idx) => (
        <div key={idx} className="AchieveInner">
          {data.title}
        </div>
      ))}
    </div>
  );
}

export default Achievement;
