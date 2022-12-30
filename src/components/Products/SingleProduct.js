import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
    opacity: 0;
    margin: 10px;
    width: 100%;
    height: 100%;
    position: absolute ;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center; 
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 400px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }

  ${mobile({
    display: "none",
  })}
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    object-fit: cover;
    z-index: 2;

`;

const Icon = styled(Link)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    color: black;

    &:hover{
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
`;

const SingleProducts = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon to='/product' >
          <ShoppingCartOutlined />
        </Icon >
        <Icon to='/product'>
          <SearchOutlined />
        </Icon>
        <Icon to='/product' >
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default SingleProducts;
