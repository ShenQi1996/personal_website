import React, { useEffect, useRef } from "react";
import "./NavR.css";
import logo from "./logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { TweenMax } from "gsap";

function NavR() {
  let tx1,
    tx2,
    tx3,
    tx4,
    tx5 = useRef(null);
  useEffect(() => {
    TweenMax.staggerTo(
      [tx1, tx2, tx3, tx4, tx5],
      1,
      { background: "white" },
      0.5
    );
  }, []);

  return (
    <div className="nav-right">
      <div className="inner-nav">
        <div className="logo">
          <img className="pic" src={logo} alt="" />
        </div>
        <div
          ref={el => {
            tx1 = el;
          }}
          className="text"
        >
          HOME
        </div>
        <div
          ref={el => {
            tx2 = el;
          }}
          className="text"
        >
          ABOUT ME
        </div>
        <div
          ref={el => {
            tx3 = el;
          }}
          className="text"
        >
          MY WORKS
        </div>
        <div
          ref={el => {
            tx4 = el;
          }}
          className="text"
        >
          EXPERIENCES
        </div>
        <div
          ref={el => {
            tx5 = el;
          }}
          className="text"
        >
          CONTACT ME
        </div>
        <div className="social-media">
          <FacebookIcon style={{ color: "white" }} />
          <InstagramIcon style={{ color: "white" }} />
          <GitHubIcon style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
}

export default NavR;
