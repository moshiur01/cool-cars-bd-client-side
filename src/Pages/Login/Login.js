import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import useAuth from "../hooks/useAuth/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle, loginUser, isLoading, authError } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <>
      <Header></Header>

      <Container className="login">
        <Form className="mx-auto w-50 my-5" onSubmit={handleLoginSubmit}>
          <h3 className="text-dark">Please Login</h3>

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
          {isLoading && <Spinner animation="grow" />}

          <Button variant="primary mx-2" type="submit">
            Login
          </Button>
          <Button variant="primary" onClick={handleGoogleSignIn}>
            Google Sign In
          </Button>
          {authError && <Alert variant="danger">{authError}</Alert>}

          <p>
            New User? Please
            <span>
              <Link to="/signUp"> Sign Up</Link>
            </span>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default Login;
