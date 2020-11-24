import React from "react";
import "./Skills.css";
function Skills() {
  return (
    <section class="skills" id="skills">
      <div class="max-width">
        <h2 class="title">My skills</h2>
        <div class="skills-content">
          <div class="column left">
            <div class="text">My creative skills & experiences.</div>
            <p>
            Web Developer/ Product Data Coordinator- BHMedWear, Brooklyn, NY.
            </p>
            <p>
            Develop data tracking and monitoring systems with SQL server
            Establish data entry criteria and standards
            Analyze data to identify trends and project program outcomes using Google Analytics
            Worked with the Management team to develop and launch a new/ updated internal website
            Completed daily, weekly, monthly, period and annual reports for corporate
            Provide IT services for all new development with my programming skills
            </p>
            <a href="https://www.linkedin.com/in/shenqi1993/" target="_blank">Read more in my Linkedin</a>
          </div>
          <div class="column right">
            <div class="bars">
              <div class="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div class="line html"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div class="line css"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>JavaScript</span>
                <span>60%</span>
              </div>
              <div class="line js"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>ReactJS</span>
                <span>70%</span>
              </div>
              <div class="line php"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Firebase</span>
                <span>50%</span>
              </div>
              <div class="line mysql"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
