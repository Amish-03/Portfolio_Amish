import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import linkQualityAnalyzer from "../../Assets/Projects/nvidia.png";  // Update with your project image
import automaticFaucetSystem from "../../Assets/Projects/faucet.jpeg";  // Update with your project image
import pseudoCNCBot from "../../Assets/Projects/CNCbot.jpg";  // Update with your project image
import guitarChordRecognition from "../../Assets/Projects/guitar.png";
import smartIndiaHackathon from "../../Assets/Projects/smartIndiaHackathon.png";  // Update with your project image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* NVIDIA Collaboration Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkQualityAnalyzer}
              isBlog={false}
              title="Jetson Orin based optimization project in collaboration with NVIDIA"
              description="Utilized NVIDIA Jetson Orin platform to drive optimizations in system communication—project specifics remain confidential due to NDA"
            />
          </Col>
          {/* Automatic Guitar Chord Recognition */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guitarChordRecognition}
              isBlog={false}
              title="Automatic Guitar Chord Recognition"
              description="Built a deep learning model using EfficientNetV2-S to recognize guitar chords from real-time video input. Designed for high accuracy and low latency in chord classification."
              
            />
          </Col>

          {/* Automatic Faucet System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automaticFaucetSystem}
              isBlog={false}
              title="Automatic Faucet System"
              description="Designed and developed an automatic faucet system to conserve water. The system uses a ultrasonic sensor to detect presence of user's hand to trigger a dc motor in order to automatically dispense the required amount of water."
              ghLink="https://github.com/Amish-03/Automatic-Faucet-System"
              demoLink="https://automatic-faucet-demo.com/"  // Add demo link here
            />
          </Col>

          {/* Pseudo CNC Bot */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pseudoCNCBot}
              isBlog={false}
              title="Pseudo CNC Bot"
              description="Built a pseudo CNC bot as part of an engineering exploration project. The bot automates basic CNC tasks and is programmed for simple machining processes."
              ghLink="https://github.com/Amish-03/Pseudo-CNC-Bot"
              demoLink="https://www.linkedin.com/posts/amish-kulkarni-2a74742b2_engineeringexcellence-cnc-embeddedsystems-activity-7221799120028499968-_vy8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEss458BSR3VGjADHZ6bVXUas3GpZroGHYU"  // Add demo link here
            />
          </Col>

          {/* Smart India Hackathon */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartIndiaHackathon}
              isBlog={false}
              title="Smart India Hackathon"
              description="Participated in the Smart India Hackathon, focusing on solving real-world problems using technology. Worked on innovative solutions for societal development."
              ghLink="https://github.com/Amish-03/Smart-India-Hackathon"
              demoLink="https://www.linkedin.com/posts/amish-kulkarni-2a74742b2_smartindiahackathon-ai-trafficoptimization-activity-7237839032968196097-MekC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEss458BSR3VGjADHZ6bVXUas3GpZroGHYU"  // Add demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
