import React from "react";
import "./Projects.css";
import P1 from "../images/NETFLIX.PNG";
import P2 from "../images/WEATER.PNG";
import P3 from "../images/WEB1.PNG";
import P4 from "../images/AMAZON.PNG";
import P5 from "../images/java.PNG";
import P6 from "../images/fullstack.PNG";
import P7 from "../images/GrillLit.PNG";

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
              <p>Website That use HTML, CSS, and ReactJS to create.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={P4} alt="" />
              <div class="text">AMAZON-CLONE</div>
              <p>Amazon-clone only use HTML, CSS, React/Redux and Firebase .</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={P5} alt="" />
              <div class="text">HALF-NOTE</div>
              <p>Muise maker that only using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={P6} alt="" />
              <div class="text">PIXELPERFECT</div>
              <p>
                A website that uses HTML, CSS,ReactJS / Redux as the frontend
                and Ruby on Rails as the backend.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={P7} alt="" />
              <div class="text">GRILLLIT</div>
              <p>
                A Group project that uses HTML,CSS, ReactJS/ Redux as the
                frontend and MongoDB, Express.js as the the backend{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
