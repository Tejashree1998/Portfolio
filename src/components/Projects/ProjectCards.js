import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const handleClick = () => {
    // Call the callback function passed from the parent component
    if (props.onButtonClick) {
      props.onButtonClick();
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {/* {props.description} */}
        </Card.Text>
        <Button onClick={handleClick} variant="primary">
          Go to Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
