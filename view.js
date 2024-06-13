import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap"; 
import { useParams } from "react-router-dom";
import './view.css';
import Navbar from "./navbar";


export default function View() {
    const [view, setView] = useState(null);
    const { _id } = useParams();

    useEffect(() => {
        const url = `https://backend-crud-one.vercel.app/product/${_id}`;

        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setView(response); 
            })
            .catch((error) => {
                console.error('Error fetching movie data:', error); 
            });
    }, [_id]);

    if (!view) {
        return <div className="load">Please wait...</div>;
    }

    return (
        <>
            <div className="movies-back">
                
                
                <Row>
                    <Col lg={12} md={6} sm={12} key={view._id} className="p-4">
                        <div className="viewtitle">
                            <Row>
                                <Col className="viewimg" lg={6} md={6} sm={12}> <img src={view.image} alt="img" className="movie-images" /></Col>
                                
                                <Col lg={6} md={6} sm={12}>
                                <div><h2 className="vietitle"><b>Title:</b> {view.name}</h2></div>
                                <div className="viedir"><b>Director:</b> {view.director}</div>
                                <div className="vierelease"><b>Release Date:</b> {view.releasedate}</div>
                                <div className="vieprice"><b>Price: Rs.</b>{view.ticketprice}</div>
                                <div className="viedes">{view.description}</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} lg={12}>
                                    <div className="bookbutton">
                                        <button className="vibutton">BOOK NOW</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
