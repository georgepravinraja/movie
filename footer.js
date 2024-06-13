import { Col, Container, Row } from "react-bootstrap"; 
import React from "react";
import './footer.css';


import './contact.css';

export default function Footer () {
    return (


<div className="footer1" >
<Container>
<Row>


<Col className="contact2" md={6} sm={12} lg={3}>
    
        <h5>ADDRESS</h5><hr></hr>
        <div className="textp">
        <p><b>Address: Movie Fun,</b></p>

<p><b>Downstairs at Lake Level,</b></p>

<p><b>Next to Costa Coffee,</b></p>

<p><b>Cluster C, JLT, Dubai</b></p>

<p><b>Telephone: 052-584-8201</b></p>

<p><b>Write us: info@moviefun.ae</b></p>
</div>
</Col>
<Col className="contact1" lg={3}><h5>CUSTOMER SUPPORT</h5><hr></hr>
<div className="textq">
<p><b>E-mail : moviefun@gmail.com</b></p>
<p><b>Website : www.moviefun.com</b></p>
<p><b>24/7 CUSTOMER SUPPORT</b></p>
</div>
</Col>
<Col lg={3}>
    <h5 style={{textAlign:'center',color:'white',marginTop:'100px',color:'wheat'}}>CONTACT</h5><hr style={{color:'wheat'}}></hr>
<div className="fonts">
<h4><i class="fa-brands fa-facebook-f" ></i><span>  <i class="fa-brands fa-chrome"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-solid fa-phone"></i> <i class="fa-brands fa-whatsapp"></i></span></h4>
</div>                     
</Col>
<Col lg={3}>
    <div className="gplay">
<img className="imageplay" src="./play.png" alt="theater"></img>
</div>
</Col>
</Row>
<p className="copy"><b> Users can easily browse available movies, choose time slots, and select their preferred seats to complete the ticket booking process securely within the movie fun website.</b></p><hr></hr>
<div>
<p className="copy" style={{marginBottom:'-10px'}}><b>Copyright 2012 - 2024 ToXSL Movie fun Pvt. Ltd. All Rights Reserved. Hosted By jiWebhosting.com</b>

</p>
</div>
</Container>
</div>

);
}