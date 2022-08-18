import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Category } from "../interfaces/category.interface";

const CategoryItem = ({ category }: { category: Category }): ReactElement => {
  return (
    <div
      className="card overflow-hidden border-0 shadow"
      style={{
        background: `url(${category.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "200px",
        height: "200px",
      }}
    >
      <Link
        className="text-decoration-none text-light w-100 h-100 d-flex justify-content-center align-items-center"
        to={`/category/${category.name}`}
        style={{ background: "linear-gradient(0deg, #FF626D, #FFFFFF00" }}
      >
        <h3 className="text-truncate text-light">{category.name}</h3>
      </Link>
    </div>
  );
};

export default CategoryItem;
