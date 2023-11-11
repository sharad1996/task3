import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
    console.log("================ >>>>>>>>>>", obj);
    // Call the API
    resetState();
  };

  return (
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
  );
}

export default ContactUs;
