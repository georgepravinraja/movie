import React from 'react';

import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './about.css'

export default function About()  {
  return (
    
    <div className='about-title'>
     <Container>
        <Row>
            <Col lg={12}>
            <h1 style={{textAlign:'center',marginTop:'10px',color:'wheat'}}>ABOUT</h1>
            </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <p style={{color:'white',marginTop:'80px'}}>Movie fun offers the best shows in India with help from VMware. When people in India want to see a movie, get tickets to a play or attend a cricket match, they don't wait in line outside a box office. They whip out their phones and tap BookMyShow. Within moments, the tickets are delivered to the Movie fun website.</p>
          </Col>
          <Col lg={6}>
            <div className='about-image'>
          <img src="./ghost.jpg" alt="jack"></img>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
          <div className='about-image'>
          <img src="./couples.jpg" alt="jack"></img>
          </div>
          </Col>
          <Col lg={6}>
        <p style={{marginTop:'100px',color:'white'}}>  With new tagline 'It All Starts Here' Movie fun' launches brand campaign. The campaign has been conceptualised and executed by BBH India and Movie fun's in-house creative team.</p>
<p style={{marginTop:'30px',color:'white'}}>Overall, movies fun has become a popular entertainment app because it offers a convenient and user-friendly way for people to access and book tickets for a wide range of entertainment events, making it easier for them to enjoy their favourite entertainment.</p>
          </Col>
        </Row>
        <Row style={{paddingBottom:'10px'}}>
          <Col lg={6}>
          <p style={{marginTop:'100px',color:'white'}}>Ashish Hemrajani is the CEO and co-founder of Movies fun, one of the most popular websites in India for buying tickets to live events like sporting events, plays, concerts, and movies. In 1999, he founded Bigtree Entertainment, the parent company that runs Movies fun.</p>
          </Col>
          <Col lg={6}>
          <div className='about-image'>
          <img src="./s.jpg" alt="s"></img>
          </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col lg={12}>
        
            <Carousel className='carou'>
              <Carousel.Item>
                
                <img
                  className="d-block w-100"
                  src="./avv.jpg"
                  alt="First slide"
                />
                
               
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./batman.jpg"
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./aqua.jpg"
                  alt="Third slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./deadly.jpg"
                  alt="Third slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./iorn.jpg"
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>

          </Col>
        </Row>
     </Container>
     
    </div>
    
  );
}


