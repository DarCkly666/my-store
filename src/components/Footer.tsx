import React, { FC, ReactElement } from "react";

const Footer: FC = (): ReactElement => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column bg-custom-red px-3"
      style={{ height: "100px" }}
    >
      <h6 className="text-light">Tienda online T&T - Cochabamba - Bolivia</h6>

      <a
        className="text-light text-decoration-none fw-bold"
        href="https://wa.me/59167525737"
      >
        +591 67525737
        <i className="fa-brands fa-whatsapp ms-2"></i>
      </a>
    </div>
  );
};
export default Footer;
