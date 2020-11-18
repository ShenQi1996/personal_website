import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <footer>
      <span>Created By Sam Qi</span>
      <div className="icons1">
        <FacebookIcon
          href="https://www.facebook.com/qi.shen.92"
          fontSize="large"
        />
        <GitHubIcon
          href="https://github.com/ShenQi1996?tab=repositories"
          fontSize="large"
        />
        <LinkedInIcon href="www.linkedin.com/in/shenqi1993" fontSize="large" />
      </div>
    </footer>
  );
}

export default Footer;
