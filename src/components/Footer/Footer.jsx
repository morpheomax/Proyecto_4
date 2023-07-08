import React from "react";
import "./Footer.css";

import "bootstrap-icons/font/bootstrap-icons.css";
export const Footer = () => {
  return (
    <>
      <div
        className="Footer  container-fluid bg-dark border-bottom-dark"
        data-bs-theme="dark"
      >
        <ul className="social mt-3 gap-2">
          <p>Siguenos en nuestras Redes Sociales</p>

          <li>
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <i className="bi bi-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
