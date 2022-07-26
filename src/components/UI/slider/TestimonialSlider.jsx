import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/nicoluna.png";
import ava02 from "../../../assets/images/matiascarvallo.png";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.scss";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "De los mejores lugares que vi en mi vida, la comida mas rica ¡DEL
          MUNDO! no hay nada que lo compare, la verdad excelente atencion y
          buenos precios, tengo muchas ganas de volver y probar todos los
          vinos!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className="rounded" />
          <h6>Nicolás Esteban Luna</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Muy pero muy rico todo!, la comida y los precios los mejores que he
          visto, y por mi edad puedo confirmar que es el mejor lugar de comidas
          Argentinas que existe! Felicitaciones!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className="rounded" />
          <h6>Matías Carvallo</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quas ea natus culpa neque odio earum? Nemo quae non omnis aliquid,
          magni vero asperiores id ipsum accusamus repudiandae odit odio?"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className="rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
