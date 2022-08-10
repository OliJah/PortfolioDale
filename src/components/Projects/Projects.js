import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/piiquante.png";
import editor from "../../Assets/Projects/ohmyfood.png";
import booki from "../../Assets/Projects/booki.png";
import suicide from "../../Assets/Projects/kanap.png";
import bitsOfCode from "../../Assets/Projects/chouette-agence.png";

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
              imgPath={booki}
              isBlog={false}
              title="Booki"
              description="PROJET 2 BOOKI"
              ghLink="https://github.com/OliJah/Booki-DW-P2"
              demoLink="https://olijah.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="OhMyFood"
              description="PROJET 3 OhMyFood"
              ghLink="https://github.com/OliJah/ohmyfood"
              demoLink="https://olijah.github.io/ohmyfood/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="La Chouette Agence"
              description="PROJET 4 La Chouette Agence"
              ghLink="https://github.com/OliJah/LaChouetteAgenceNew"
              demoLink="https://olijah.github.io/LaChouetteAgenceNew/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Kanap"
              description="PROJET 5 KANAP "
              ghLink="https://github.com/OliJah/Kanap"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Piiquante"
              description="PROJET 6 PIIQUANTE"
              ghLink="https://github.com/OliJah/Piiquante"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
