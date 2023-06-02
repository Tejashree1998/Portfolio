import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Section.module.css'; // Import the CSS module
// import omrx1 from '../../Assets/Projects/omrx1.jpg';
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiPowerbi,
  SiAdobephotoshop,
  SiAngular
} from "react-icons/si";
import {
  BiPyramid
} from "react-icons/bi";


const Section3 = ({ images, description, heading }) => {
  return (
    <div className={styles.section}> {/* Apply the CSS module class */}
      <Row>
        <Col md={8}>
          <div className={styles.carousel}> {/* Apply the CSS module class */}
            <Carousel>
              {images.map((image, index) => (
                <div className={styles.slide} key={index}> {/* Apply the CSS module class */}
                  <img src={image} alt={`Carousel Image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.description}> {/* Apply the CSS module class */}
            <span className="project-heading">{heading}</span>
            <br></br>
            <br/>
            <h2 className="purple">Description</h2>

                <ul>
                <li>Designed user experience for Learning management system using storyboards, wireframes, screen layouts,  high fidelity prototypes, heuristic evaluation of system and design.
</li>
<li>Built and shipped over 20+ front-end screens to production using Angular.

</li>
<li>Created personas based on various use cases to gain insights into the user psychology and improve inclusivity.
</li>
<li>The primary goal of the system was to provide a centralized and efficient platform for managing and tracking learning programs.
</li>

                  </ul>
                  <h2 className="purple">Features</h2>

<ul>
<li>Based on workflow, users can access and modify courses, user accounts and content.
 </li>
<li>Provides tracking and reporting functionalities, communication and collaboration features.
</li>
  </ul>
            <h2>
        Tools <strong className="purple">Used </strong>
      </h2>
      <SiAngular style={{ fontSize:"4rem"}}/>
      <SiFigma style={{ fontSize:"4rem", margin:"2rem"}}/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section3; // Make sure to export the component
