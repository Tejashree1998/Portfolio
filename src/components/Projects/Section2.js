import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Section.module.css'; // Import the CSS module
// import omrx1 from '../../Assets/Projects/omrx1.jpg';
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiPowerbi,
  SiAdobephotoshop
} from "react-icons/si";
import {
  BiPyramid
} from "react-icons/bi";


const Section2 = ({ images, description, heading }) => {
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
                <li>Developed a dashboard to analyze complex data-set and provide data business intelligence insights to assist stakeholders in making crucial business choices.</li>
<li>Designed interactive data-based visualizations to provide an accessible way to identify and understand patterns and trends in data.
</li>
<li>The primary goal of the system was to enhance data visibility and improve operational efficiency by providing a consolidated view of the critical information in an easily accessible and understandable format.
</li>

                  </ul>
                  <h2 className="purple">Features</h2>

<ul>
<li>Provides stakeholders with necessary information to make crucial decisions, understand correlations and detect potential risks.
 </li>
<li>Visualizes complex data in easily understandable formats like graphs, charts and infographics.
</li>
  </ul>
            <h2>
        Tools <strong className="purple">Used </strong>
      </h2>
      <SiPowerbi style={{ fontSize:"4rem", margin:"2rem"}}/>
      <BiPyramid style={{ fontSize:"4rem"}}/>
      <SiFigma style={{ fontSize:"4rem", margin:"2rem"}}/>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section2; // Make sure to export the component
