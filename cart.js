import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Cart({ cart, setCart }) {
  const [price, setPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const incrementCount = (itemId) => {
    const updatedCart = cart.map((item) =>
      item._id === itemId
        ? { ...item, count: (item.count) + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decrementCount = (itemId) => {
    const updatedCart = cart.map((item) =>
      item._id === itemId && item.count > 0
        ? { ...item, count: item.count - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleRemove = (_id) => {
    const updatedCart = cart.filter((item) => item._id !== _id);
    setCart(updatedCart);
  };

  useEffect(() => {
    const totalPrice = cart.reduce(
      (total, item) => total + (item.count || 0) * item.ticketprice,
      0
    );
    setPrice(totalPrice);

    const totalCount = cart.reduce((total, item) => total + (item.count || 0), 0);
    setCartCount(totalCount);
  }, [cart]);

  useEffect(() => {
    const updatedCart = cart.map((item) =>
      item.count === undefined ? { ...item, count: 1 } : item
    );
    setCart(updatedCart);
  }, [cart, setCart]);

  return (
    <div>
      {cart.length === 0 ? (
        <Container className="mt-5 text-center">
          <h3>Your cart is empty</h3>
        </Container>
      ) : (
        <>
          {cart.map((item) => (
            <Container className="cart-imp mt-5" key={item._id}>
              <Row>
                <Col>
                  <Card className="cart-card">
                    <Row>
                      <Col lg={7} className="p-0">
                        <div className="card-box" style={{ display: "flex" }}>
                          <div className="cart-img" style={{ display: "flex" }}>
                            <img
                              src={item.image}
                              className="image-cart p-3"
                              alt="img"
                              style={{ width: "200px" }}
                            />
                            <p>
                              <h5
                                className="movie-name text-center"
                                style={{ marginTop: "120px", marginLeft: "50px" }}
                              >
                                {item.title}
                              </h5>
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col className="p-0" lg={5}>
                        <div style={{ marginTop: "125px" }}>
                          <div style={{ display: "inline-block" }} className="cart-actions">
                            <button
                              className="plus"
                              style={{ backgroundColor: 'blue', height: "45px", width: "45px" }}
                              onClick={() => decrementCount(item._id)}
                            >
                              -
                            </button>
                            <button
                              className="plus"
                              style={{
                                border: "none",
                                backgroundColor: "rgb(40, 1, 75)",
                                color: "white",
                                height: "45px",
                                width: "70px"
                              }}
                            >
                              {item.count || 0}
                            </button>
                            <button
                              className="plus"
                              style={{ backgroundColor: "blue", height: "45px", width: "45px" }}
                              onClick={() => incrementCount(item._id)}
                            >
                              +
                            </button>
                          </div>
                          <span
                            className="rs-total"
                            style={{
                              fontSize: "30px",
                              color: "rgb(40, 1, 75)",
                              paddingLeft: "50px",
                              fontWeight: "bold"
                            }}
                          >
                            <span style={{ color: "black", fontWeight: "25px" }}>Rs.</span> {item.count * item.ticketprice}
                          </span>
                          <button
                            style={{ height: "45px", width: "100px", marginLeft: "40px", border: 'none' }}
                            className="remove-btn"
                            onClick={() => handleRemove(item._id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          ))}
          <Container>
            <Row>
              <Col lg={12}>
                <div className="total" style={{ float: "right" }}>
                  <span><h4 className="cart-last">Total Price of your Selected Movies - </h4></span>
                  <span className="cart-last1" style={{ fontSize: "40px", fontWeight: "bolder" }}>
                    Rs. {price}
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}
