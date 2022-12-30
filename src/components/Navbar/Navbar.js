import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  NavContainer,
  NavInput,
  NavLanguage,
  NavLeft,
  NavLogo,
  NavMenuItem,
  NavMiddle,
  NavRight,
  NavSearchContainer,
  NavWrapper,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavLeft>
          <NavLanguage>EN</NavLanguage>
          <NavSearchContainer>
            <NavInput placeholder="Search" />
            <SearchIcon style={{color:'grey', fontsize:'16px'}} />
          </NavSearchContainer>
        </NavLeft>
        <NavMiddle>
          <NavLogo to='/'>SILVER.</NavLogo>
        </NavMiddle>
        <NavRight>
          <NavMenuItem to='/register'>REGISTER</NavMenuItem>
          <NavMenuItem to='/login'>SIGN-IN</NavMenuItem>
          <NavMenuItem to='/cart'>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlinedIcon  />
            </Badge>
          </NavMenuItem>
        </NavRight>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
