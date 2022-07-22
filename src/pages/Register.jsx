import React, {useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../components/context/authContext";
import { useNavigate } from "react-router-dom";
import "../styles/register.scss"


const Register = () => {



  const [register, setRegister] = useState({});

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("")

  const handleChange = ({ target: { name, value } }) => {
    //e.preventDefault();
    setRegister({ ...register, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signup(register.email, register.password);
      navigate("/");
    } catch (error) {
      if(error.code === "auth/invalid-email"){
        setError("Tienes que ingresar un email valido")
      }
      else if(error.code === "auth/weak-password"){
        setError("Tu contraseña tiene que tener mas de 6 caracteres")
      }
      else if(error.code === "auth/email-already-in-use"){
        setError("Este email ya está en uso")
      }
      
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
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
                  Sign Up
                </button>
              </form>
              <Link to="/login">Ya tienes una cuenta? Logeate</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
