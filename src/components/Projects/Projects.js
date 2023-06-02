import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Section from './Section';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import omrx1 from '../../Assets/Projects/omrx1.jpg'
import omrx2 from '../../Assets/Projects/omrx2.jpg'
import omrx3 from '../../Assets/Projects/omrx3.jpg'
import ims1 from '../../Assets/Projects/ims1.jpg'
import ims2 from '../../Assets/Projects/ims2.jpg'
import ims3 from '../../Assets/Projects/ims3.jpg'
import ims4 from '../../Assets/Projects/ims4.jpg'
import ims5 from '../../Assets/Projects/ims5.jpg'
import dv1 from '../../Assets/Projects/dv1.png'
import dv2 from '../../Assets/Projects/dv2.png'
import dv3 from '../../Assets/Projects/dv3.png'
import lms1 from '../../Assets/Projects/lms1.jpg'
import lms2 from '../../Assets/Projects/lms2.jpg'
import lms3 from '../../Assets/Projects/lms3.jpg'
import lms4 from '../../Assets/Projects/lms4.jpg'
import nms1 from '../../Assets/Projects/nms1.jpg'
import nms2 from '../../Assets/Projects/nms2.png'
import nms3 from '../../Assets/Projects/nms3.png'
import nms4 from '../../Assets/Projects/nms4.jpg'
import { Link } from 'react-scroll';

function Projects() {
  const images = [
    omrx1,
    omrx2,
    omrx3
  ];
  const images1 = [
    ims1,
    ims2,
    ims3,
    ims4,
    ims5
  ];
  const images2 = [
    dv1,
    dv2,
    dv3,

  ];
  const images3 = [
    lms1,
    lms2,
    lms3,
    lms4,
  ];
  const images4 = [
    nms1,
    nms2,
    nms3,
    nms4
  ];

  const headings = [
    "OMRX"
  ];

  const handleButtonClick = () => {
    const section = document.getElementById('section1');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleButtonClick1 = () => {
    const section = document.getElementById('section2');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleButtonClick2= () => {
    const section = document.getElementById('section3');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleButtonClick3= () => {
    const section = document.getElementById('section4');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleButtonClick4= () => {
    const section = document.getElementById('section5');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const description = "'This is the description for the section';"
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
              imgPath={omrx1}
              isBlog={false}
              title="OMRX"
              onButtonClick={handleButtonClick}
              description="Prescription Management System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ims1}
              isBlog={false}
              title="Inventory Management System"
              onButtonClick={handleButtonClick1}
              description="Inventory Management System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dv1}
              isBlog={false}
              title="Data Visualization and Analysis"
              onButtonClick={handleButtonClick2}
              description="Inventory Management System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms1}
              isBlog={false}
              title="Learning Management System"
              onButtonClick={handleButtonClick3}
              description="Inventory Management System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nms1}
              isBlog={false}
              title="Notification Management System"
              onButtonClick={handleButtonClick4}
              description="Notification Management System"
            />
          </Col>


        
        </Row>
      </Container>
      <hr></hr>
      <div className="app" id="section1"  >
      <Section images={images} description={description} heading="OMRX" />
    </div>
    <div className="app" id="section2"  >
      <Section1 images={images1} description={description} heading="Inventory Management System" />
    </div>
    <div className="app" id="section3"  >
      <Section2 images={images2} description={description} heading="Data Visualization and Analysis" />
    </div>
    <div className="app" id="section4"  >
      <Section3 images={images3} description={description} heading="Learning Management System" />
    </div>
    <div className="app" id="section5"  >
      <Section4 images={images4} description={description} heading="Notification Management System" />
    </div>
    </Container>
  );
}

export default Projects;
