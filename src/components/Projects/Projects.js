import React from "react";
import "./Projects.css";
import P1 from "../images/NETFLIX.PNG";
import P2 from "../images/WEATER.PNG";
import P3 from "../images/WEB1.PNG";
import P4 from "../images/WEB2.PNG";

function Projects() {
  return (
    <section class="projects" id="projects">
      <div class="max-width">
        <h2 class="title">My projects</h2>
        <div class="carousel owl-carousel">
          <div class="card">
            <div class="box">
              <img src={P1} alt="" />
              <div class="text"> NETFLIX</div>
              <p>
                This project I am using ReactJS, HTML, CSS and Firebase to make
                this project.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={P2} alt="" />
              <div class="text">WEATER APP</div>
              <p>
                One of my first ReactJS project I have learn so much about
                ReactJS and HTML.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={P3} alt="" />
              <div class="text">WEBPAGE</div>
              <p>Website That using HTML, CSS, and ReactJS to create.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={P4} alt="" />
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
