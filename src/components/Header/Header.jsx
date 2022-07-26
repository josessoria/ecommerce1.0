import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/argentino.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import { useAuth } from "../context/authContext";

import "../../styles/Header.scss";

const nav__links = [
  {
    display: "home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
];

const Header = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);

  if (loading) return <header className="header" ref={headerRef}></header>;

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
           <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>

          {/* ===== Menu ===== */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ===== nav right icons ===== */}

          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            {user ? (
              <h6 className="user__loged">{user.email}</h6>
            ) : (
              <span className="user">
                <Link to="/login">
                  <i className="ri-user-line"></i>
                </Link>
              </span>
            )}

            {user ? (
              <span className="cart__icon">
                <i
                  className="user__exit ri-logout-box-line"
                  onClick={handleLogout}
                ></i>
              </span>
            ) : null}

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
