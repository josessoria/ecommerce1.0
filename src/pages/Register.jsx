import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { useAuth } from "../components/context/authContext";
import { useNavigate } from "react-router-dom";
import "../styles/register.scss";

const Register = () => {
  const [register, setRegister] = useState({});

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

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
      if (error.code === "auth/invalid-email") {
        setError("Tienes que ingresar un email valido");
      } else if (error.code === "auth/weak-password") {
        setError("Tu contraseña tiene que tener mas de 6 caracteres");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Este email ya está en uso");
      }
    }
  };

  return (
    <Helmet title="Signup">
      <div className="login__page">
        <div className="login__page-left">
          {error && <p className="form__error">{error}</p>}
          <form className="formulario" onSubmit={submitHandler}>
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
              Register
            </button>
          </form>
          <Link to="/login">Ya tienes una cuenta? Logéate</Link>
        </div>
        <div className="login__page-rightt"></div>
      </div>
    </Helmet>
  );
};

export default Register;
