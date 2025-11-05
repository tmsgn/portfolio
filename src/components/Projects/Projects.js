import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects <strong className="purple">Coming Soon</strong>
        </h1>
        <p style={{ color: "white" }}>
          I’m curating my work. Check back soon for selected projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Intentionally left blank. Add <ProjectCard /> items here later. */}
          <Col md={8} style={{ color: "#c8c8c8", textAlign: "center" }}>
            No projects added yet.
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
