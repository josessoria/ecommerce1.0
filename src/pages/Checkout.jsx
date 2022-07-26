import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useNavigate } from "react-router-dom";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Swal from "sweetalert2";

import "../styles/checkout.scss";

const Checkout = () => {
  const dispatch = useDispatch()
  const [enterName, setEnterName] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const navigate = useNavigate();
  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 180;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      Nombre: enterName,
      Numero: enterNumber,
      Direccion: enterCity,
      numero: state.number,
      nombre: state.name,
      expiracion: state.expiry,
      cvc: state.cvc,
    };
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
    succes();
    removerTodo();
  };
  const succes = () => {
    Swal.fire({
      title: "Compra realizada",
      text: "Realizaste la compra con exito",
      icon: "success",
      confirmButtonText: "ok",
    }).then((respuesta) => {
      if (respuesta) {
        ir();
      }
    });
  };

  const removerTodo = () =>{
    dispatch(
      cartActions.removeAllItems()
    )
  }
  const ir = () => {
    navigate("/");
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Direccion de envio</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nombre"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="string"
                    placeholder="Numero telefono"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Direccion"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <Cards
                  number={state.number}
                  name={state.name}
                  expiry={state.expiry}
                  cvc={state.cvc}
                  focused={state.focus}
                />
                <div className="form__group">
                  <label htmlFor="number">Numero</label>
                  <input
                    type="text"
                    name="number"
                    maxLength="16"
                    id="number"
                    required
                    onFocus={handleFocusChange}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    maxLength="35"
                    onFocus={handleFocusChange}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="expiry">Fecha de expiracion</label>
                  <input
                    type="text"
                    name="expiry"
                    maxLength="4"
                    id="expiry"
                    required
                    onFocus={handleFocusChange}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    maxLength="4"
                    required
                    onFocus={handleFocusChange}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="addTOCart__btn">
                  Pagar
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Envio: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
