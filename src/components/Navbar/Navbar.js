import React from "react";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import EjectIcon from "@material-ui/icons/Eject";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div class="scroll-up-btn">
        <EjectIcon style={{ fontSize: 30, color: "white" }} />
      </div>
      <nav class="navbar">
        <div class="max-width">
          <div class="logo">
            <a href="#">
              Sam<span>Qi.</span>
            </a>
          </div>
          <ul class="menu">
            <li>
              <a href="#home" class="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#services" class="menu-btn">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" class="menu-btn">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" class="menu-btn">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" class="menu-btn">
                Contact
              </a>
            </li>
          </ul>
          <div class="menu-btn">
            <HorizontalSplitIcon style={{ fontSize: 30, color: "darkgray" }} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
