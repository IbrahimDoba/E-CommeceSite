import React from "react";
import {
  CatItemContainer,
  CatButton,
  CatImage,
  CatInfo,
  CatTitle,
} from "./CategoryItemStyles";

const CategoryItems = ({ item }) => {
  return (
    <CatItemContainer>
      <CatImage src={item.img} />
      <CatInfo>
        <CatTitle>{item.title}</CatTitle>
        <CatButton to='/productlist'>SHOP NOW!</CatButton>
      </CatInfo>
    </CatItemContainer>
  );
};

export default CategoryItems;
