import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import loginImg from "../../../assets/login.png";
import "./Login.css";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGithubSingin = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="login-form ">
      <Container>
        <div className="text-center">
          <img src={loginImg} width="300" alt="login" />
        </div>
        <Row>
          <Col lg={5} className="m-auto mt-2">
            <Form onSubmit={handleLogin} className="form">
              <p className="text-danger text-center">{error}</p>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h3>Please Login</h3>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="pws-btn">
                  <Form.Control
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <Form.Label onClick={() => setShow(!show)}>
                    <small className="show-hide">
                      {show ? (
                        <span>Hide Password</span>
                      ) : (
                        <span>Show Password</span>
                      )}
                    </small>
                  </Form.Label>
                </div>
              </Form.Group>

              <Button
                variant="primary"
                className="py-2 mb-2 login-btn"
                type="submit"
              >
                Login
              </Button>
              <div>
                <img
                  onClick={handleGoogleSignIn}
                  height={"40"}
                  style={{ cursor: "pointer", marginTop: "10px" }}
                  src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  onClick={handleGithubSingin}
                  height={"40"}
                  style={{ cursor: "pointer", marginTop: "10px" }}
                  src="https://i.ibb.co/g9f4P0S/github-btn.png"
                  alt=""
                />
              </div>
              <br />
              <Form.Text className="text-secondary">
                Don't Have an Account ? <Link to="/register">Register</Link>
              </Form.Text>
              <p className="text-success">{success}</p>
            </Form>
          </Col>
        </Row>

        {/* <Loginone></Loginone> */}
      </Container>
    </div>
  );
};

export default Login;
