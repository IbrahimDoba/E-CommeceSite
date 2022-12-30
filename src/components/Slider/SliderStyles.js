import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive"

export const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const SilderWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

export const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  height: auto;
  width: 100%;
  margin-left: 10px;
  /* border: 1px solid red; */
  ${mobile({
    display: "none",
  })}
  
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled(Link)`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: black;
  text-decoration: none;
  border: 1px solid black;
`;
