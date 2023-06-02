import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tejashree Rajkarne, </span>
            a passionate UX designer dedicated to creating meaningful experiences that bridge the gap between users and technology.
            <br />
            <br />
            With 2 years of experience, I've collaborated on diverse projects and honed my skills in <span className="purple"> <b> user research, data visualization, prototyping, inclusive design, and usability testing</b></span>. I believe in putting the user at the center of the design process to create intuitive, accessible, and impactful products.
            <br/>
            <br/>
            I thrive in cross-functional teams, working closely with researchers, developers, and stakeholders to craft cohesive and delightful experiences. From e-commerce journeys to mobile apps, I enjoy solving intricate problems and delivering exceptional user experiences.
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Clever design is the art of making complex things simple!"{" "}
          </p>
          <footer className="blockquote-footer">Tejashree</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
