import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/authContext";
import "../styles/register.scss";

const Login = () => {
  const [register, setRegister] = useState({});

  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const nocargue = () => {
    navigate("/");
  };

  const handleChange = ({ target: { name, value } }) => {
    setRegister({ ...register, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(register.email, register.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Tienes que ingresar un email valido");
      } else if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      } else if (error.code === "auth/too-many-requests") {
        setError("Has realizado muchos intentos, espera un momento.");
      } else {
        console.log(error.code);
      }
    }
  };

  return (
    <Helmet title="Login">
      {user ? nocargue() : null}
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              {error && <p className="form__error">{error}</p>}
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email o Username"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">No tienes una cuenta? Regístrate</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
