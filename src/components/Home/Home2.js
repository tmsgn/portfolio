import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m <b className="purple">Temesgen Tarekegn</b>, a
              <b className="purple"> 3rd-year Computer Science</b> student at
              Bahir Dar University in Ethiopia. I love building useful, clean
              and responsive applications for the web and mobile.
              <br />
              <br />I work across the full stack with
              <i>
                <b className="purple"> JavaScript/TypeScript, React, Next.js</b>
              </i>
              , and backend tools like
              <i>
                <b className="purple"> Node.js, Express.js, PostgreSQL</b>
              </i>
              . I also use
              <i>
                <b className="purple"> Prisma</b> and{" "}
                <b className="purple">Supabase</b>
              </i>
              , and style with <b className="purple">Tailwind CSS</b>.
              <br />
              <br />I enjoy turning ideas into products and I’m always learning
              and improving my craft. I’m graduating next year and open to
              internships and collaborations.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
