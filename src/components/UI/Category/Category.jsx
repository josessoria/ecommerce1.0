import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/brocheta.png";
import categoryImg02 from "../../../assets/images/costilla.png";
import categoryImg03 from "../../../assets/images/muslo.png";
import categoryImg04 from "../../../assets/images/chorizos.png";
import "../../../styles/Category.scss"

const categoryData = [
  {
    display: "Brochetas",
    imgUrl: categoryImg01,
  },
  {
    display: "Costillas",
    imgUrl: categoryImg02,
  },
  {
    display: "Muslo",
    imgUrl: categoryImg03,
  },
  {
    display: "Embutidos",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4 d-flex align-content-center justify-content-center" key={index}>
            {" "}
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
