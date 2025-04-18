import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amish </span>
            from <span className="purple">Hubballi, India.</span>
            <br />
            I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering at KLE Technological University.
            <br />
            I have a strong passion for Embedded Systems and Machine Learning, and I’m actively working on projects involving NVIDIA Jetson and real-time video processing.
            <br />
            <br />
            Apart from engineering, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & Tech Innovations
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on Embedded Systems Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with Machine Learning Models
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build with passion, perform with purpose."
          </p>
          <footer className="blockquote-footer">Amish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
