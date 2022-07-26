import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/argentino.svg";
import "../../styles/Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a
                architecto.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5>Delivery Horarios</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Lunes - viernes</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sabado - Domingos</span>
                <p>10:00am - 4:00pm / 08:00pm - 12:30am</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5>Contactos</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Ubicación: Tucuman, Yerba Buena, Aconquija 1020</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Numero: +54 381-222-4545</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Promociones</h5>
            <p>Subscribite para recibir promociones</p>
            <div className="newsletter">
              <input type="email" placeholder="Ingrese Email"/>
              <span><i className="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyrigth__text">CopyRigth - 2022, Website made by Jose Soria. AllRights Reserveds.</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social_links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Seguínos en: </p>
              <span> <Link to=""><i className="ri-instagram-line"></i></Link> </span>
              <span> <Link to=""><i className="ri-facebook-circle-line"></i></Link> </span>
              <span> <Link to=""><i className="ri-youtube-line"></i></Link></span>
            </div>
              
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
