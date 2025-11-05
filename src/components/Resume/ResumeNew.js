import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={8} style={{ textAlign: "center", color: "#c8c8c8" }}>
            <h1 className="project-heading">
              Resume <strong className="purple">Coming Soon</strong>
            </h1>
            <p>Upload your resume PDF and we’ll display it here.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
