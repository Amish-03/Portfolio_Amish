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
            <br />
            I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering at KLE Technological University.
            <br />
            I have a strong passion for Embedded Systems and Machine Learning, and I’m actively working on projects involving <b>NVIDIA Jetson</b> and real-time video processing using <b>CUDA</b>.
            <br />
            <br />
            I deeply admire NVIDIA’s contributions to cutting-edge technology. Some of the NVIDIA-powered innovations I explore or follow closely include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Real-time Object Detection on edge devices using NVIDIA Jetson.
            </li>
            <li className="about-activity">
              <ImPointRight /> GPU-accelerated Machine Learning using CUDA for faster training and inference.
            </li>
            <li className="about-activity">
              <ImPointRight /> Enhancing video/audio quality during online sessions with NVIDIA Broadcast — a tool I use regularly for meetings and recordings.
            </li>
            <li className="about-activity">
              <ImPointRight /> AI-assisted Healthcare solutions through NVIDIA Clara.
            </li>
            <li className="about-activity">
              <ImPointRight /> Smart City applications using NVIDIA DeepStream SDK for intelligent video analytics.
            </li>
          </ul>
          <p>
            NVIDIA’s ability to empower developers across domains — from autonomous vehicles to AI at the edge — is something I strive to be a part of as I grow in this field.
          </p>
          <br />
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
