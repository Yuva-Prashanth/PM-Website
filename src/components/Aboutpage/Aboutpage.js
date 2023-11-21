import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <hr />
            <h3>
              <span>Experience</span>
            </h3>
            <div className="experiencehead">
              <h5>ELECTRIFIT</h5>
              <h5>Co-Founder & Product Manager</h5>
            </div>
            <p className="aboutdetails">
              Revolutionary platform combines AI Gamification, and user-friendly
              design to offer an immersive fitness and wellness coaching
              experience. Its strategy focuses on community, engagement, and
              personalized offerings to attract, retain, and monetize users
              effectively.
            </p>
            <ul className="skilllist">
              <Row className="skilllistrow">
                <h3>Skills</h3>
                <hr />
                <Col>
                  <li>Product Strategy</li>
                  <li>Stakeholders Management</li>
                  <li>Product Development</li>
                  <li>Product Innovation</li>
                  <li>Product Management</li>
                </Col>
                <Col>
                  <li>Product Life Cycle</li>
                  <li>Agile</li>
                  <li>Customer Interviews</li>
                  <li>Customer Feedback</li>
                  <li>Analytical Thinking</li>
                </Col>
                <Col>
                  <li>Critical Thinking</li>
                  <li>Problem Solving</li>
                  <li>Customer Focus</li>
                  <li>Communication Skills</li>
                  <li>Creative Strategic Thinking</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
