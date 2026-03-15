import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/Project-3.png";
import chatify from "../../Assets/Projects/Project-1.png";
import bitsOfCode from "../../Assets/Projects/Project-2.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BrainWave"
              description="A mobile-responsive website built with React.js, featuring immersive 3D animations powered by Three.js. It delivers smooth performance, dynamic visuals, and interactive experiences, ensuring seamless usability across all devices. With dynamic motion effects and captivating interactions."
              demoLink="https://brain-wavesite.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Golf Website"
              description="A feature-rich golf products website built with JavaScript and Bootstrap, offering a seamless and responsive shopping experience.It showcases a wide range of golf equipment with a clean and modern interface, ensuring optimal usability across all devices,show's stunning looks."
              demoLink="https://golf-ecommerce-web.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Iphone 15"
              description="A visually engaging website showcasing the iPhone 15 Pro Max, built with React.js and Three.js. It features high-quality animated videos, delivering an immersive and interactive experience.It ensures seamless usability across all devices while highlighting the phone’s cutting-edge features"
              demoLink="https://the-iphone15-site.netlify.app/"              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
