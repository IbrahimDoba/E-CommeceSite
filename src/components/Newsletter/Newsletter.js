import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-style: 24px;
  font-weight: 300;
  margin-bottom: 30px;
  ${mobile({
    textAlign: "center",
  })}
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${mobile({
    width: "80%",
  })}

`;
const Input = styled.input`
    border: none;
    flex:8;
    padding-left: 20px;
    outline: none;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
  
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Input your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
