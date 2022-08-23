import React, { FC, ReactElement } from "react";

const Footer: FC = (): ReactElement => {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-custom-red"
      style={{ height: "100px" }}
    >
      <h5 className="text-light block">
        Tienda Virtual - Cochabamba - Bolivia
      </h5>
      <h5 className="text-light block">+591 67525737</h5>
    </div>
  );
};
export default Footer;
