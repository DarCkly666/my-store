import React, { FC, ReactElement } from "react";

const Footer: FC = (): ReactElement => {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-custom-red"
      style={{ height: "100px" }}
    >
      <h4 className="text-light">Cochabamba - Bolivia</h4>
    </div>
  );
};
export default Footer;
