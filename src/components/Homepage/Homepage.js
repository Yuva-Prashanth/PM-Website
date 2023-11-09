import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Homepage/Text";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="homepagebackground">
      <Container className="Container">
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello Everyone!<span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm Prashanth</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/Yuva-Prashanth");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/yuvaprashanth/");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
          </Col>
          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
          <p className="homespan">
            I'm passionate about creating innovative products that solve
            real-world problems. I excel at collaboration and creative strategy,
            bringing ideas to life through groundbreaking products.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
