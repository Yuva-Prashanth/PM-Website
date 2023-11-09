import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          Product role seeker
          <br /> Eager to explore the synergy of transforming your digital
          <br /> concepts into reality or sharing any particular messages you
          have in mind? <br />
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open(
              "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfqcLdlJsKHBFzcxbScTsxZfGHPvNTZkPVchJxMHlnkPsWRwbNbnRhcDzvpJPNcXNfqrqB"
            );
          }}
        >
          Say Hello
        </button>
      </Container>
    </div>
  );
}

export default Contactpage;
