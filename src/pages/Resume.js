import React, { useState } from "react";
import { Box, Modal } from "@material-ui/core";

function Resume() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    height: "auto",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
  };
  const [open, setOpen] = useState(false);

  const handleChange = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pdfUrl = "./Arjun_Pradhan.pdf";

  return (
    <div
      style={{ textAlign: "center", marginTop: "90px", padding: "0px 80px" }}
    >
      <div className="heading">Resume</div>

      <div
        style={{
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              border: "1px solid grey",
              padding: "10px",
              borderRadius: "20px",
            }}
            onClick={handleChange}
            src="./Resume.svg"
            alt="Resume"
            height={500}
            width={500}
          />
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src="./arjunportfolio/Resume.png" alt="Resume" />
          </Box>
        </Modal>
        <div style={{ marginTop: "20px" }}>
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
    </div>
  );
}

export default Resume;
