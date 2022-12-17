import React, { Component } from "react";
import { CardGroup, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import cv_logo from "../assets/images/cv_logo.jpeg";
import hardware_logo from "../assets/images/hardware_logo.jpg";
import MPC_logo from "../assets/images/MPC_logo.png";

const mpc_description =
  "Model predictive control (MPC) is a control algorithm that allows for the precise control of dynamic systems. It is a type of feedback control algorithm, in which a model of the system is used to make predictions about the future behavior of the system. The control inputs are then computed based on the predictions, with the goal of achieving the desired system behavior. This is done iteratively, with the model being updated at each time step based on the measured system outputs.";

const cv_description =
  "To detect a ping pong ball using OpenCV, the first step is to threshold the image. This involves setting a threshold value for pixel intensity, and converting the image to black and white based on whether each pixel is above or below the threshold. This helps to separate the ping pong ball from the background. Next, the image is blurred using a Gaussian blur. This helps to smooth out the edges of the ping pong ball, making it easier to detect. ";

const hardware_description =
  "The hardware used for this project was essentially one webcam used to track the ping-pong ball and the platform where the ball needed to be balanced. The platform needed to be able to get attached to the Sawyer arm, which needed to be as light as possible to ensure smooth and precise movement from the arm. The following image corresponds to the first design of the platform. The primary materials used in this first version were: PLA ⅛ in, Plywood Sheet and Wooden square profiles. The manufacturing techniques were 3D printing as well as laser cutting.";

class Cards extends Component {
  state = {};
  render() {
    return (
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="MPC" src={MPC_logo} />
          <Card.Body>
            <Card.Title>MPC Controller</Card.Title>
            <Card.Text>{mpc_description.substring(0, 250)}...</Card.Text>
            <Button href="/Controller" variant="primary">
              Learn more
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="Computer vision" src={cv_logo} />
          <Card.Body>
            <Card.Title>Computer Vision</Card.Title>
            <Card.Text>{cv_description.substring(0, 250)}...</Card.Text>
            <Button href="/ComputerVision" variant="primary">
              Learn more
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="Hardware" src={hardware_logo} />
          <Card.Body>
            <Card.Title>Hardware</Card.Title>
            <Card.Text>{hardware_description.substring(0, 250)}...</Card.Text>
            <Button href="/Hardware" variant="primary">
              Learn more
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}

export default Cards;
