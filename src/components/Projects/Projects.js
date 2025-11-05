import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/nestmovie.png"}
              isBlog={false}
              title="NestMovie"
              description="NestMovie is a modern movie streaming platform where users can browse, search, and watch movies with a smooth, responsive interface. Built with Next.js and React, it features fast page loads, server-side rendering, and clean UI patterns. Users can explore trending titles, filter by genres, and view rich movie details. The site is designed for scalability and a great viewing experience across devices."
              ghLink="https://github.com/tmsgn/nest-movie"
              demoLink="https://nest-movie.vercel.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/swiftcart.png"}
              isBlog={false}
              title="SwiftCart"
              description="SwiftCart is a full‑stack e‑commerce application with a feature‑rich admin dashboard. Customers can discover products, manage carts, and place orders, while admins can manage catalog, inventory, and order workflows. Built using React on the frontend and a Node/Express backend with PostgreSQL, SwiftCart focuses on performance, clean UI, and maintainable code structure."
              ghLink="https://github.com/tmsgn/SwiftCart"
              demoLink="https://swiftcart-azure.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
