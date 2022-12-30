import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  height: 60px;

  ${mobile({
    height: "50px",
  })}
`;

export const NavWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 0px",
  })}
`;
export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const NavLanguage = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;
export const NavSearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
export const NavInput = styled.input`
  border: none;
  outline: none;
  ${mobile({
    width: "50px",
  })}
`;
export const NavMiddle = styled.div`
  flex: 1;
  text-align: center;
`;
export const NavLogo = styled(Link)`
  font-size: 36px;
  font-weight: bold;
  color: black;
  text-decoration: none;

  ${mobile({
    fontSize: "24px",
  })}
`;
export const NavRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: 2,
  })}
`;
export const NavMenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;

  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;
