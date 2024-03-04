import React, { useState } from "react";
import "../style/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!true);
  };

  return (
    <div className="NavbarMainDiv">
      <div className="NavbarAPlogo">AP</div>

      <div>
        <ul className="NavbarList">
          <li>Home</li>
          <li>Project</li>
          <li>Resume </li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <a
          href="https://github.com/ArjunPradhann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./github.svg" alt="github" className="gitStyle" />
        </a>
        <GiHamburgerMenu className="hamburgerIcon" onClick={handleChange} />
        <Menu
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem>Home</MenuItem>
          <MenuItem>Project</MenuItem>
          <MenuItem>Resume</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
