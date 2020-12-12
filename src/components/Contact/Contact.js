import React, { useState } from "react";
import "./Contact.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import { db } from "../../firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjects, setSubjects] = useState("");
  const [message, setMessage] = useState("");

  const handleSumbit = e => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        subjects: subjects,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted ✨");
      });
    setName("");
    setEmail("");
    setMessage("");
    setSubjects("");
  };
  return (
    <section class="contact" id="contact">
      <div class="max-width">
        <h2 class="title">Contact me</h2>
        <div class="contact-content">
          <div class="column left">
            <div class="text">Get in Touch</div>
            <p>
              Get in touch with me. My working hours are Monday to Friday from
              10 am to 6 pm EST.
            </p>
            <div class="icons">
              <div class="row">
                <i class="fas fa-user"></i>
                <div class="info">
                  <div class="head">Name</div>
                  <div class="sub-title">Sam Qi</div>
                </div>
              </div>
              <div class="row">
                <i class="fas fa-map-marker-alt"></i>
                <div class="info">
                  <div class="head">Address</div>
                  <div class="sub-title">New York, Brooklyn</div>
                </div>
              </div>
              <div class="row">
                <i class="fas fa-envelope"></i>
                <div class="info">
                  <div class="head">Email</div>
                  <div class="sub-title">qisam1989@gmail.com</div>
                </div>
              </div>
              <div class="row">
                <i class="fa fa-phone"></i>
                <div class="info">
                  <div class="head">Phone</div>
                  <div class="sub-title">347-757-7730</div>
                </div>
              </div>
              <div class="row">
                <LinkedInIcon style={{ fontSize: 30 }} />
                <div class="info">
                  <div class="head">Linkedin</div>
                  <div class="sub-title">
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/shenqi1993/"
                      target="_blank"
                      rel=""
                    >
                      Get connected
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <FacebookIcon style={{ fontSize: 30 }} />
                <div class="info">
                  <div class="head">Facebook</div>
                  <div class="sub-title">
                    <a
                      href="https://www.facebook.com/qi.shen.92"
                      target="_blank"
                      rel=""
                    >
                      {" "}
                      Learn More About Me
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <GitHubIcon style={{ fontSize: 30 }} />
                <div class="info">
                  <div class="head">Github</div>
                  <div class="sub-title">
                    <a
                      href="https://github.com/ShenQi1996"
                      target="_blank"
                      rel=""
                    >
                      More Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column right" onSubmit={handleSumbit}>
            <div class="text">Message me</div>
            <form action="#">
              <div class="fields">
                <div class="field name">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div class="field email">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="field">
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={subjects}
                  onChange={e => setSubjects(e.target.value)}
                />
              </div>
              <div class="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div class="button">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
