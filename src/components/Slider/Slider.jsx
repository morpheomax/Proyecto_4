import React from "react";
import slider8 from "../../assets/img/slider/slider8.jpeg";
import { Link } from "react-router-dom";
import "./Slider.css";
import Button from "react-bootstrap/Button";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="img-container">
        <div className="overlay"></div>
        <img src={slider8} className="full-width-img" />
        <div className="txt">
          <h1>Boss Burger</h1>
          <p>
            Ven a disfrutar de nuestra gran variedad de hamburguesas artesanales.
          </p>
        </div>
        <Button variant="outline-warning" as={Link} to="/reserva" className="btn-position">
          Reserva aquí!
        </Button>{" "}
      </div>
    </div>
  );
};

