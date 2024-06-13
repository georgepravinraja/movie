import React, { useEffect, useState } from "react";
import { Col, Row, Navbar,Nav } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import Card from "antd/es/card/Card";
import './movies.css';

import Cart from "./cart";

export default function Movies({ handleClick }) {
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    const url = 'https://backend-crud-one.vercel.app/product';

    fetch(url)
      .then(response => response.json())
      .then(response => setTicket(response));
  }, []);

  return (
   
   
  
    <div className="movies-bg">
      <Row>
        {ticket.map(item => (
          <Col lg={4} md={6} sm={12} key={item._id} className="p-4">
            <div>
              <Card className="cardbg">
                <div>
                  <img src={item.image} alt="img" className="movie-images" />
                  <div>{item.title}</div>
                  <div>{item.releasedate}</div>
                  <Row>
                    <Col md={6}>
                      <div>
                        <Link to={`/view/${item._id}`}>
                          <button className="vbutton">VIEW MORE</button>
                        </Link>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div>
                        <button className="adbutton" onClick={() => handleClick(item)}>ADD TO CART</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
    
  );
}
