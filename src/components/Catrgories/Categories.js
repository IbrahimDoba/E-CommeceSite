import React from "react";
import { categories } from "../data";
import { CatContainer } from "./CategoriesStyles";
import CategoryItems from "./CategoryItems";

const Categories = () => {
  return (
    <CatContainer>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id}/>
      ))}
    </CatContainer>
  );
};

export default Categories;
