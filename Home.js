import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { Col, Container, Row, Form, Button } from "react-bootstrap"; 

export default function Home({ setIsLoggedIn, isLoggedIn, handleLogin, handleLogout }) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('userData'));

    if (savedData && savedData.email === loginData.email && savedData.password === loginData.password) {
      handleLogin();
      setMessage("");
    } else {
      setMessage("Invalid username or password!");
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const newUserData = { ...signupData, isLoggedIn: true };
    localStorage.setItem('userData', JSON.stringify(newUserData));
    handleLogin();
    setMessage("Signup successful! You are now logged in.");
    setIsSignup(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (isSignup) {
      setSignupData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setLoginData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
    setMessage("Logout successful!");
  };

  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <div className={`home-title ${isLoggedIn ? 'logged-in-bg' : 'default-bg'}`}>
      {!isLoggedIn ? (
        <Container className="wrapper">
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <div className="form-box">
                {!isSignup ? (
                  <Form onSubmit={handleLoginSubmit}>
                    <h1 style={{ marginTop: '150px', color: 'black' }}><b>LOGIN</b></h1>
                    {message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}
                    <Form.Group controlId="formLoginEmail" className="input-box">
                      <Form.Control 
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formLoginPassword" className="input-box" >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <div className='butt'>
                      <Button variant="primary" type="submit" style={{ backgroundColor: 'blue', marginTop: '5px', color: 'red' }}>
                        LOGIN
                      </Button>
                    </div>
                    <div className="additional-options">
                      <a href="#" style={{ color: 'wheat' }}>Forget password?</a>
                      <Button variant="link" onClick={() => setIsSignup(true)} style={{ color: 'wheat', marginLeft: '10px' }}>Signup</Button>
                    </div>
                  </Form>
                ) : (
                  <Form onSubmit={handleSignupSubmit}>
                    <h1 style={{ marginTop: '150px', color: 'black' }}><b>SIGNUP</b></h1>
                    {message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}
                    <Form.Group controlId="formSignupUsername" className="input-box">
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        name="name"
                        value={signupData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formSignupEmail" className="input-box">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={signupData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formSignupPassword" className="input-box">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={signupData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <div className='butt'>
                      <Button variant="primary" style={{ backgroundColor: 'blue', marginTop: '5px', color: 'red' }} type="submit">
                        SIGNUP
                      </Button>
                    </div>
                    <div className="additional-options">
                      <Button variant="link" onClick={() => setIsSignup(false)} style={{ color: 'wheat' }}>Back to Login</Button>
                    </div>
                  </Form>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col>
              <h1 style={{ color: 'blue', textAlign: 'center', marginTop: '90px' }}>MOVIES FUN</h1>
              <h2>Welcome, {userData?.name || userData?.email}!</h2>
              <div className='tex'>
              <p style={{ color: 'wheat', marginTop: '50px' }}>
                Movies Fun- An online system allows customers to access services from the comfort of their homes. ...
                Minimize Traffic - Making services easily accessible to the customers means that fewer will be coming to purchase from the ticket window.
              </p>
              </div>
              <Button variant="danger" style={{ marginTop: "150px", color: 'wheat' }} onClick={handleLogoutClick}>
                <b>Logout</b>
              </Button>
              {message && <p style={{ color: 'blue', marginTop: '20px' }}>{message}</p>}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
