import React from "react";
import "./Services.css";

function Services() {
  return (
    <section class="services" id="services">
      <div class="max-width">
        <h2 class="title">My services</h2>
        <div class="serv-content">
          <div class="card">
            <div class="box">
              <i class="fas fa-paint-brush"></i>
              <div class="text">Web Design</div>
              <p>
              The web design for the content needs to be timely and relevant—compelling content that keeps a visitor on your site.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <i class="fas fa-chart-line"></i>
              <div class="text">Advertising</div>
              <p>
              A well-planned website requires a person with web designer, web developer, content strategist in order to reach it's full potential.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <i class="fas fa-code"></i>
              <div class="text">Front-End Dveelopment</div>
              <p>
               A well-design website needs a great developer to make it happen. The developer is who makes the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
