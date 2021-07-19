import React from "react";
import "./About.css";
import profile from "../images/pro1.jpg";

function About() {
  return (
    <section class="about" id="about">
      <div class="max-width">
        <h2 class="title">About me</h2>
        <div class="about-content">
          <div class="column left">
            <img src={profile} alt="" />
          </div>
          <div class="column right">
            <div class="text">
              I'm Sam and I'm a <span class="typing-2"></span>
            </div>
            <p>
              I am a person that loves developing, designing, and delivering
              software and websites used by all kinds of businesses. A proven
              leader with a number of years of experience who is driven to make
              the world a better place one solution at a time and create a
              personal brand that people remember me, build things that
              represent me, and appreciate people that helped me.
            </p>
            <a
              href="https://docs.google.com/document/d/1Fc7jn9HGnB6pDHDO0snCIQeUU7JJnMJW/edit"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
