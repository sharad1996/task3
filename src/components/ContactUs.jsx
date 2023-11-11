import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../styles/styles.css";

import Navbar from "./Navbar";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const resetState = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  const onHandleSubmit = () => {
    if (name === "" || email === "" || phone === "") {
      return;
    }
    const obj = {
      name,
      email,
      phone,
    };
    // Call the API
    axios
      .post("http://localhost:8081/v1/users/create", obj)
      .then(function (response) {
        alert("Thank you for contact us");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        resetState();
      });
  };

  return (
    <Container>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter your name"
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="name@example.com"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                placeholder="Enter your phone number"
                name="phone"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button onClick={onHandleSubmit}>Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
