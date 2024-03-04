import React from "react";
import "../style/ExperienceSection.css";
import "../App.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ExperienceSection() {
  const expDetails = [
    {
      logo: (
        <img
          src="./boxPay.svg"
          alt="companyLogo"
          style={{ height: "200px", width: "300px" }}
        />
      ),
      title: "SDE 1 : BoxPay pvt ltd | Gurgaon, India",
      companyName: "BoxPay pvt ltd",
      period: "May 2023 - Nov 2023",
      details:
        "Worked in, Portal using Reactjs, JavaScript Developed and maintained responsive web applications using HTML5, CSS3 JavaScript, and modern front-end frameworks React Integrated RESTful APIs to fetch and display dynamic content, enhancing user engagement and datadriven functionalities",
    },
    {
      logo: (
        <img
          src="./Prodios.svg"
          alt="companyLogo"
          style={{ height: "200px" }}
        />
      ),
      title: "Front End Developer : Prodios | Dehradun, India",
      companyName: "Prodios",
      period: "May 2022 - Apr 2023",
      details:
        "Coded using HTML, CSS and JavaScript, Reactjs, Nextjs, TailwindCSS to develop features for desktop platforms.Designed and updated layouts to meet usability and performance requirements.Worked cooperatively with client services, sales and team in deadline-driven environment.Use regulatory and compliance standards for user interface designs.",
    },
    {
      logo: (
        <img src="./Xenon.svg" alt="companyLogo" style={{ width: "300px" }} />
      ),
      title: "DevOps(Intern) : XenonStack | Chandigarh, India",
      companyName: "XenonStack",
      period: "Jan 2022 - Apr 2022",
      details:
        "Skilled at working independently and collaboratively in a team environment.Self-motivated, with a strong sense of personal responsibility.Proven ability to learn quickly and adapt to new situations.Worked well in a team setting, providing support and guidance.",
    },
  ];
  return (
    <div className="MaineDivExp">
      <p className="heading">Experience</p>
      <div className="ExpAccordian">
        {expDetails.map((data, idx) => (
          <Accordion key={idx}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <b>{data.companyName}</b>
            </AccordionSummary>
            <span style={{ objectFit: "cover" }}>{data.logo}</span>
            <AccordionDetails sx={{ textAlign: "left" }}>
              <div className="AccordianTitle"> {data.title}</div>
              <div className="AccordianPeriod"> {data.period}</div>
              <div className="AccordianDetails"> {data.details}</div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      {expDetails.map((data, idx) => (
        <div key={idx} className="SubDivExp">
          <div className="LogoSecExp">{data.logo}</div>
          <div className="ContentExp">
            <div className="Exp500">{data.title}</div>
            <div className="Exp400">{data.period}</div>
            <div className="Exp300">{data.details}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
