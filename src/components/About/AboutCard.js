import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">AbdulRehman </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently working as a freelancer.
            <br />
            I am currently pursuing a Bachelor of Science in Computer Science, focusing on advanced computational techniques and problem-solving methodologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Passionate about creating useful and engaging web experiences!"{" "}
          </p>
          <footer className="blockquote-footer">AbdulRehman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
