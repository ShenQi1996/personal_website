import React from "react";
import BrushIcon from "@material-ui/icons/Brush";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import CodeIcon from "@material-ui/icons/Code";
import "./Services.css";

function Services() {
  return (
    <section class="services" id="services">
      <div class="max-width">
        <h2 class="title">My services</h2>
        <div class="serv-content">
          <div class="card">
            <div class="box">
              <BrushIcon style={{ fontSize: 50, color: "darkgray" }} />
              <div class="text">Web Design</div>
              <p>
                The web design for the content needs to be timely and
                relevant—compelling content that keeps a visitor on your site.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <TrendingUpIcon style={{ fontSize: 50, color: "darkgray" }} />
              <div class="text">Advertising</div>
              <p>
                A well-planned website requires a person with web designer, web
                developer, content strategist in order to reach its full
                potential.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <CodeIcon style={{ fontSize: 50, color: "darkgray" }} />
              <div class="text">FullStack Dveelopment</div>
              <p>
                A well-design website needs a great developer to make it happen.
                The developer is who makes the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
