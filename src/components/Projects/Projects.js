import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import plantAI from "../../Assets/Projects/plantAI.png";  // Update with your project image
import guitarChordRecognition from "../../Assets/Projects/guitarChordRecognition.png";  // Update with your project image
import linkQualityAnalyzer from "../../Assets/Projects/linkQualityAnalyzer.png";  // Update with your project image

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
          
          {/* Guitar Chord Recognition */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guitarChordRecognition}
              isBlog={false}
              title="Guitar Chord Recognition"
              description="Built a machine learning model to recognize guitar chords from audio signals. The system uses deep learning techniques and has high accuracy in real-time chord recognition."
              ghLink="https://github.com/Amish-03/Guitar-Chord-Recognition"
              demoLink="https://guitar-chord-recognition-demo.com/"  // Add demo link here
            />
          </Col>

          {/* Link Quality Analyzer */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkQualityAnalyzer}
              isBlog={false}
              title="Link Quality Analyzer"
              description="Developed a tool to analyze the quality of GMSL links using the NVIDIA Jetson Orin Developer Kit. This project involved using data science and embedded systems."
              ghLink="https://github.com/Amish-03/Link-Quality-Analyzer"
              demoLink="https://link-quality-analyzer-demo.com/"  // Add demo link here
            />
          </Col>

          {/* Plant AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plantAI}
              isBlog={false}
              title="Plant AI"
              description="Used a plant disease dataset to train an image classifier model using PyTorch and CNN, achieving an accuracy of 98%. The model can detect diseased leaves of 14 unique plants."
              ghLink="https://github.com/Amish-03/Plant_AI"
              demoLink="https://plant-ai-demo.com/"  // Add demo link here
            />
          </Col>

          {/* Add more projects below */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
