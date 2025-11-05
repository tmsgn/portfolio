import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import NextIcon from "../../Assets/TechIcons/Next.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Git from "../../Assets/TechIcons/Git.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react-native" />
        <div className="tech-icons-text">React Native</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={NextIcon} alt="next" />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node & Express</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
