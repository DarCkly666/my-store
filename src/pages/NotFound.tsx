import React, { FC, ReactElement } from "react";

const NotFound: FC = (): ReactElement => {
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center min-vh-100">
      <h2 className="text-light">Page not found</h2>
    </div>
  );
};

export default NotFound;
