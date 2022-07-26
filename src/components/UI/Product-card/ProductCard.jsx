import React from "react";

import "../../../styles/product-card.scss";

import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  

  const notify = () => toast.success("Se agregó " +  title + " correctamente");

  return (
    <div className="product__item">
      <div className="product__img">
        <Link to={`/foods/${id}`}>
          <img src={image01} alt="product-img" className="w-50" />
        </Link>
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-around">
          <span className="product__price">${price}</span>
          <button
            className="addToCart__btn"
            onClick={() => {
              addToCart();
              notify();
            }}
          >
            Comprar
          </button>
          <Toaster position="bottom-right" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
