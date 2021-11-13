import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const confirm = window.confirm(`Do you want to Make ${email} as a Admin`);

    if (confirm) {
      const user = { email };
      fetch("https://cryptic-fortress-14110.herokuapp.com/users/admin", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Admin Added");
            document.getElementById("admin-form").reset();
          } else {
            alert(`${email} is Already an Admin`);
            document.getElementById("admin-form").reset();
          }
        });
    }

    e.preventDefault();
  };
  return (
    <Container className="make-admin">
      <h3>Make Admin</h3>
      <Form id="admin-form" onSubmit={handleAdminSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="w-50"
            type="email"
            placeholder="Enter email"
            onBlur={handleOnBlur}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Admin
        </Button>
      </Form>
    </Container>
  );
};

export default MakeAdmin;
