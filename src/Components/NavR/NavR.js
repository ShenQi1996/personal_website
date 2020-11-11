import React, { useEffect, useRef } from "react";
import "./NavR.css";
import logo from "./logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { TweenMax } from "gsap";
function NavR() {
/*
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
  */
 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  return (
  <div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
  );
}

export default NavR;
