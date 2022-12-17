import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player/youtube";

class Video extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          {" "}
          <Row>
            <Col sm>
              {" "}
              {/* <video width="100%" height="auto" controls>
                <source src={demo} type="video/mp4" />
              </video> */}
              <ReactPlayer width="100%" url="https://youtu.be/ubb5QVqX0ho" />
            </Col>
            <Col sm>
              {" "}
              {/* <video width="100%" height="auto" controls>
                <source src={real_test_visu} type="video/mp4" />
              </video> */}
              <ReactPlayer width="100%" url="https://youtu.be/TfWNQJMl5ek" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Video;
