import React from "react";
import "./Projects.css";
import Prof1 from "../images/profile-1.jpeg";
import Prof2 from "../images/profile-2.jpeg";
import Prof3 from "../images/profile-3.jpeg";
import Prof4 from "../images/profile-4.jpeg";

function Projects() {
  return (
    <section class="projects" id="projects">
      <div class="max-width">
        <h2 class="title">My projects</h2>
        <div class="carousel owl-carousel">
          <div class="card">
            <div class="box">
              <img src={Prof1} alt="" />
              <div class="text"> NETFLIX</div>
              <p>This project I am using ReactJS, HTML, CSS and Firebase to make this project.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={Prof2} alt="" />
              <div class="text">WEATER APP</div>
              <p>One of my first ReactJS project I have learn so much about ReactJS and HTML.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={Prof3} alt="" />
              <div class="text">WEBPAGE</div>
              <p>Website That using HTML, CSS, and ReactJS to create.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={Prof4} alt="" />
              <div class="text">WEBPAGE</div>
              <p>Website that only using HTML, CSS, and ReactJS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
