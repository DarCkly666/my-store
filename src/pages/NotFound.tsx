import React, { ReactElement } from "react";

const NotFound = ({ message }: { message: string }): ReactElement => {
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center min-vh-100">
      <h2 className="text-light">{message}</h2>
    </div>
  );
};

export default NotFound;
