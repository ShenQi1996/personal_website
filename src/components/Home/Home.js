import React from "react";
import "./Home.css";

function Home() {
  return (
    <section class="home" id="home">
      <div class="max-width">
        <div class="home-content">
          <div class="text-1">Welcome. My name is</div>
          <div class="text-2">Sam Qi</div>
          <div class="text-3">
            And I'm a <span class="typing"></span>
          </div>
          <a href="#about">Hire me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
