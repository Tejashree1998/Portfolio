import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Section.module.css'; // Import the CSS module
// import omrx1 from '../../Assets/Projects/omrx1.jpg';
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiInvision
} from "react-icons/si";

const Section = ({ images, description, heading }) => {
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
                <li>Designed user experience for the Medical Prescription Management System. </li>
<li>Conducted research on target users, their needs and behavior using surveys and user interviews.</li>
<li>The design process involved creation of sketches, wireframes, and prototypes.  </li>
<li>The primary goal of the system was to assist medical practitioners in efficiently managing prescriptions and patient medical records.</li>

                  </ul>
                  <h2 className="purple">Features</h2>

<ul>
<li>Allows input and modification of patient complaints, findings, tests, prescriptions, treatment plans, and associated documents. </li>
<li>Provides access to patient history, patient lists, appointment schedules, and detailed patient profiles..</li>
  </ul>
            <h2>
        Tools <strong className="purple">Used </strong>
      </h2>
      <SiFigma style={{ fontSize:"4rem", margin:"2rem"}}/>
      <SiInvision style={{ fontSize:"4rem"}}/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section; // Make sure to export the component
