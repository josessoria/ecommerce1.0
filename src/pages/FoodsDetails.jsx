import React from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import Commonsection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import productImg from "../assets/images/product_01.1.jpg";
import "../styles/product-details.scss";

const FoodsDetails = () => {
  return (
    <Helmet title="Product-details">
      <Commonsection title="product 01" />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={productImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">Pizza with mushroom</h2>
                <p className="product__price">
                  Price: <span>$34</span>
                </p>
                <p className="category mb-5">
                  Category: <span>Burger</span>
                </p>
                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6>Descripción</h6>
                <h6>Review</h6>
              </div>

              <div className="tab__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  ea et accusamus ullam eius, eos est optio nam dicta quasi hic
                  animi, minus ex quo earum quaerat quos! Iure veritatis saepe
                  maxime. Iste quas suscipit sunt? Minus rerum a molestias.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodsDetails;
