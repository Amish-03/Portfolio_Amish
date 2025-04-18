import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
 
  SiGit,
  SiNvidia,
  SiPytorch,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNvidia />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      
      
    </Row>
  );
}

export default Toolstack;
