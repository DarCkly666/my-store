import React, { FC, ReactElement } from "react";

import Styles from "../styles/Loading.module.css";

const Loading: FC = (): ReactElement => {
  return (
    <div className="bg-custom-dark w-100 vh-100 d-flex justify-content-center align-items-center flex-column">
      <div className={Styles.loader}>
        <div className={Styles.face}>
          <div className={Styles.circle}></div>
        </div>
        <div className={Styles.face}>
          <div className={Styles.circle}></div>
        </div>
      </div>
      <h3 className="text-custom-red text-center mt-4">Cargando...</h3>
    </div>
  );
};

export default Loading;
