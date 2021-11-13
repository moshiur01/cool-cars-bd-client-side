import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import useAuth from "../hooks/useAuth/useAuth";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});
  const { user, registerUser, authError, isLoading, signInWithGoogle } =
    useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newSignUpData = { ...signUpData };
    newSignUpData[field] = value;
    setSignUpData(newSignUpData);
  };

  const handleSignUpSubmit = (e) => {
    if (signUpData.password !== signUpData.retypePassword) {
      alert("password didn't match");
      return;
    }

    registerUser(
      signUpData.email,
      signUpData.password,
      signUpData.name,
      history
    );
    e.preventDefault();
  };
  //   google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <>
      <Header></Header>

      <Container>
        <Form className="mx-auto w-50 my-5" onSubmit={handleSignUpSubmit}>
          <h3 className="text-dark">Please Register</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Your Name"
              name="name"
              onBlur={handleOnBlur}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onBlur={handleOnBlur}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onBlur={handleOnBlur}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Retype Your Password"
              name="retypePassword"
              onBlur={handleOnBlur}
              required
            />
          </Form.Group>
          <>
            {isLoading && <Spinner animation="grow" />}
            {user?.email && (
              <Alert variant="info rounded">User Created successfully</Alert>
            )}
          </>

          <>
            {authError && <Alert variant="danger rounded">{authError}</Alert>}
          </>
          <>
            <Button variant="primary mx-2 my-2" type="submit">
              SignUp
            </Button>
            <Button variant="primary" onClick={handleGoogleSignIn}>
              Google Sign In
            </Button>
          </>

          <p>
            Already have a Account? Please
            <span>
              <Link to="/login"> login</Link>
            </span>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
