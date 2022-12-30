import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

export const CatItemContainer = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
export const CatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "30vh",
  })}
`;
export const CatInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const CatTitle = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
export const CatButton = styled(Link)`
  border: none;
  text-decoration: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;

  &:hover{
    color: black;
  }
`;
