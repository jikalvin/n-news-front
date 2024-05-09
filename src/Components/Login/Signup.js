import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`User ${user.email} created successfully!`);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" title="Sign Up">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
