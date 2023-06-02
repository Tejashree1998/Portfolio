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


const Section4 = ({ images, description, heading }) => {
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
            A survey conducted by CleverTap in 2021 estimates that an average smartphone user in the US receives around 46 daily push notifications and that a user checks his phone about 63 times a day. Keeping track of a high volume of notifications can be an overwhelming task for users, as evident from our initial user interviews and observations. To propose an optimal solution, we sought the average user opinion towards notifications and engagement. Accordingly, we came up with some key research questions to be addressed to users during initial user interviews. These include factors affecting the engagement rate of notifications, influence of promotional notifications on buying behavior, factors that affect the relevance of notifications to users in terms of the timing and appeal, and user behavior around reading and clearing notifications. 
Our proposed solution is Renotify, a combination of a mobile application and widget offering, which captures notifications in a non-intrusive way keeping in mind the privacy of personal messages. This is the first application of its kind which reimagines the notification interaction experience as a widget over just a conventional app. Our objective is to display notifications in a prominent way to promote engagement while reducing user frustration at the same time.
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

export default Section4; // Make sure to export the component
