import { Col, Container, Row, InputGroup, Form } from "react-bootstrap"; 
import React from "react";
import './contact.css';
import Navbar from "./navbar";

export default function Contact () {
    return (
        <div>
            
            <div className="section1">
                <h1>GET IN TOUCH</h1>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="contac">
                                <h1>ONLINE ENQUIRY</h1>
                            </div>
                            <div className="for">
                                <InputGroup className="input-contents mb-2">
                                    <Form.Control placeholder="Email*" aria-label="email" aria-describedby="basic-addon1"/>
                                </InputGroup>
                                <InputGroup className="input-contents mb-2">
                                    <Form.Control placeholder="Name*" aria-label="name" aria-describedby="basic-addon1"/>
                                </InputGroup>
                                <InputGroup className="input-contents mb-2">
                                    <Form.Control className="input-message" placeholder="Type your message here*" aria-label="message" aria-describedby="basic-addon1"/>
                                </InputGroup>
                            </div>
                            <div className="btn">
                                <button>SEND MESSAGE</button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="vide">
                            <video className="d-block w-100" autoPlay loop muted>
                                <source src="./dead.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}


