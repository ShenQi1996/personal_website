import React from "react";
import "./About.css";
import profile from "../images/profile-1.jpeg";

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
               I am a person that loves developing, designing, and delivering software and websits used by all kinds of business.
               A proven leader with number of years of experience who is driven to make the world a better place one solution at a time and 
               create a personal brand that people remember me, build things that represent me, and appreciate people that helped me. 
            </p>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
