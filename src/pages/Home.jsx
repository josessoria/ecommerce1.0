import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Heroimg from "../assets/images/hero.png";
import "../styles/Hero-section.scss";
import { Link } from "react-router-dom";

import Category from "../components/UI/Category/Category.jsx";

import "../styles/home.scss";

import FeatureImg01 from "../assets/images/service-01.png";
import FeatureImg02 from "../assets/images/service-02.png";
import FeatureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";

import foodCategoryimg01 from "../assets/images/hamburger.png";
import foodCategoryimg02 from "../assets/images/pizza.png";
import foodCategoryimg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/Product-card/ProductCard.jsx";

import WhyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Entrega Comoda",
    imgUrl: FeatureImg01,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, exercitationem.`,
  },
  {
    title: "Cena Veloz",
    imgUrl: FeatureImg02,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, exercitationem.`,
  },
  {
    title: "Excelente presentación",
    imgUrl: FeatureImg03,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, exercitationem.`,
  },
];

const Home = () => {
  const [category, setCategory] = useState(`ALL`);
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Es muy facil pedir</h5>
                <h1 className="mb-4 hero__title">
                  <span>HAY HAMBRE? </span>Espera <br />
                  la comida <span>en tú puerta </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  facilis.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Pedir Ya! <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all_foods-btn">
                    <Link to="/foods">Ver Comidas</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    Envios sin cargo
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% Confiable
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={Heroimg} alt="Hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Nosotros lo preparamos</h5>
              <h2 className="feature__title">Tú esperas sentado</h2>
              <h2 className="feature__title">
                y nosotros <span>te lo llevamos</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                minus!
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur, facere!
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" sm="6" xs="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2> Comidas Favoritas </h2>
            </Col>
            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-2">
                <button
                  className={`all__btn ${
                    category === "ALL" ? `foodBtnActive` : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? `foodBtnActive` : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryimg01} alt="" />
                  Hamburguesas
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? `foodBtnActive` : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryimg02} alt="" />
                  Pizzas
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? `foodBtnActive` : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryimg03} alt="" />
                  Panes
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={WhyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  voluptas iure consectetur exercitationem architecto minima et
                  ipsam in alias temporibus dicta, accusamus, error libero
                  maiores atque magnam laborum fuga illum?
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"> </i>
                      Comida grande y rica
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Vero, ratione.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"> </i>
                      Calidad única
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas, iure?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"> </i>
                      Ordena desde cualquier ubicación
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas, iure?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial mb-5">
                <h5 className="testimonial__subtitle mb-4">Testimonios</h5>
                <h2 className="testimonial__title mb-4">
                  Lo que se habla <span> de nosotros</span>:
                </h2>
                <p className="testimonial__desc mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque facere illum totam et perferendis molestiae eum fugit
                  hic quas voluptatum.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
