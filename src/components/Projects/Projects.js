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
              <div class="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={Prof2} alt="" />
              <div class="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={Prof3} alt="" />
              <div class="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={Prof4} alt="" />
              <div class="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
