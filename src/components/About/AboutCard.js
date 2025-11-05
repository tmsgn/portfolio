import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Temesgen Tarekegn</span>{" "}
            from <span className="purple">Ethiopia</span>.
            <br />
            I’m a <span className="purple">3rd-year Computer Science</span>{" "}
            student at <span className="purple">Bahir Dar University</span>
            , graduating next year.
            <br />
            I’m a <span className="purple">full-stack web</span> and{" "}
            <span className="purple">mobile app developer</span> who works with
            React & Next.js on the frontend and Node.js/Express.js with
            PostgreSQL on the backend.
            <br /> I use <span className="purple">Prisma</span> and{" "}
            <span className="purple">Supabase</span> often, and I love building
            fast, clean, and user-friendly products.
            <br />
            <br />
            Outside of coding, I like learning new tech, collaborating on
            projects, and exploring design and UX.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build useful things, learn every day."
          </p>
          <footer className="blockquote-footer">Temesgen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
