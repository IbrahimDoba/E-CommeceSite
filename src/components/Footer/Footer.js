import {
  CreditCard,
  CreditScore,
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Payments,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none",
  })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: black;
  text-decoration: none;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#eee",
  })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const PaymentContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0px;
    justify-content: flex-start;
`
const Payment = styled.div`
  width: 50%;
  height: 40px;
  margin-left: 10px;
  color: ${props=>props.color};
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SILVER.</Logo>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
          suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia, sint? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quidem culpa non nulla illo alias!
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="34405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="360023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="0072b1 ">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <Link to="/">
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Traking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Reviews</ListItem>
          <ListItem>Terms </ListItem>
        </List>
        </Link>
      </Center>
      <Right>
        <Title></Title>
        <ContactItem>
          <Room style={{marginRight:'10px'}}/> Wuse zonr 5, Abuja
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:'10px'}}/> +234 809111951
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:'10px'}}/> Ibrahimdoba55@gmail.com
        </ContactItem>
        <PaymentContainer>
        <Payment color="red">
          <Payments  fontSize="large" />
        </Payment>
        <Payment color="blue">
          <CreditCard fontSize="large" />
        </Payment>
        <Payment color="green">
          <CreditScore fontSize="large"  />
        </Payment>
        </PaymentContainer>
      </Right>
    </Container>
  );
};

export default Footer;
