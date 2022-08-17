import React, { FC, ReactElement } from "react";

const Footer: FC = (): ReactElement => {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-custom-red"
      style={{ height: "100px" }}
    >
      <h3 className="text-light">Footer</h3>
    </div>
  );
};
export default Footer;
