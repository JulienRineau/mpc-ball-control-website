import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import cv_logo from "../assets/images/cv_logo.jpeg";
import hardware_logo from "../assets/images/hardware_logo.jpg";
import MPC_logo from "../assets/images/MPC_logo.png";

class Cards extends Component {
  state = {};
  render() {
    return (
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="MPC" src={MPC_logo} />
          <Card.Body>
            <Card.Title>MPC Controller</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="Computer vision" src={cv_logo} />
          <Card.Body>
            <Card.Title>Computer Vision</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="Hardware" src={hardware_logo} />
          <Card.Body>
            <Card.Title>Hardware</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}

export default Cards;
