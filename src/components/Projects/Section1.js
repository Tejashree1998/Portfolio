import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Section.module.css'; // Import the CSS module
// import omrx1 from '../../Assets/Projects/omrx1.jpg';
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiInvision,
  SiAdobephotoshop
} from "react-icons/si";

const Section1 = ({ images, description, heading }) => {
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
                <li>Designed user experience for the Inventory Management System using process flows, wireframes and interactive prototypes.
 </li>
<li>Collaborated with the manager for the entire product design life-cycle from creating mock ups, procuring feedback, refinement to final delivery.
</li>
<li>Developed user journey maps to understand user interactions and experiences.
 </li>
<li>The primary goal of the system was to effectively manage inventory by ensuring efficient supply chain and accurate tracking.
</li>

                  </ul>
                  <h2 className="purple">Features</h2>

<ul>
<li>Allows input and modification of customer details, delivery details
 </li>
<li>Allows users to search sales orders and generate invoices.
</li>
  </ul>
            <h2>
        Tools <strong className="purple">Used </strong>
      </h2>
      <SiFigma style={{ fontSize:"4rem", margin:"2rem"}}/>
      <SiAdobephotoshop style={{ fontSize:"4rem"}}/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section1; // Make sure to export the component
