import React from "react";
import { Category } from "../interfaces/category.interface";
import CategoryItem from "./CategoryItem";

const CategoriesContainer = ({
  categories,
}: {
  categories: Array<Category>;
}) => {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-around">
      {categories.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesContainer;
