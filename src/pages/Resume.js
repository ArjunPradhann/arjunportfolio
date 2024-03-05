import React from "react";
import "../App.css";
import "../style/Resume.css";

function Resume() {
  const pdfUrl = "/Arjun_Pradhan.pdf";

  return (
    <>
      {" "}
      <p className="heading">Resume</p>
      <div className="ResumeMainDiv">
        <div className="ResumeInner">
          <div className="ResumeDiv">
            <a
              href={process.env.PUBLIC_URL + pdfUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./arjunportfolio/Resume.svg"
                alt="Resume"
                className="ResumeImage"
              />
            </a>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a href={pdfUrl} download="Arjun">
            <button
              style={{
                padding: "10px 26px",
                background: "#0066FF",
                color: "#ffffff",
                borderRadius: "10px",
                fontWeight: "500",
                fontSize: "16px",
                border: "none",
              }}
            >
              Download
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Resume;
